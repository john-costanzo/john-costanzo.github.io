// ==UserScript==
// @name         Reposition the "next" button on the AARP qualtrics survey form
// @version      2025-12-28_21-44
// @description  Fill in Blood Connection form
// @author       John Costanzo
// @match        https://aarpresearch.qualtrics.com/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/qualtrics-form.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/qualtrics-form.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at document-end
// @run-at context-menu
// @grant        none
// ==/UserScript==
// IMPORTANT! Comment out the // Object.defineProperty(exports, "__esModule", { value: true }); line, above
(function () {
    'use strict';
    var scriptName = "qualtrics-form";
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
    function clickButtons() {
        message("clickButtons starting...");
        // Click on buttons with certain class names and labels.
        var fieldMap = new Map([
            ["chooseLanguageBtn", "English"],
            ["btn-primary", "Continue"],
            ["btn-success", "Next"],
        ]);
    }
    function repositionNextButton() {
        // Place "next" button at the top right corner of the page.
        message("repositionNextButton: starting...");
        var nb = document.getElementById("NextButton");
        if (nb) {
            message("repositionNextButton: repositioning the 'next' button");
            nb.style.position = "fixed";
            nb.style.right = "0px";
            nb.style.top = "0px";
        }
    }
    var observer = new MutationObserver(function (mutations) {
        // Your script to run on DOM changes
        console.log("DOM changed! [" + window.location.search + "]");
        repositionNextButton();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    message("TamperMonkey is in the house!");
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// End:
