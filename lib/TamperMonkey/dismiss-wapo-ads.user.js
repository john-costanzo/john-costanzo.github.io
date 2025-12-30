// ==UserScript==
// @name         Auto-Click Close Button
// @namespace    http://tampermonkey.net/
// @version      2025-12-28_21-44
// @description  Clicks button with data-qa="close-button-container" when found
// @author       You
// @match        https://www.washingtonpost.com/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/dismiss-wapo-ads.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/dismiss-wapo-ads.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    function clickCloseButton() {
        var button = document.querySelector('[data-qa="close-button-container"]');
        if (button) {
            button.click();
            console.log('Close button clicked');
            return true;
        }
        return false;
    }
    // Try immediately
    if (clickCloseButton())
        return;
    // Poll every 500ms up to 10 seconds
    var maxAttempts = 20;
    var attempts = 0;
    var interval = setInterval(function () {
        attempts++;
        if (clickCloseButton() || attempts >= maxAttempts) {
            clearInterval(interval);
        }
    }, 500);
    // Also try on DOM changes/mutations
    var observer = new MutationObserver(clickCloseButton);
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
