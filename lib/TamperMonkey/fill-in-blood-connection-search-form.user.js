// ==UserScript==
// @name         Fill in Blood Connection Zip Search form
// @version      2025-12-28_21-44
// @description  Fill in Blood Connection Zip Search form
// @author       John Costanzo
// @match        https://donate.thebloodconnection.org/donor/schedules/zip
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/fill-in-blood-connection-search-form.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/fill-in-blood-connection-search-form.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var scriptName = "fill-in-blood-connection-search-form";
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
            ["zip", "28791"],
            //	    ["slider-handle", "5"],
        ]);
        fieldMap.forEach(function (value, key) {
            var els = document.getElementsByClassName(key);
            if (els) {
                var el = els[0];
                message("Key: ".concat(key, " ==> Value: ").concat(value));
                el.value = value;
            }
        });
    }
    function clickSearchButton() {
        // Click the "search" button.
        var search = document.getElementById("search");
        if (search) {
            search.click();
        }
    }
    var zips = document.getElementsByClassName("zip");
    var emptyZip = false;
    if (zips) {
        if (zips.length > 0) {
            var z = zips[0];
            emptyZip = z.value === "";
        }
    }
    fillInForm();
    if (emptyZip) {
        clickSearchButton();
    }
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// End:
