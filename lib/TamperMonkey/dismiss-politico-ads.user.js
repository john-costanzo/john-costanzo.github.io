// ==UserScript==
// @name         Dismiss Politico ads
// @version      2025-12-28_21-44
// @description  Automatically dismiss the ads from various sites, based on a <button> with specified aria-labels
// @author       John Costanzo
// @match        https://www.politico.com/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/dismiss-politico-ads.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/dismiss-politico-ads.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var scriptName = "dismiss-politico-ads";
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
    function clickCloseButton() {
        // Get all button elements on the page
        var buttons = document.getElementsByClassName("gallery-carousel-ad-close");
        if (buttons) {
            var button = buttons[0];
            try {
                button.click();
            }
            catch (error) {
                console.error('clickCloseButton() error: ', error);
            }
        }
    }
    var observer = new MutationObserver(clickCloseButton);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// jinx-local-words: "https lightblue lightyellow nh oq rgba"
// End:
