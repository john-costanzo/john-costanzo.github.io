// ==UserScript==
// @name         Log in to to cphassn
// @version      2025-12-28_21-44
// @description  Log in to the Carriage Park Association website
// @author       John Costanzo
// @match        https://www.cphassn.org/login/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/log-in-to-cphassn.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/log-in-to-cphassn.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
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
        // Fill in any well-known boxes.
        var fieldMap = new Map([
            ["uname", "jncostanzo@gmail.com"],
            ["pass", "PASSWORD_HERE"],
        ]);
        fieldMap.forEach(function (value, key) {
            var el = document.getElementById(key);
            if (el) {
                message("Key: ".concat(key, " ==> Value: ").concat(value, " (found)"));
                el.setAttribute('value', value);
            }
            else {
                message("Key: ".concat(key, " ==> Value: ").concat(value, " NOT FOUND!!!"));
            }
        });
        var signInButton = document.getElementById('submit2');
        if (signInButton) {
            signInButton.click();
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
