// ==UserScript==
// @name         Age Gate auto click
// @namespace    http://tampermonkey.net/
// @version      2025-12-28_21-44
// @description  Automatically click buttons with specific classes and text
// @author       John Costanzo via https://www.perplexity.ai/search/show-typescript-for-a-tampermo-dfIhfIrMQDSiYkvybh8hBA
// @match        https://trailsidebrews.com/*
// @match        https://oklawahabrewing.com/*
// @match        https://sierranevada.com/*
// @match        https://boldrock.com/*
// @match        https://highlandbrewing.com/*
// @match        https://dryfallsbrewing.com/*
// @match        https://www.weather.com/*
// @match        https://weather.com/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/dismiss-age-check.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/dismiss-age-check.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var targetButtonClasses = ["age-gate-submit-yes", "btn-primary", "yes"];
    var targetAnchorClasses = ["no-thanks"];
    var targetSpanClasses = ["uabb-creative-button-text"];
    var targetText = ["Yes", "I Sure Am"];
    var caseInsensitiveTargetTextSet = new Set(targetText.map(function (s) { return s.toLowerCase(); }));
    function clickButton() {
        var buttons = document.querySelectorAll('button, input[type="button"], a');
        buttons.forEach(function (button) {
            var hasClass = targetButtonClasses.some(function (cls) { return button.classList.contains(cls); });
            if (button.textContent !== null) {
                var hasText = caseInsensitiveTargetTextSet.has(button.textContent.trim().toLowerCase());
                if (hasClass && hasText) {
                    button.click();
                    console.log("Button clicked: ".concat(button));
                }
            }
        });
        var anchors = document.querySelectorAll('a');
        anchors.forEach(function (anchor) {
            var hasClass = targetAnchorClasses.some(function (cls) { return anchor.classList.contains(cls); });
            anchor.click();
            console.log("Anchor clicked ".concat(anchor));
        });
        var spans = document.querySelectorAll('span');
        spans.forEach(function (span) {
            var hasClass = targetSpanClasses.some(function (cls) { return span.classList.contains(cls); });
            if (span.textContent !== null) {
                var hasText = caseInsensitiveTargetTextSet.has(span.textContent.trim().toLowerCase());
                if (hasClass && hasText) {
                    span.click();
                    console.log("Span clicked: ".concat(span));
                }
            }
        });
    }
    // Run on page load and DOM changes
    window.addEventListener('load', clickButton);
    var observer = new MutationObserver(clickButton);
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
