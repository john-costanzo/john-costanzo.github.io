// ==UserScript==
// @name         Fill in Get Squire barber reservation form
// @version      2025-12-28_21-44
// @description  Fill in Get Squire barber reservation form
// @author       John Costanzo
// @match        https://getsquire.com/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/fill-in-getsquire-barber-form.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/fill-in-getsquire-barber-form.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var scriptName = "fill-in-getsquire-barber-form";
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
        var placeHolderFieldMap = new Map([
            ["First Name", "John"],
            ["Last Name", "Costanzo"],
            ["Phone", "8285134093"],
            ["Email", "jncostanzo+threehounds@gmail.com"],
        ]);
        placeHolderFieldMap.forEach(function (value, key) {
            var elements = document.querySelectorAll("[placeholder=\"".concat(key, "\"]"));
            if (elements && elements.length > 0) {
                var el = elements[0];
                message("Key: ".concat(key, " ==> Value: ").concat(value));
                el.value = value;
            }
        });
        var dataTestidFieldMap = new Map([
            //[ "button:cart:toPayment", "" ],
            ["button:cart:chooseTime", ""],
        ]);
        dataTestidFieldMap.forEach(function (value, key) {
            var elements = document.querySelectorAll("[data-testid=\"".concat(key, "\"]"));
            if (elements && elements.length > 0) {
                var el = elements[0];
                message("Key: ".concat(key, " ==> Value: ").concat(value));
                el.click();
            }
        });
    }
    // Run on page load and DOM changes
    window.addEventListener('load', fillInForm);
    var observer = new MutationObserver(fillInForm);
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
// End:
