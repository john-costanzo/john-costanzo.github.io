/* Inspired by the work at https://www.cssscript.com/demo/circular-countdown-timer-javascript-css3/ */

/* 
 * An implementation of a circular timer. 
 * Initialized with a time, it visually depicts a countdown.
 * Can be configured to visually depict an "alert" state.
 * Can be configured to play sounds at various points in the countdown.
 */

const DEFAULT_ALERT_TIME = 10; // Default number of seconds beyond which timer should alert

class CircularTimer {
    static id = 666;


    /**
     * Construct a new CircularTimer, optionally configure to play sounds upon completion.
     *
     * @param {number} initial_time - The number of seconds the timer is initialized with each time it is run.
     * @param {number} alert_time   - The number of seconds remaining in the countdown that the timer should go into alert mode.
     * @param {map of arrays} sounds - A HashMap keyed on integers, which specify number of seconds remaining in the countdown, 
     *                                 and values of either a string or an  arrary of strings that specify file names to play at those times.
     *
     * @example
     * // Constructs a new (silent) CircularTimer initialized to 10 seconds.
     * let ct1 = new CircularTimer( 10 )
     *
     * @example
     * // Constructs a new CircularTimer initialized to 30 seconds that
     * // plays two sounds with 10 seconds remaining and another at countdown termination.
     * let s = new Object();
     * s[ 10 ] = [ 'fileA', 'fileB' ];
     * s[ 0 ] = 'fileC';
     * let ct2 = new CircularTimer( 30, s )
     *
     * @returns {CircularTimer} Returns a new CircularTimer embedded in the page at the point of call.
     */
    constructor( initial_time, alert_time, sounds ) {
	CircularTimer.id += 1;
	this.id = CircularTimer.id;
	this.alertTime = alert_time || DEFAULT_ALERT_TIME;
	this.sounds = sounds;

	document.write(`
    <span class="container">
      <span class="setters">
	<span class="minutes-set">
	  <button class="data-setter" data-setter-${this.id}="minutes-plus">+</button>
	  <button class="data-setter" data-setter-${this.id}="minutes-minus">-</button>
	</span>
	<span class="seconds-set">
	  <button class="data-setter" data-setter-${this.id}="seconds-plus">+</button>
	  <button class="data-setter" data-setter-${this.id}="seconds-minus">-</button>
	</span>
      </span>
      <span id="circle-${this.id}" class="circle"> <svg width="300" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
	  <g transform="translate(110,110)">
	    <circle r="100" class="e-c-base"/>
	    <g transform="rotate(-90)">
              <circle id="e-c-progress-${this.id}" r="100" class="e-c-progress"/>
              <g id="e-pointer-${this.id}" class="e-pointer"> // TODO: figure out if we need both id and class on both lines
		<circle id="e-pointer-${this.id}" class="e-pointer" cx="100" cy="0" r="8"/>
              </g>
	    </g>
	  </g>
      </svg> </span>
      <span class="controlls">
	<div id="display-remain-time-${this.id}" class="display-remain-time">00:30</div>
	<button id="pause-${this.id}" class="play"></button>
      </span>
    </span>
`);


	//circle start
	this.progressBar = document.getElementById('e-c-progress' + "-" + this.id);
	this.indicator = document.getElementById('e-indicator' + "-" + this.id);
	this.pointer = document.getElementById('e-pointer' + "-" + this.id);
	this.length = Math.PI * 2 * 100;

	this.displayOutput = document.getElementById('display-remain-time' + "-" + this.id);
	this.pauseBtn = document.getElementById('pause' + "-" + this.id);
	this.setterBtns = document.querySelectorAll('button[data-setter' + "-" + this.id + ']');

	this.intervalTimer = 0;
	this.wholeTime = initial_time;
	this.remainTime = 0; // time (in ms) at which the current countdown should end
	this.timeLeft = initial_time; // number of seconds remaining in this countdown
	this.isPaused = false;
	this.isStarted = false;

	this.progressBar.style.strokeDasharray = length;
	this.update(this.wholeTime,this.wholeTime); //refreshes progress bar
	this.displayTimeLeft(this.wholeTime);

	for (var i = 0; i < this.setterBtns.length; i++) {
	    this.setterBtns[i].addEventListener("click", function(btn, event) {
		var param = btn.dataset["setter-" + this.id];
		switch (param) {
		case 'minutes-plus':
		    this.adjustTime(1 * 60);
		    break;
		case 'minutes-minus':
		    this.adjustTime(-1 * 60);
		    break;
		case 'seconds-plus':
		    this.adjustTime(1);
		    break;
		case 'seconds-minus':
		    this.adjustTime(-1);
		    break;
		}
		if( this.isStarted ) {
		    this.displayTimeLeft( this.timeLeft )
		} else {
		    this.displayTimeLeft( this.wholeTime );
		}
	    }.bind( this, this.setterBtns[i] )
					       );
	}

	this.changeTimerVisualComponentsClasses( "alert-style", "normal-style" );
	this.pauseBtn.addEventListener('click', this.pauseTimer.bind(this,this.pauseBtn));

    }

    changeTimerVisualComponentsClasses( from, to ) {
	// Change the classes of all  of this timer's visual components from FROM class to TO class.
	let components = [
	    // 'button[data-setter]',
	    'display-remain-time',
	    'pause',
	    'e-c-progress',
	    // 'e-c-pointer'
	];

	let timerThisId = this.id;
	components.forEach(function( comp ) {
	    let compInstance =  comp + "-" + timerThisId;
	    let el = document.getElementById( compInstance );
	    el.classList.remove( from );
	    el.classList.add( to );
	});
    };

    update(value, timePercent) {
	let offset = - length - length * value / (timePercent);
	this.progressBar.style.strokeDashoffset = offset; 
	this.pointer.style.transform = `rotate(${360 * value / (timePercent)}deg)`; 
    };

    //circle ends



    adjustTime(seconds) {
	// Adjust all of this object's:
	//   - wholeTime (the initial countdown period) and
	//   - timeLeft (the number of seconds left in this countdown) and
	//   - remainTime (the time this countdown period should end if the timer is running) by SECONDS.
	if( (this.wholeTime + seconds) > 0 ) {
	    this.wholeTime += seconds;
	    this.timeLeft += seconds;
	}
	if(this.isStarted === true){
	    if( (this.remainTime + (seconds * 1000) ) > 0 ) {
		this.remainTime += (seconds * 1000);
		this.update(this.remainTime,this.remainTime);
	    }
	}
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
    playSounds( timeLeft ) {
	let nsounds = 0;
	if( this.sounds !== undefined ) {
	    let s = this.sounds[ timeLeft ];
	    if( s !== undefined ) {
		if( typeof s === 'string' ) {
		    let audio = new Audio( s );
		    audio.play();
		    nsounds++;
		} else if( typeof s === 'object' ) {
		    s.forEach(function(f) {
			let audio = new Audio( f );
			audio.play();
			nsounds++;
		    });
		}
	    }
	}
	return( nsounds );
    }

    timer (seconds){ //counts time, takes seconds
	this.remainTime = Date.now() + (seconds * 1000);
	this.displayTimeLeft(seconds);
	
	this.intervalTimer = setInterval(function(){
	    this.timeLeft = Math.round((this.remainTime - Date.now()) / 1000);
	    this.playSounds( this.timeLeft );
	    if(this.timeLeft < 0){
		clearInterval(this.intervalTimer);
		this.isStarted = false;
		this.setterBtns.forEach(function(btn){
		    btn.style.opacity = 1;
		    btn.disabled = false;
		});
		this.displayTimeLeft(this.wholeTime);
		this.pauseBtn.classList.remove('pause');
		this.pauseBtn.classList.add('play');
		this.changeTimerVisualComponentsClasses( "alert-style", "normal-style" );
		return ;
	    }
	    if( this.timeLeft <= this.alertTime ) {
		this.changeTimerVisualComponentsClasses( "normal-style", "alert-style" );
		//		let el = document.getElementById( "circle-" + this.id );
		let el = document.getElementById( "e-c-progress-" + this.id );
		el.classList.add( "pulse-element" );
		el = document.getElementById( "display-remain-time-" + this.id );
		el.classList.add( "pulse-element" );
	    }

	    this.displayTimeLeft(this.timeLeft);
	}.bind(this), 1000);
    }

    pauseTimer(btn){
	if(this.isStarted === false){
	    this.timer(this.wholeTime);
	    this.isStarted = true;
	    btn.classList.remove('play');
	    btn.classList.add('pause');
	    //	    let circle = document.getElementById( "circle-" + this.id ); TODO: why won't this animate?
	    let el = document.getElementById( "e-c-progress-" + this.id );
	    el.classList.remove( "pulse-element" );
	    el = document.getElementById( "display-remain-time-" + this.id );
	    el.classList.remove( "pulse-element" );
	    
	    // this.setterBtns.forEach(function(btn){
	    //     btn.disabled = true;
	    //     btn.style.opacity = 0.5;
	    // });

	}else if(this.isPaused){
	    btn.classList.remove('play');
	    btn.classList.add('pause');
	    this.timer(this.timeLeft);
	    this.isPaused = this.isPaused ? false : true
	}else{
	    btn.classList.remove('pause');
	    btn.classList.add('play');
	    clearInterval(this.intervalTimer);
	    this.isPaused = this.isPaused ? false : true ;
	}
    }

    displayTimeLeft (timeLeft){ //displays time on the input
	let minutes = Math.floor(timeLeft / 60);
	let seconds = timeLeft % 60;
	let displayString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	this.displayOutput.textContent = displayString;
	this.update(timeLeft, this.wholeTime);
    }

};
