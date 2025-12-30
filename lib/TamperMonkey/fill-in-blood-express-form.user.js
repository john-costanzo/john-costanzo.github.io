// ==UserScript==
// @name         Fill in Blood Connection form
// @version      2025-12-28_21-44
// @description  Fill in Blood Connection form
// @author       John Costanzo
// @match        https://xpress.donorhistory.com/8
// @match        https://xpress.donorhistory.com/8/prescreen
// @match        https://xpress.donorhistory.com/8/question/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/fill-in-blood-express-form.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/fill-in-blood-express-form.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at document-end
// @run-at context-menu
// @grant        none
// ==/UserScript==
// IMPORTANT! Comment out the // Object.defineProperty(exports, "__esModule", { value: true }); line, above
(function () {
    'use strict';
    var scriptName = "fill-in-blood-express-form";
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
        fieldMap.forEach(function (value, key) {
            message("key=" + key + "; value = " + value);
            var els = document.getElementsByClassName(key);
            if (els) {
                var el = els[0];
                if (el) {
                    message('el.innerHTML=' + el.innerHTML);
                    if (el.innerHTML === value) {
                        // TODO: parameterize these URLs
                        if (key === "btn-success") { // Only click for these URLs
                            var href = window.location.href;
                            if (href === "https://xpress.donorhistory.com/8/question/330" || href === "https://xpress.donorhistory.com/8/question/444")
                                el.click();
                        }
                        else {
                            el.click();
                        }
                    }
                }
            }
        });
    }
    function fillInTextFields() {
        message("fillInTextFields starting...");
        // Click on buttons with certain class names and labels.
        var fieldMap = new Map([
            //	    [ ["form-control", "Sex" ], "M"],
            [["form-control", "Date of Birth"], "08/23/196"],
        ]);
        fieldMap.forEach(function (value, key) {
            message("key=" + key + "; value = " + value);
            var className = key[0];
            var confirmationLabel = key[1];
            var els = document.getElementsByClassName(className);
            if (els) {
                var elsArray = Array.from(els);
                elsArray.forEach(function (element) {
                    var el = element;
                    var prevSib = el.previousElementSibling;
                    if (prevSib && prevSib.innerHTML === confirmationLabel) {
                        el.value = value;
                    }
                });
            }
        });
    }
    function repositionYesNoButtons() {
        // Place "yes" and "no" radio button at the top right corner of the page.
        message("repositionYesNoButtons: starting...");
        var questionOptionLabels = document.querySelectorAll('label.questionOption');
        var matchingLabels = Array.from(questionOptionLabels).filter(function (label) {
            var inputElement = label.querySelector('input');
            if (inputElement) {
                if ('yes' === inputElement.value.toLowerCase()) {
                    var yesLabelElement = label;
                    message("repositionYesNoButtons: setting attributes for 'yes'");
                    yesLabelElement.style.position = "fixed";
                    yesLabelElement.style.right = "0px";
                    yesLabelElement.style.top = "0px";
                }
                if ('no' === inputElement.value.toLowerCase()) {
                    var noLabelElement = label;
                    message("repositionYesNoButtons: setting attributes for 'no'");
                    noLabelElement.style.position = "fixed";
                    noLabelElement.style.right = "0px";
                    noLabelElement.style.top = "30px";
                }
            }
        });
    }
    var observer = new MutationObserver(function (mutations) {
        // Your script to run on DOM changes
        console.log("DOM changed! [" + window.location.search + "]");
        repositionYesNoButtons();
        fillInTextFields();
        clickButtons();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    // Do something with the matchingLabels array, which now contains the <label> elements meeting the criteria
    message("TamperMonkey is in the house!");
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// End:
