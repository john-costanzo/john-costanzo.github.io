"use strict";
// ==UserScript==
// @name         Dismiss Photo Collage ad block message
// @namespace    http://tampermonkey.net/
// @version      2025-12-28_21-44
// @author       John Costanzo
// @description  Dismiss Photo Collage ad block message
// @match        https://www.photocollage.com/
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/photo-collage.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/photo-collage.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
// Object.defineProperty( exports, "__esModule", {
// 	value: true
// } );
(function () {
    'use strict';
    function dismissAdBlockMessage() {
        var adBlockMessages = document.querySelectorAll('div.adBlocked');
        adBlockMessages.forEach(function (adBlockMessage) {
            adBlockMessage.style.display = 'block';
        });
    }
    // Call the function to rearrange the temperatures
    dismissAdBlockMessage();
    // Optional: MutationObserver to handle dynamically loaded content
    var observer = new MutationObserver(dismissAdBlockMessage);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
