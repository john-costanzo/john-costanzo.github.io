// File last changed: <2023-09-08 Fri 16:27:56>

    const zeroPad = (num, places) => String(num).padStart(places, '0');

function createTimer( timerContainer ) {
    require([
        "dojo/dom", "dojo/dom-construct", "dojo/on", "dojo/ready",
    ], function (dom, domConstruct, on, ready) {
        ready(function () {
	    
	    const circularTimer = dom.byId( timerContainer );
	    if( !circularTimer ) {
		console.log( "createTimer: cannot locate " + timerContainer );
		return;
	    }

	    // Create an SVG element
	    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	    svg.setAttribute("width", "100");
	    svg.setAttribute("height", "100");

	    // Create a circle
	    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	    circle.setAttribute("cx", "50");
	    circle.setAttribute("cy", "50");
	    circle.setAttribute("r", "45");
	    circle.setAttribute("fill", "lightblue");
	    circle.classList.add( "timer-arc");

	    // Create text
	    var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
	    text.setAttribute("font-size", "32");
	    const textX = parseInt( circle.getAttribute("cx") );
	    const textY = parseInt( circle.getAttribute("cy") ) + ( text.getAttribute("font-size")/2 );

	    text.setAttribute("x", textX );
	    text.setAttribute("y", textY);
	    text.setAttribute("text-anchor", "middle");
	    text.textContent = "";

	    // Append the circle and text to the SVG element
	    svg.appendChild(circle);
	    svg.appendChild(text);

	    // Append the SVG element to the circle container
	    circularTimer.appendChild(svg);

	    if( !svg || !circle ) {
		console.log( "createTimer: cannot create circle within an SVG element" );
		return;
	    }

	    const timerControls = domConstruct.create( "div", {
	    }, circularTimer );

	    const minutes = domConstruct.create( "input", {
		type: "number",
		value: "0",
		min: "0",
		innerHTML: "minutes"
	    }, timerControls );

	    const colon = domConstruct.create( "span", {
		innerHTML: " : "
	    }, timerControls );
	    
	    const seconds = domConstruct.create( "input", {
		type: "number",
		value: "30",
		min: "0",
		max: "59",
		innerHTML: "seconds"
	    }, timerControls );

	    const startButton = domConstruct.create( "button", {
		innerHTML: "Start"
	    }, circularTimer );
	    var startButtonHandler;

	    const radius = circle.r.baseVal.value;
	    const circumference = 2 * Math.PI * radius;

	    var totalTime = 0; // in seconds
	    var remainingTime = 0; // in seconds
	    var timerInterval;

	    startButtonHandler = on(startButton, "click", startTimer);

	    function commenceTicking() {
		if (remainingTime <= 0) {
                    clearInterval(timerInterval);
		    startButton.innerHTML = "Start";
		    startButtonHandler.remove();
		    startButtonHandler = on(startButton, "click", startTimer);
                    return;
		}
		remainingTime--;
		updateDisplay();
            }

	    function pauseTimer() {
		console.log( "pauseTimer" );
                clearInterval(timerInterval);
		startButton.innerHTML = "Resume";
		startButtonHandler.remove();
		startButtonHandler = on(startButton, "click", resumeTimer);
	    }

	    function resumeTimer() {
		console.log( "resumeTimer" );
                clearInterval(timerInterval);
		startButton.innerHTML = "Pause";
		startButtonHandler.remove();
		startButtonHandler = on(startButton, "click", pauseTimer);

                timerInterval = setInterval(commenceTicking, 1000);
	    }

	    function startTimer() {
                clearInterval(timerInterval);
		console.log( "startTimer" );
		startButton.innerHTML = "Pause";
		startButtonHandler.remove();
		startButtonHandler = on(startButton, "click", pauseTimer);

                totalTime = (parseInt(minutes.value) || 0) * 60 + (parseInt(seconds.value) || 0);
                remainingTime = totalTime;

                updateDisplay();
                timerInterval = setInterval(commenceTicking, 1000);
	    }

	    function updateDisplay() {
                var min = Math.floor(remainingTime / 60);
                var sec = remainingTime % 60;
		text.textContent = zeroPad( min, 2 ) + ":" + zeroPad( sec, 2 );


                // Update the SVG timer arc
		const fractionRemaining = ( ( remainingTime / totalTime ) * circumference );
		circle.style.strokeDasharray = fractionRemaining + " " + circumference;
	    }
        });
    });
}


// Local Variables:
// time-stamp-line-limit: 10
// time-stamp-format: "<%Y-%02m-%02d %3a %02H:%02M:%02S>"
// time-stamp-active: t
// time-stamp-start: "File last changed:[ \t]+"
// time-stamp-end: "$"
// End:
