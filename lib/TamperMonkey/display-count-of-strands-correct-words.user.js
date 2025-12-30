// ==UserScript==
// @name         Strands Bonus Word Counter
// @namespace    http://tampermonkey.net/
// @version      2025-12-28_21-44
// @description  Counts and displays Strands bonus words
// @author       John Costanzo (with help from Perplexity)
// @match        https://www.nytimes.com/games/strands
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/display-count-of-strands-correct-words.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/display-count-of-strands-correct-words.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    // Utility to create and update the counter display
    var count = 0;
    var counterDiv = document.createElement('div');
    counterDiv.style.position = 'fixed';
    counterDiv.style.top = '10px';
    counterDiv.style.right = '10px';
    counterDiv.style.background = '#222';
    counterDiv.style.color = '#fff';
    counterDiv.style.padding = '8px 16px';
    counterDiv.style.zIndex = '9999';
    counterDiv.style.fontSize = '18px';
    counterDiv.style.borderRadius = '6px';
    counterDiv.textContent = "bonus words: ".concat(count);
    document.body.appendChild(counterDiv);
    function incrementCounter() {
        count++;
        counterDiv.textContent = "bonus words: ".concat(count);
    }
    // Helper to check if the style matches the target
    function hasTargetColor(el) {
        // Get the computed color value
        var computedColor = getComputedStyle(el).color;
        // The fallback #C4C1AF is rgb(196, 193, 175)
        return computedColor === 'rgb(196, 193, 175)';
    }
    // Observe attribute changes for all matching spans
    function observeSpans() {
        var spans = document.querySelectorAll('span.styles-module_word__LwKKp');
        spans.forEach(function (span) {
            var el = span;
            // Prevent attaching multiple observers
            if (el.__colorObserverAttached)
                return;
            el.__colorObserverAttached = true;
            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                        if (hasTargetColor(el)) {
                            incrementCounter();
                        }
                    }
                });
            });
            observer.observe(el, {
                attributes: true,
                attributeFilter: ['style']
            });
        });
    }
    // Run observer on initial load and when new nodes are added
    var globalObserver = new MutationObserver(function () {
        observeSpans();
    });
    globalObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
    // Initial run
    observeSpans();
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// End:
