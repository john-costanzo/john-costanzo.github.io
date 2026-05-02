// ==UserScript==
// @name         Stylize blockquotes
// @version      2026-05-02_10-52
// @description  Stylize blockquotes in gmail.
// @author       John Costanzo
// @match        https://mail.google.com/mail/u/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/styled-blockquotes-in-gmail.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/styled-blockquotes-in-gmail.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
// IMPORTANT! Comment out the // Object.defineProperty(exports, "__esModule", { value: true }); line, above
(function () {
    'use strict';
    var style = document.createElement('style');
    style.textContent = "\n        /* Gmail quoted blocks: blue border + serif font */\n        .gmail_quote,\n        div.gmail_quote {\n            border-left: 3px solid blue !important;\n            padding-left: 12px !important;\n            margin-left: 0 !important;\n            font-family: serif !important;\n            font-size: 1.5rem !important;\n            font-weight: 500 !important;\n            color: #333 !important;\n            line-height: 1.4 !important;\n        }\n\n        /* Dynamic quote divs */\n        div[style*=\"border-left-color\"] {\n            border-left-color: blue !important;\n            border-left-width: 3px !important;\n            font-family: serif !important;\n            font-size: 1.5rem !important;\n            font-weight: 500 !important;\n            color: #333 !important;\n        }\n\n        /* Nested quotes inherit but adjust padding */\n        .gmail_quote .gmail_quote,\n        div.gmail_quote div.gmail_quote {\n            border-left: 3px solid blue !important;\n            padding-left: 12px !important;\n            font-family: serif !important;\n            font-size: 1.5rem !important;\n            font-weight: 500 !important;\n            color: #333 !important;\n        }\n    ";
    document.head.appendChild(style);
    // Re-apply on dynamic changes
    var observer = new MutationObserver(function () { });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})(); // Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// jinx-local-words: "https lightblue lightyellow nh oq rgba"
// End:
