// ==UserScript==
// @name         Exit Adblock Plus Update Page
// @namespace    http://tampermonkey.net/
// @version      2025-12-28_21-44
// @description  Automatically exits the Adblock Plus update page
// @author       You
// @match        https://adblockplus.org/update*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/adblock-plus-exist-update-page.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/adblock-plus-exist-update-page.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant window.close
// ==/UserScript==
(function () {
    'use strict';
    // Try to close the window/tab first
    setTimeout(function () { return window.close(); }, 500);
    // Fallback: clear the page content if close fails
    document.body.innerHTML = '<h1>Page blocked</h1><p>Returning to previous page shortly...</p>';
    document.title = 'Blocked';
    // Additional fallback: try to go back after a short delay
    setTimeout(function () {
        window.history.back();
    }, 1000);
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// jinx-local-words: "https lightblue lightyellow nh oq rgba"
// End:
