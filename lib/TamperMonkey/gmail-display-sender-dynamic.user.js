// ==UserScript==
// @name         Gmail Sender Display
// @namespace    http://tampermonkey.net/
// @version      2025-12-28_21-44
// @description  Displays email sender
// @author       Perplexity
// @match        https://mail.google.com/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/gmail-display-sender-dynamic.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/gmail-display-sender-dynamic.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// ==/UserScript==
(function () {
    'use strict';
    GM_addStyle("\n        #senderDisplay {\n            position: fixed;\n            top: 20px;\n            background-color: #ffffff;\n            padding: 10px 15px;\n            border-radius: 4px;\n            box-shadow: 0 2px 10px rgba(0,0,0,0.2);\n            z-index: 9999;\n            font-size: 14px;\n            font-weight: bold;\n            border: 1px solid #dadce0;\n            display: none;\n        }\n    ");
    var senderDisplay = document.createElement('div');
    senderDisplay.id = 'senderDisplay';
    document.body.appendChild(senderDisplay);
    var cleanSender = function (str) {
        return (str === null || str === void 0 ? void 0 : str.replace(/^([\w\s]+)\s*from\s*\1$/, '$1').replace(/lstadtlander1/, 'Linda Stadtlander').replace(/mspetrella@morrisbb\.net/, 'Maureen Petrella').replace(/dougallennh@gmail\.com/, 'Doug Allen').replace(/colette\.ashton50@gmail\.com/, 'Colette Ashton').replace(/dlt_nc@yahoo.com/, 'Dennis Thompson').replace(/ASTRID EWING/, 'Jim Ewing').replace(/from Letters from an American$/, '').replace(/ from Kal Draws The Line/, '').replace(/THE deEP STATE.*/, 'THE deEP STATE'));
    };
    var querySelectorLast = function (document, selector) {
        var result = document.querySelectorAll(selector);
        if (result.length === 0) {
            return null;
        }
        else {
            return (result[result.length - 1]);
        }
    };
    var getSender = function () {
        var _a, _b, _c, _d, _e;
        // TODO: call querySelectorAll and operate on last entry
        // Modern Gmail detection
        var modernEl = querySelectorLast(document, '[data-legacy-thread-id] [email]');
        if (modernEl)
            return cleanSender(modernEl.getAttribute('email') || modernEl.textContent || '');
        // Classic Gmail detection
        var classicEl = querySelectorLast(document, '[role="main"] [name="from"]');
        if (classicEl)
            return cleanSender(((_a = classicEl.textContent) === null || _a === void 0 ? void 0 : _a.replace(/^From:\s*/i, '').trim()) || '');
        // Alternative detection methods
        return cleanSender(((_c = (_b = querySelectorLast(document, '[aria-label*="From:"]')) === null || _b === void 0 ? void 0 : _b.getAttribute('aria-label')) === null || _c === void 0 ? void 0 : _c.replace(/^From:\s*/i, '')) ||
            ((_d = querySelectorLast(document, '.gD')) === null || _d === void 0 ? void 0 : _d.textContent) ||
            ((_e = querySelectorLast(document, '.go')) === null || _e === void 0 ? void 0 : _e.textContent) ||
            '');
    };
    var positionDisplay = function () {
        var supportLink = document.querySelector('a[aria-label="Support"]');
        if (supportLink) {
            // Position relative to support link's parent container
            var container = supportLink.closest('div') || document.body;
            container.style.position = 'relative';
            container.insertBefore(senderDisplay, supportLink);
            senderDisplay.style.right = "".concat(supportLink.clientWidth + 185, "px");
        }
    };
    var updateSender = function () {
        var sender = getSender();
        if (sender) {
            senderDisplay.textContent = sender;
            senderDisplay.style.display = 'block';
            positionDisplay();
        }
        else {
            senderDisplay.style.display = 'none';
        }
        var replyForwardButtons = document.querySelector("div.tyMQmc");
        if (replyForwardButtons) {
            replyForwardButtons.style.display = 'none';
        }
    };
    // Main observer for email content changes
    var emailObserver = new MutationObserver(function () {
        updateSender();
    });
    // URL change detection for navigation
    var lastUrl = location.href;
    var urlObserver = new MutationObserver(function () {
        if (location.href !== lastUrl) {
            lastUrl = location.href;
            updateSender();
        }
    });
    urlObserver.observe(document, {
        subtree: true,
        childList: true
    });
    // Track email view state
    var trackEmailView = function () {
        var emailContent = document.querySelector('[role="main"]');
        if (emailContent) {
            emailObserver.disconnect();
            emailObserver.observe(emailContent, {
                childList: true,
                subtree: true,
                attributes: true,
                characterData: true
            });
            updateSender();
            return true;
        }
        return false;
    };
    // Initial setup with retry logic
    var init = function () {
        if (trackEmailView()) {
            clearInterval(initInterval);
        }
    };
    var initInterval = setInterval(init, 500);
    // Enhanced navigation detection
    document.addEventListener('click', function (e) {
        if (e && e.target) {
            var target = e.target; // Type assertion
            if (target.closest('[role="navigation"], [role="listitem"]')) {
                setTimeout(updateSender, 500);
            }
        }
    }, true);
    // Periodic refresh safeguard
    setInterval(updateSender, 500);
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// End:
