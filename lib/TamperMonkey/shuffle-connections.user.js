// ==UserScript==
// @name         Shuffle initial Connections grid
// @version      2025-12-28_21-44
// @description  Automatically shuffle connections by pressing the "Shuffle" button a few times.
// @author       John Costanzo
// @match        https://www.nytimes.com/games/connections
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/shuffle-connections.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/shuffle-connections.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var Severities;
    (function (Severities) {
        Severities[Severities["debug"] = 0] = "debug";
        Severities[Severities["log"] = 1] = "log";
        Severities[Severities["warn"] = 2] = "warn";
        Severities[Severities["error"] = 3] = "error";
    })(Severities || (Severities = {}));
    ;
    var scriptName = "shuffle-connections";
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
    // Function to check if the button has loaded. If so, return it.
    function isButtonLoaded() {
        var textLabels = ["Shuffle"];
        var matchingButton = null;
        message("isButtonLoaded: checking...");
        // Get all button elements on the page
        var buttons = document.querySelectorAll("button");
        var _loop_1 = function (button) {
            var innerText = button.innerText;
            textLabels.forEach(function (label) {
                if (innerText === label) {
                    // Found the button with the correct inner text
                    message('shuffle button found: ' + button);
                    matchingButton = button;
                }
            });
        };
        // Loop through the buttons and check the aria-label attribute
        for (var _i = 0, _a = Array.from(buttons); _i < _a.length; _i++) {
            var button = _a[_i];
            _loop_1(button);
        }
        return (matchingButton);
    }
    // Check if the ad is loaded, and if not, periodically recheck.
    function checkAndRun(n) {
        var button = isButtonLoaded();
        if (button) {
            for (var i = 0; i < 4; i++) {
                message("checkAndRun: clicking on button " + button);
                button.click();
            }
        }
        else {
            if (n >= 0) {
                setTimeout(function () { return checkAndRun(--n); }, 1000); // Recheck every 1 second
            }
        }
    }
    checkAndRun(30);
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// jinx-local-words: "https lightblue lightyellow nh oq rgba"
// End:
