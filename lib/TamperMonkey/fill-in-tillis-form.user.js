// ==UserScript==
// @name         Fill in Tillis's form
// @version      2025-12-28_21-44
// @description  Fill in Senator Tom Tillis's form.
// @author       John Costanzo
// @match        https://www.tillis.senate.gov/email-me
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/fill-in-tillis-form.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/fill-in-tillis-form.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var scriptName = "fill-in-tillis";
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
            ["field_700BE99B-C12A-4836-BD02-D87FCD7ADECD", "Mr."],
            ["field_554EB441-1332-47D8-B817-87A030531FCC", "John"],
            ["field_77689247-ECBE-4E25-97D6-62F8A979E226", "Costanzo"],
            ["field_47F809FC-8DE7-4768-95BE-6B94DCC7C8C8", "25 Bay Magnolia Court"],
            ["field_965E8165-21F8-49A4-AAD0-E72A361EC2DB", "Hendersonville"],
            ["field_F35EA2FD-C92A-4FFC-9CE0-637B8AEECB54", "28791"],
            ["field_64322B9D-7F15-47DA-B656-9843D7D04866", "828-513-4093"],
            ["field_5C0C729A-D702-46F1-9821-7DD7E565E136", "jncostanzo+tillis@gmail.com"],
        ]);
        message("in fillInForm!" + fieldMap);
        fieldMap.forEach(function (value, key) {
            var el = document.getElementById(key);
            if (el) {
                message("Key: ".concat(key, " ==> Value: ").concat(value));
                el.value = value;
            }
        });
        (_a = document.getElementById("field_957A77F6-59C6-4500-8A3B-9AE76484F733")) === null || _a === void 0 ? void 0 : _a.focus();
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
