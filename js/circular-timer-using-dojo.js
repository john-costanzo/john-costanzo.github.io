// File last changed: <2023-09-11 Mon 13:48:59>

const zeroPad = ( num, places ) => String( num ).padStart( places, '0' );

function toggleElement( elementId, displayStyle ) {
    // Set the style.display to DISPLAYSTYLE if provided.
    // Else toggle its state between "none" and "flex".
    const element = document.getElementById( elementId );
    if( !element ) {
	console.log( "toggleElement: cannot locate " + elementId );
	return;
    }

    const style = element.style;

    if( displayStyle ) {
	style.display = displayStyle;
    } else {
	if( style.display == "none" )
	    style.display = "flex";
	else
	    style.display = "none";
    }
}

class CircularTimer {

    /**
     * Construct a new CircularTimer, optionally configure to play sounds upon completion.
     *
     * @param {number} initial_time - The number of seconds the timer is initialized with each time it is run.
     * @param {number} alert_time   - The number of seconds remaining in the countdown that the timer should go into alert mode.
     * @param {map of arrays} sounds - A HashMap keyed on integers, which specify number of seconds remaining in the countdown, 
     *                                 and values of either a string or an  arrary of strings that specify file names to play at those times.
     *
     * @example
     * // Constructs a new ( silent ) CircularTimer initialized to 10 seconds.
     * let ct1 = new CircularTimer( 10 )
     *
     * @example
     * // Constructs a new CircularTimer initialized to 30 seconds that
     * // plays two sounds with 10 seconds remaining and another at countdown termination.
     * let s = new Object( );
     * s[ 10 ] = [ 'fileA', 'fileB' ];
     * s[ 0 ] = 'fileC';
     * let ct2 = new CircularTimer( 30, s )
     *
     * @returns {CircularTimer} Returns a new CircularTimer embedded in the page at the point of call.
     */
    constructor( timerContainer, initialTime, alertTime, sounds ) {
	var circularTimer;
	var initialSeconds = initialTime % 60;
	var initialMinutes = Math.floor( initialTime / 60 );
	var expirationTime;
	var timeAtPause = 0; // capture the time pause was clicked
	var isRunning = false;

	require( [
            "dojo/dom", "dojo/dom-construct", "dojo/on", "dojo/ready",
	], function ( dom, domConstruct, on, ready ) {
            ready( function ( ) {

		const circularTimer = dom.byId( timerContainer );
		if( !circularTimer ) {
		    console.log( "createTimer: cannot locate " + timerContainer );
		    return;
		}

		const timerControls = domConstruct.create( "div", {
		}, circularTimer );
		timerControls.classList.add( "circular-timer-controls" );

		// Create an SVG element
		var svg = document.createElementNS( "http://www.w3.org/2000/svg", "svg" );
		svg.setAttribute( "width", "100" );
		svg.setAttribute( "height", "100" );

		// Create a circle
		var circle = document.createElementNS( "http://www.w3.org/2000/svg", "circle" );
		circle.setAttribute( "cx", "50" );
		circle.setAttribute( "cy", "50" );
		circle.setAttribute( "r", "45" );
		circle.setAttribute( "fill", "lightblue" );
		circle.classList.add( "timer-arc" );

		// Create text
		var text = document.createElementNS( "http://www.w3.org/2000/svg", "text" );
		text.setAttribute( "font-size", "32" );
		const textX = parseInt( circle.getAttribute( "cx" ) );
		const textY = parseInt( circle.getAttribute( "cy" ) ) + ( text.getAttribute( "font-size" )/2 );

		text.setAttribute( "x", textX );
		text.setAttribute( "y", textY );
		text.setAttribute( "text-anchor", "middle" );
		text.textContent = "";

		// Append the circle and text to the SVG element
		svg.appendChild( circle );
		svg.appendChild( text );

		// Append the SVG element to the circle container
		timerControls.appendChild( svg );

		if( !svg || !circle ) {
		    console.log( "createTimer: cannot create circle within an SVG element" );
		    return;
		}

		const timeControls = domConstruct.create( "div", {
		}, timerControls );
		timeControls.classList.add( "time-controls" );

		const minutes = domConstruct.create( "input", {
		    type: "number",
		    value: initialMinutes,
		    min: "0",
		    innerHTML: "minutes"
		}, timeControls );

		minutes.recent = minutes.value;
		on(minutes, "change", function (event) {
		    minutes.old = minutes.recent;
		    minutes.recent = minutes.value;

                    totalTime = ( parseInt( minutes.value ) || 0 ) * 60 + ( parseInt( seconds.value ) || 0 );
		    expirationTime += ( minutes.recent - minutes.old ) * 60000;
		    if( isRunning ) {
			remainingTime += ( minutes.recent - minutes.old );
		    } else {
			remainingTime = ( expirationTime - Date.now() ) / 1000;
		    }
		});

		const colon = domConstruct.create( "span", {
		    innerHTML: " : "
		}, timeControls );

		const seconds = domConstruct.create( "input", {
		    type: "number",
		    value: zeroPad( initialSeconds, 2 ),
		    min: "0",
		    max: "59",
		    innerHTML: "seconds"
		}, timeControls );

		seconds.recent = seconds.value;
		on(seconds, "change", function (event) {
		    seconds.old = seconds.recent;
		    seconds.recent = seconds.value;
		    seconds.value = zeroPad( seconds.value, 2 );

                    totalTime = ( parseInt( minutes.value ) || 0 ) * 60 + ( parseInt( seconds.value ) || 0 );
		    expirationTime += ( seconds.recent - seconds.old ) * 1000;
		    if( isRunning ) {
			remainingTime += ( seconds.recent - seconds.old );
		    } else {
			remainingTime = ( expirationTime - Date.now() ) / 1000;
		    }
		});

		const startButton = domConstruct.create( "button", {
		    innerHTML: "Start"
		}, timerControls );
		startButton.classList.add( "button" );
		var startButtonHandler;

		const radius = circle.r.baseVal.value;
		const circumference = 2 * Math.PI * radius;

		var totalTime = 0; // in seconds
		var remainingTime = 0; // in seconds
		var timerInterval;

		startButtonHandler = on( startButton, "click", startTimer );

		function commenceTicking( ) {
		    if ( remainingTime <= 0 ) {
			clearInterval( timerInterval );
			startButton.innerHTML = "Start";
			startButtonHandler.remove( );
			startButtonHandler = on( startButton, "click", startTimer );
		    }
		    updateDisplay( );
		}

		function pauseTimer( ) {
                    clearInterval( timerInterval );
		    timeAtPause = Date.now();
		    isRunning = false;
		    startButton.innerHTML = "Resume";
		    startButtonHandler.remove( );
		    startButtonHandler = on( startButton, "click", resumeTimer );
		}

		function resumeTimer( ) {
                    clearInterval( timerInterval );
		    expirationTime += Date.now() - timeAtPause;
                    updateDisplay( );
		    isRunning = true;
		    startButton.innerHTML = "Pause";
		    startButtonHandler.remove( );
		    startButtonHandler = on( startButton, "click", pauseTimer );

                    timerInterval = setInterval( commenceTicking, 1000 );
		}

		function startTimer( ) {
                    totalTime = ( parseInt( minutes.value ) || 0 ) * 60 + ( parseInt( seconds.value ) || 0 );
		    expirationTime = Date.now() + ( totalTime * 1000 );
                    clearInterval( timerInterval );
		    isRunning = true;
		    startButton.innerHTML = "Pause";
		    startButtonHandler.remove( );
		    startButtonHandler = on( startButton, "click", pauseTimer );


                    updateDisplay( );
                    timerInterval = setInterval( commenceTicking, 1000 );
		}

		function updateDisplay( ) {
		    remainingTime = ( expirationTime - Date.now() ) / 1000;

                    var min = Math.floor( remainingTime / 60 );
		    var sec = Math.round( remainingTime % 60 );
		    if( sec < 0 ) sec = 0;
		    if( min < 0 ) min = 0;
		    if( sec >= 60 ) {
		    	sec = 0;
			min++;
		    }
		    text.textContent = zeroPad( min, 2 ) + ":" + zeroPad( sec, 2 );

                    // Update the SVG timer arc
		    let fractionRemaining = ( ( remainingTime / totalTime ) * circumference );
		    if( fractionRemaining < 1 ) fractionRemaining = 0;
		    circle.style.strokeDasharray = fractionRemaining + " " + circumference;
		}
            } );
	} );
	toggleElement( timerContainer, "none" );
	return( circularTimer );
    }
};


// Local Variables:
// time-stamp-line-limit: 10
// time-stamp-format: "<%Y-%02m-%02d %3a %02H:%02M:%02S>"
// time-stamp-active: t
// time-stamp-start: "File last changed:[ \t]+"
// time-stamp-end: "$"
// End:
