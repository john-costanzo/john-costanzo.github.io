// ==UserScript==
// @name         Iframe Close Button Monitor
// @namespace    http://tampermonkey.net/
// @version      2025-12-28_21-44
// @description  Trigger action when iframe contains #close button
// @author       John Costanzo (via https://www.perplexity.ai/search/show-a-tampermonkey-typescript-z0zO6cA0QoGKpfTqAHIRBQ)
// @match        *://*/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/close-iframe.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/close-iframe.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function () {
    'use strict';
    var targetButtonId = 'close';
    // Detect dynamically added iframes
    new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            mutation.addedNodes.forEach(function (node) {
                if (node instanceof HTMLIFrameElement) {
                    monitorIframe(node);
                }
            });
        });
    }).observe(document, {
        childList: true,
        subtree: true
    });
    // Check existing iframes on initial load
    document.querySelectorAll('iframe').forEach(monitorIframe);
    function monitorIframe(iframe) {
        try {
            iframe.addEventListener('load', function () {
                var doc = iframe.contentDocument;
                if (doc === null || doc === void 0 ? void 0 : doc.getElementById(targetButtonId)) {
                    handleCloseButton(doc.getElementById(targetButtonId));
                }
                else {
                    // Monitor for dynamic content within iframe
                    new MutationObserver(function (_, observer) {
                        var btn = doc === null || doc === void 0 ? void 0 : doc.getElementById(targetButtonId);
                        if (btn) {
                            handleCloseButton(btn);
                            observer.disconnect();
                        }
                    }).observe((doc === null || doc === void 0 ? void 0 : doc.documentElement) || document, {
                        childList: true,
                        subtree: true
                    });
                }
            });
        }
        catch (error) {
            // Handle cross-origin iframe security restrictions
            console.warn('Cannot access iframe content:', error);
        }
    }
    function handleCloseButton(button) {
        console.log('Close button found in iframe:', button);
        button.click();
    }
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// End:
