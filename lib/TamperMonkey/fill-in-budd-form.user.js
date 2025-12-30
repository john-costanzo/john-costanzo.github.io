// ==UserScript==
// @name         Fill in Budd's form
// @version      2025-12-28_21-44
// @description  Fill in Senator Ted Budd's form.
// @author       John Costanzo
// @match        https://outreach.senate.gov/iqextranet/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/fill-in-budd-form.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/fill-in-budd-form.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var scriptName = "fill-in-budd";
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
        var debug = false;
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
        var _a;
        // Fill in any well-known boxes.
        var fieldMap = new Map([
            ["qi_1_first_name", "John"],
            ["qi_1_last_name", "Costanzo"],
            ["qi_1_addr_1", "25 Bay Magnolia Court"],
            ["qi_1_city", "Hendersonville"],
            ["qi_1_state", "39_NC"],
            ["qi_1_zip", "28791"],
            ["qi_1_email", "jncostanzo+budd@gmail.com"],
            ["qi_1_hphone", "8285134093"],
        ]);
        message("in fillInForm!" + fieldMap);
        fieldMap.forEach(function (value, key) {
            var el = document.getElementById(key);
            if (el) {
                message("Key: ".concat(key, " ==> Value: ").concat(value));
                el.value = value;
            }
        });
        (_a = document.getElementById("qi_2")) === null || _a === void 0 ? void 0 : _a.focus();
    }
    // Function to check if page has fully loaded
    function pageIsLoaded() {
        message("pageIsLoaded: checking...");
        var firstNameInput = document.getElementById("qi_1_first_name");
        if (firstNameInput)
            message("firstNameInput.innerText = " + firstNameInput.innerText);
        return (firstNameInput ? true : false);
    }
    // Check if the compose page is loaded, and if not, periodically recheck
    function checkAndRun() {
        message("In checkAndRun...");
        if (pageIsLoaded()) {
            fillInForm();
        }
        else {
            setTimeout(checkAndRun, 1000); // Recheck every 1 second
        }
    }
    message("About to call checkAndRun!");
    checkAndRun();
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// End:
