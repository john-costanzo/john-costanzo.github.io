// ==UserScript==
// @name         Automate Zoom
// @version      2025-12-28_21-44
// @description  Automate Zoom interactions
// @author       John Costanzo
// @match        https://app.zoom.us/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/automate-zoom.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/automate-zoom.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
// IMPORTANT! Make sure the above line is commented out: // Object.defineProperty(exports, "__esModule", { value: true });
(function () {
    'use strict';
    function getDaysSinceMarch13_2020() {
        var march13_2020 = new Date('2020-03-13');
        var today = new Date();
        var timeDiff = today.getTime() - march13_2020.getTime();
        var daysElapsed = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return daysElapsed;
    }
    function fillInName() {
        var nameId = "input-for-name";
        var name = document.getElementById(nameId);
        if (name) {
            var newName = "[" + getDaysSinceMarch13_2020() + " days] ";
            name.value = newName + "Tracey and Johnnnnnnnnnnnnnnnnnnn";
            name.setAttribute("value", newName + name.getAttribute("value"));
        }
    }
    function autoJoinZoom(n) {
        fillInName();
        if (n >= 0) {
            setTimeout(function () { return autoJoinZoom(--n); }, 1000);
        }
    }
    autoJoinZoom(128);
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// End:
