// ==UserScript==
// @name         Log in to ecobee
// @version      2025-12-28_21-44
// @description  Log in to ecobee
// @author       John Costanzo
// @match        https://www.ecobee.com/en-us/
// @match        https://auth.ecobee.com/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/log-in-to-ecobee.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/log-in-to-ecobee.user.js
// @icon         https://www.ecobee.com/favicon.ico
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var scriptName = "log-in-to-cphassn";
    var Severities;
    (function (Severities) {
        Severities[Severities["debug"] = 0] = "debug";
        Severities[Severities["log"] = 1] = "log";
        Severities[Severities["warn"] = 2] = "warn";
        Severities[Severities["error"] = 3] = "error";
    })(Severities || (Severities = {}));
    ;
    function message(msg, severity) {
        if (severity === void 0) { severity = Severities.debug; }
        var debug = true;
        switch (severity) {
            case Severities.debug:
                if (debug) {
                    console.log(scriptName + ": " + msg);
                }
                break;
            case Severities.log:
                console.log(scriptName + ": " + msg);
                break;
            case Severities.warn:
                console.warn(scriptName + ": " + msg);
                break;
            case Severities.error:
                console.error(scriptName + ": " + msg);
                break;
            default:
                console.error(scriptName + ": No such logging level (" + severity + ")");
        }
    }
    function fillInForm() {
        // // Fill in any well-known boxes.
        // const fieldMap = new Map( [
        // 	[ "username", "j.n.costanzo@gmail.com" ],
        // 	[ "password", "PASSWORD_HERE" ],
        // ] );
        if (window.location.host === 'www.ecobee.com') {
            // Perform immediate redirect
            window.location.replace('https://auth.ecobee.com/u/login');
        }
        var dissmissButton = document.querySelector('button[aria-label="close"]');
        if (dissmissButton) {
            dissmissButton.click();
        }
        // fieldMap.forEach( ( value, key ) => {
        // 	const el = document.getElementById( key );
        // 	if ( el ) {
        // 		message( `Key: ${key} ==> Value: ${value} (found)` );
        // 		el.setAttribute( 'value', value );
        // 	} else {
        // 		message( `Key: ${key} ==> Value: ${value} NOT FOUND!!!` );
        // 	}
        // } );
        // Hack Alert!!!
        // We should be doing this:
        // const signInButton = < HTMLButtonElement > document.querySelector( 'button, input[type="submit"][value="Sign in"]' );
        // ...but it doesn't seem to work.
        var buttons = Array.from(document.querySelectorAll('button'));
        if (buttons) {
            var signInButton = buttons[1];
            if (signInButton) {
                message('Found signInButton!');
                signInButton.click();
            }
        }
    }
    fillInForm();
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// End:
