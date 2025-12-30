// ==UserScript==
// @name         Wunderground Temp Reorder
// @namespace    http://tampermonkey.net/
// @version      2025-12-28_21-44
// @author       John Costanzo via https://www.perplexity.ai/search/show-a-tamper-monkey-typescrip-HAsIafIuSue1I0rIqoXIlA
// @description  Rearranges temp-hi, span, temp-lo triplets
// @match        https://www.wunderground.com/forecast/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/wunderground-temp-reorder.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/wunderground-temp-reorder.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    function rearrangeTemps() {
        var tempHiElements = document.querySelectorAll('span.temp-hi');
        tempHiElements.forEach(function (tempHi) {
            var _a, _b;
            if (tempHi.nextElementSibling && tempHi.nextElementSibling.nextElementSibling &&
                tempHi.nextElementSibling.nextElementSibling.classList.contains('temp-lo')) {
                var tempLo = tempHi.nextElementSibling.nextElementSibling;
                var middleSpan = tempHi.nextElementSibling;
                // Move tempLo before tempHi
                (_a = tempHi.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(tempLo, tempHi);
                // Move tempHi after middleSpan
                (_b = tempHi.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(tempHi, middleSpan.nextSibling);
            }
        });
    }
    // Call the function to rearrange the temperatures
    rearrangeTemps();
    // Optional: MutationObserver to handle dynamically loaded content
    var observer = new MutationObserver(rearrangeTemps);
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
