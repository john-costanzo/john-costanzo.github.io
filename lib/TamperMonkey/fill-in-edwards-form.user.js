// ==UserScript==
// @name         Fill in Edwards's form
// @version      2025-12-28_21-44
// @description  Fill in Congressman Chuck Edwards's form.
// @author       John Costanzo
// @match        https://edwards.house.gov/contact
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/fill-in-edwards-form.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/fill-in-edwards-form.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var scriptName = "fill-in-edwards";
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
        var _a, _b;
        // Fill in any well-known boxes.
        var fieldMap = new Map([
            ["edit-honorific-2", "Mr."],
            ["edit-first-name-2", "John"],
            ["edit-last-name-2", "Costanzo"],
            ["edit-address-address", "25 Bay Magnolia Court"],
            ["edit-address-city", "Hendersonville"],
            ["edit-address-postal-code", "28791"],
            ["edit-email-9", "jncostanzo+chuckedwards@gmail.com"],
            ["edit-number-18", "8285134093"],
            ["edit-type-18", "Standard voice telephone"],
            ["edit-response-23", "y"],
        ]);
        fieldMap.forEach(function (value, key) {
            var el = document.getElementById(key);
            if (el) {
                message("Key: ".concat(key, " ==> Value: ").concat(value));
                el.value = value;
            }
        });
        (_a = document.getElementById("edit-issue-23")) === null || _a === void 0 ? void 0 : _a.focus();
        (_b = document.getElementById("edit-issue-23")) === null || _b === void 0 ? void 0 : _b.click();
    }
    function conditionallyClickNext() {
        // Click the "next page" button on all but the first page, identified by containing the "Last Name" box
        var ewn = document.getElementById("edit-wizard-next");
        var ln2 = document.getElementById("edit-last-name-2");
        if (ewn && !ln2) {
            ewn.click();
        }
    }
    fillInForm();
    conditionallyClickNext();
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// End:
