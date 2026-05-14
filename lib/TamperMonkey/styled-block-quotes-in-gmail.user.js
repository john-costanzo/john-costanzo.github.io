// ==UserScript==
// @name         Stylize blockquotes
// @version      2026-05-13_21-41
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
    // We create a style block that uses !important to win the specificity war.
    // Gmail's reply threads use .gmail_quote, so we target <blockquote> 
    // that DOES NOT have that class.
    var css = "\n        blockquote:not(:has(blockquote)) {\n            border-left: 3px solid blue !important;\n            font-family: \"Georgia\", \"Times New Roman\", serif !important;\n            color: #666666 !important;\n            font-size: 1.2em !important;\n            padding-left: 15px !important;\n            margin-left: 10px !important;\n            background-color: #FBEEAC !important;\n        }\n    ";
    var injectStyles = function () {
        if (document.head) {
            var style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);
        }
    };
    // Run immediately and also on a loop for a few seconds to ensure 
    // it catches Gmail's late-loading head element.
    injectStyles();
    var timer = setInterval(injectStyles, 1000);
    setTimeout(function () { return clearInterval(timer); }, 10000);
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// jinx-local-words: "https lightblue lightyellow nh oq rgba"
// End:
