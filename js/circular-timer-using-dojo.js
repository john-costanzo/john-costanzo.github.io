const circularTimerVersion = "Monday, 2023-09-25 @ 19:09:21";

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
     * @param {string} timerContainer - The id of an element to anchor this CircularTimer to.
     * @param {number} initialTime    - The number of seconds the timer is initialized with each time it is run.
     * @param {number} alertTime      - The number of seconds remaining in the countdown that the timer should go into alert mode.
     * @param {map of arrays} sounds  - A HashMap keyed on integers, which specify number of seconds remaining in the countdown, 
     *                                  and values of either a string or an  arrary of strings that specify file names to play at those times.
     *
     * @example
     * // Constructs a new ( silent ) CircularTimer initialized to 10 seconds.
     * let ct1 = new CircularTimer( 'timerContainer-001', 10 )
     *
     * @example
     * // Constructs a new CircularTimer initialized to 30 seconds that
     * // plays two sounds with 10 seconds remaining and another at countdown termination.
     * let s = new Object( );
     * s[ 10 ] = [ 'fileA', 'fileB' ];
     * s[ 0 ] = 'fileC';
     * let ct2 = new CircularTimer( 'timerContainer-002', 30, s )
     *
     * @returns {CircularTimer} Returns a new CircularTimer embedded in the page at the point of call.
     */
    constructor( timerContainer, initialTime, alertTime=30, sounds, position=-1 ) {
	const self = this; // Capture the value of 'this'
	self.timerInterval = undefined;
	self.audios = []; // an array of Audio media that have been played

	var circularTimer;
	var initialSeconds = initialTime % 60;
	var initialMinutes = Math.floor( initialTime / 60 );
	var expirationTime;
	var timeAtPause = 0; // capture the time pause was clicked
	var isRunning = false;


	require( [
            "dojo/dom", "dojo/dom-construct", "dojo/on", "dijit/form/DropDownButton", "dijit/DropDownMenu", "dijit/MenuItem", "dijit/MenuSeparator", "dijit/Dialog","dijit/form/Button", "dojo/ready",
	], function ( dom, domConstruct, on, DropDownButton, DropDownMenu, MenuItem, MenuSeparator, Dialog, Button, ready ) {
            ready( function ( ) {

		const circularTimer = dom.byId( timerContainer );
		if( !circularTimer ) {
		    console.log( "createTimer: cannot locate " + timerContainer );
		    return;
		}

		const timerControls = domConstruct.create( "div" );
		domConstruct.place( timerControls, circularTimer, ( position == "-1" ) ? "last" : parseInt( position ) );
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
		minutes.classList.add( "timer-input" );

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
		seconds.classList.add( "timer-input" );

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


		const circularTimerButtonContainer = domConstruct.create( "div", {}, timerControls );
		circularTimerButtonContainer.classList.add( "circular-timer-button-container" );

		var timerMenu = new DropDownButton({
		    label: "",
		    dropDown: new DropDownMenu({
			style: "display: none;"
		    })
		}, "circularTimerGearsMenu");

		const resetTimerMenuItem = new MenuItem({
		    label: "Reset Timer",
		    iconClass: "fas fa-undo",
		    onClick: function() {
			resetTimer();
		    },
		    disabled: false,
		});

		const duplicateTimerMenuItem = new MenuItem({
		    label: "Duplicate Timer",
		    iconClass: "fas fa-clone",
		    onClick: function() {
			duplicateTimer();
		    },
		    disabled: false,
		});

		timerMenu.dropDown.addChild( resetTimerMenuItem );
		timerMenu.dropDown.addChild( duplicateTimerMenuItem );

		const startButton = domConstruct.create( "button", {
		    innerHTML: "Start"
		}, circularTimerButtonContainer );
		startButton.classList.add( "button" );
		timerMenu.placeAt( circularTimerButtonContainer, "last" );

		var startButtonHandler;

		const radius = circle.r.baseVal.value;
		const circumference = 2 * Math.PI * radius;

		var totalTime = 0; // in seconds
		var remainingTime = 0; // in seconds

		startButtonHandler = on( startButton, "click", startTimer );

		function commenceTicking( ) {
		    if ( remainingTime <= 0 ) {
			clearInterval( self.timerInterval );
			startButton.innerHTML = "Start";
			startButtonHandler.remove( );
			startButtonHandler = on( startButton, "click", startTimer );
		    }

		    if( remainingTime <= alertTime ) {
			svg.classList.add( "pulse-element" );
			text.classList.remove( "normal-style" );
			text.classList.add( "alert-style" );
		    }

		    updateDisplay( );
		}

		function pauseTimer( ) {
                    clearInterval( self.timerInterval );
		    timeAtPause = Date.now();
		    isRunning = false;
		    startButton.innerHTML = "Resume";
		    startButtonHandler.remove( );
		    startButtonHandler = on( startButton, "click", resumeTimer );
		}

		function resumeTimer( ) {
                    clearInterval( self.timerInterval );
		    expirationTime += Date.now() - timeAtPause;
                    updateDisplay( );
		    isRunning = true;
		    startButton.innerHTML = "Pause";
		    startButtonHandler.remove( );
		    startButtonHandler = on( startButton, "click", pauseTimer );

                    self.timerInterval = setInterval( commenceTicking, 1000 );
		}

		function startTimer( ) {
                    totalTime = ( parseInt( minutes.value ) || 0 ) * 60 + ( parseInt( seconds.value ) || 0 );
		    expirationTime = Date.now() + ( totalTime * 1000 );
                    clearInterval( self.timerInterval );
		    isRunning = true;
		    startButton.innerHTML = "Pause";
		    startButtonHandler.remove( );
		    startButtonHandler = on( startButton, "click", pauseTimer );
		    svg.classList.remove( "pulse-element" );

		    text.classList.add( "normal-style" );
		    text.classList.remove( "alert-style" );

                    updateDisplay( );
                    self.timerInterval = setInterval( commenceTicking, 1000 );
		}

		function childsIndex( parent, child ) {
		    // return the index of PARENT's CHILD.
		    for( const i in parent.children ) {
			if( parent.children[ i ] == timerControls ) return( i );
		    }
		    return( -1 );
		}

		function duplicateTimer( ) {
		    const childIndex = childsIndex( circularTimer, timerControls );
		    const latestInitialTime = ( ( parseInt( minutes.value ) || 0 ) *60 ) + ( parseInt( seconds.value ) || 0 );
		    new CircularTimer( timerContainer, latestInitialTime, alertTime, sounds, childIndex );
		    toggleElement( timerContainer, "flex" );
		}

		function resetTimer( ) {
                    clearInterval( self.timerInterval );
		    timeAtPause = Date.now();
		    isRunning = false;
		    startButton.innerHTML = "Start";
		    startButtonHandler.remove( );
		    startButtonHandler = on( startButton, "click", startTimer );
		    expirationTime = Date.now();
		    svg.classList.remove( "pulse-element" );
		    text.classList.remove( "alert-style" );
		    updateDisplay( true );
		    text.textContent = "";
		    self.cleanUp();
		}

		function updateDisplay( siliently = false ) {
		    remainingTime = ( expirationTime - Date.now() ) / 1000;
		    if( !siliently ) playSounds( remainingTime );

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

		/**
		 * Play sounds according the state of this CircularTimer and a configuration object.
		 *
		 * @param {number} timeLeft - The number of seconds remaining in this countdown.
		 *
		 * @example
		 * // Play the sounds configured for 10 seconds remaining in the countdown.
		 * playSounds ( 10 );
		 *
		 * @returns {number} Returns the number of sounds played.
		 */
		function playSounds( timeLeft ) {
		    let nsounds = 0;
		    if( sounds !== undefined ) {
			let s = sounds[ Math.round( timeLeft)  ];
			if( s !== undefined ) {
			    if( typeof s === 'string' ) {
				let audio = new Audio( s );
				audio.play();
				self.audios.push( audio );
				nsounds++;
			    } else if( typeof s === 'object' ) {
				s.forEach(function(f) {
				    let audio = new Audio( f );
				    audio.play();
				    self.audios.push( audio );
				    nsounds++;
				});
			    }
			}
		    }
		    return( nsounds );
		}
            } );
	} );
	toggleElement( timerContainer, "none" );
	return( circularTimer );
    }

    cleanUp( ) {
	// Clean up any pending intervals and audio
	clearInterval( this.timerInterval );
	this.audios.forEach( (audio) => {
	    audio.pause();
	});
    }

};

// Local Variables:
// time-stamp-line-limit: 10
// time-stamp-format: "%A, %Y-%02m-%02d @ %02H:%02M:%02S"
// time-stamp-active: t
// time-stamp-start: "const circularTimerVersion = \""
// time-stamp-end: "\";"
// End:
