"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// ==UserScript==
// @name         Dismiss Perplexity ads
// @version      2025-12-28_16-50
// @description  Automatically dismiss the ads from the Perplexity site
// @author       John Costanzo
// @match        https://www.perplexity.ai/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var scriptName = "dismiss-perplexity-ads";
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
        var resetButtonsArray = Array.from(document.querySelectorAll('button.reset'));
        resetButtonsArray.forEach(function (button) {
            var textContent = button.textContent;
            if (textContent !== '') {
                if (textContent === 'Continue to Perplexity' || textContent == 'Skip') {
                    message("Clicking on button with text \"".concat(textContent, "\""));
                    button.click();
                }
            }
        });
        var buttonsArray = Array.from(document.querySelectorAll('button[data-testid="floating-card-upsell-dismiss"]'));
        buttonsArray.forEach(function (button) {
            var textContent = button.textContent;
            if (textContent !== '') {
                message("Clicking on button with text \"".concat(textContent, "\""));
                button.click();
            }
        });
    }
    var observer = new MutationObserver(clickCloseButton);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
