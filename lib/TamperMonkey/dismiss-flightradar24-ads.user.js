// ==UserScript==
// @name         Dismiss flightradar24 ads
// @version      2025-12-28_21-44
// @description  Automatically dismiss flightradar24 ads
// @author       John Costanzo
// @match        https://*.flightradar24.com/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/dismiss-flightradar24-ads.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/dismiss-flightradar24-ads.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var scriptName = "dismiss-flightradar24-ads";
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
    function hideAdBanner() {
        // message( "hideAdBanner" );
        var aside = document.querySelector("#app > div > div > aside");
        if (aside) {
            aside.style.display = 'none';
        }
        Array.from(document.querySelectorAll('a[href="https://www.flightradar24.com/premium"]')).forEach(function (el) {
            el.style.display = 'none';
        });
        var buttons = document.querySelectorAll("div.fc-dialog");
        buttons.forEach(function (button) {
            var b = button;
            b.click();
        });
        var parent = document.querySelector("div.flex.w-full.items-center.justify-center");
        if (parent) {
            var p = parent;
            // message( `hiding parent ${p}` );
            p.style.display = 'none';
        }
    }
    var observer = new MutationObserver(hideAdBanner);
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
