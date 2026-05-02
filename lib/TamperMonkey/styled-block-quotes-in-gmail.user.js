// ==UserScript==
// @name         Stylize blockquotes
// @version      2026-05-02_09-01
// @description  Stylize blockquotes in gmail.
// @author       John Costanzo
// @match        https://mail.google.com/mail/u/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/styled-blockquotes-in-gmail.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/styled-blockquotes-in-gmail.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
// IMPORTANT! Comment out the // Object.defineProperty(exports, "__esModule", { value: true }); line, above
// Type definitions for DOM manipulation
// declare global {
// 	interface Window {
// 		MutationObserver: typeof MutationObserver;
// 	}
// }
(function () {
    'use strict';
    var style = document.createElement('style');
    style.textContent = "\n        /* Target Gmail's standard quote containers */\n        .gmail_quote,\n        div.gmail_quote {\n            border-left: 3px solid blue !important;\n            padding-left: 12px !important;\n            font-family: serif !important;\n            font-size: 1.0rem !important;\n            font-weight: 500 !important;\n            color: #666 !important;\n            line-height: 1.4 !important;\n          }\n\n        /* Target dynamically styled quote divs (common in threads) */\n        div[style*=\"border-left-color\"] {\n            border-left-color: blue !important;\n            border-left-width: 3px !important;\n            font-family: serif !important;\n            font-size: 1.0rem !important;\n            font-weight: 500 !important;\n            color: #666 !important;\n        }\n\n        /* Nested quotes */\n        .gmail_quote .gmail_quote,\n        div.gmail_quote div.gmail_quote {\n            border-left: 3px solid blue !important;\n            padding-left: 12px !important;\n            font-family: serif !important;\n            font-size: 1.0rem !important;\n            font-weight: 500 !important;\n            color: #666 !important;\n        }\n    ";
    document.head.appendChild(style);
    // MutationObserver for dynamic Gmail content
    var observer = new MutationObserver(function () {
        // Re-apply styles if new content loads (Gmail SPA behavior)
    });
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
