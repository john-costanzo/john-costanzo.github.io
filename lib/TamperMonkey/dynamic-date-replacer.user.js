// ==UserScript==
// @name         Dynamic Date Replacer
// @namespace    http://tampermonkey.net/
// @version      2026-01-24_16-26
// @description  Replace ${DATE "..."} placeholders with computed dates in Gmail
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var pattern = /\$\{DATE(?:\s*"([^"]+)")?(?:\s*([+-]\d+)([dhmswMy]))?\}/g;
    var observer = new MutationObserver(debounce(function (mutations) {
        // Save selection before processing
        var savedRange = saveSelection();
        for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
            var mutation = mutations_1[_i];
            for (var _a = 0, _b = Array.from(mutation.addedNodes); _a < _b.length; _a++) {
                var node = _b[_a];
                if (node.nodeType === Node.TEXT_NODE) {
                    replaceInNode(node, savedRange);
                }
                else if (node.nodeType === Node.ELEMENT_NODE) {
                    scanElement(node, savedRange);
                }
            }
            if (mutation.type === 'characterData') {
                replaceInNode(mutation.target, savedRange);
            }
        }
        // Restore selection after processing
        restoreSelection(savedRange);
    }, 150));
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });
    // Save current selection
    function saveSelection() {
        var sel = window.getSelection();
        return sel && sel.rangeCount > 0 ? sel.getRangeAt(0).cloneRange() : null;
    }
    // Restore selection, positioning cursor at end of last replacement if nearby
    function restoreSelection(savedRange) {
        var _a;
        if (!savedRange)
            return;
        var sel = window.getSelection();
        sel.removeAllRanges();
        // Try to restore exact position
        try {
            // Check if we're still near the original range
            var currentRange = sel.getRangeAt(0);
            if (!currentRange || Math.abs(currentRange.startOffset - savedRange.startOffset) > 50) {
                // Position at end of replacement if far away
                var endContainer = savedRange.endContainer;
                if (endContainer.nodeType === Node.TEXT_NODE) {
                    var newRange = document.createRange();
                    newRange.setStart(endContainer, ((_a = endContainer.textContent) === null || _a === void 0 ? void 0 : _a.length) || 0);
                    newRange.collapse(true);
                    sel.addRange(newRange);
                }
                else {
                    sel.addRange(savedRange);
                }
            }
            else {
                sel.addRange(savedRange);
            }
        }
        catch (_b) {
            sel.addRange(savedRange);
        }
    }
    // Scan an element and all its text descendants
    function scanElement(element, savedRange) {
        var walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
        var node;
        while (node = walker.nextNode()) {
            replaceInNode(node, savedRange);
        }
    }
    // Replace patterns in a single text node, preserving context
    function replaceInNode(textNode, savedRange) {
        var _a;
        var originalText = textNode.nodeValue || '';
        if (!originalText || !pattern.test(originalText))
            return;
        // Split the text around matches and replace only the matched parts
        var fragments = document.createDocumentFragment();
        var lastIndex = 0;
        var match;
        var replacementEndOffset = 0;
        pattern.lastIndex = 0;
        while ((match = pattern.exec(originalText)) !== null) {
            // Add text before match
            if (match.index > lastIndex) {
                fragments.appendChild(document.createTextNode(originalText.slice(lastIndex, match.index)));
            }
            // Replace matched placeholder
            var replacement = replaceMatch(match);
            fragments.appendChild(document.createTextNode(replacement));
            lastIndex = match.index + match[0].length;
        }
        // Add remaining text
        if (lastIndex < originalText.length) {
            fragments.appendChild(document.createTextNode(originalText.slice(lastIndex)));
        }
        // Replace the original text node with fragments
        var parent = textNode.parentNode;
        var rangeOffset = savedRange ? savedRange.startOffset : 0;
        parent.replaceChild(fragments, textNode);
        // Update saved range to point to end of last replacement
        if (savedRange && replacementEndOffset >= 0) {
            var newTextNodes = Array.from(fragments.childNodes).filter(function (n) {
                return n.nodeType === Node.TEXT_NODE;
            });
            if (newTextNodes[replacementEndOffset]) {
                savedRange.setStart(newTextNodes[replacementEndOffset], ((_a = newTextNodes[replacementEndOffset].textContent) === null || _a === void 0 ? void 0 : _a.length) || 0);
                savedRange.collapse(true);
            }
        }
    }
    function replaceMatch(match) {
        var _a = match[1], format = _a === void 0 ? '' : _a, _b = match[2], offset = _b === void 0 ? '' : _b, _c = match[3], unit = _c === void 0 ? '' : _c;
        var date = new Date();
        if (offset && unit) {
            var amount = parseInt(offset, 10);
            switch (unit) {
                case 'd':
                    date.setDate(date.getDate() + amount);
                    break;
                case 'h':
                    date.setHours(date.getHours() + amount);
                    break;
                case 'm':
                    date.setMinutes(date.getMinutes() + amount);
                    break;
                case 's':
                    date.setSeconds(date.getSeconds() + amount);
                    break;
                case 'w':
                    date.setDate(date.getDate() + (amount * 7));
                    break;
                case 'M':
                    date.setMonth(date.getMonth() + amount);
                    break;
                case 'y':
                    date.setFullYear(date.getFullYear() + amount);
                    break;
            }
        }
        return formatDate(date, format || 'YYYY-MM-DD');
    }
    function formatDate(date, format) {
        var pad = function (n, width) {
            if (width === void 0) { width = 2; }
            return n.toString().padStart(width, '0');
        };
        // Day names
        var dayNames = {
            'dddd': date.toLocaleDateString('en-US', {
                weekday: 'long'
            }), // Sunday
            'ddd': date.toLocaleDateString('en-US', {
                weekday: 'short'
            }), // Sun
            'dd': date.getDay().toString(), // 0
            'd': date.getDate().toString() // day-of-month
        };
        // Month names
        var monthNames = {
            'MMMM': date.toLocaleDateString('en-US', {
                month: 'long'
            }), // January
            'MMM': date.toLocaleDateString('en-US', {
                month: 'short'
            }), // Jan
            'Mo': (date.getMonth() + 1).toString() // 1
        };
        return format
            .replace(/\bdddd\b/g, dayNames.dddd)
            .replace(/\bddd\b/g, dayNames.ddd)
            .replace(/\bdd\b/g, dayNames.dd)
            .replace(/\bd\b/g, dayNames.d)
            .replace(/\bMMMM\b/g, monthNames.MMMM)
            .replace(/\bMMM\b/g, monthNames.MMM)
            .replace(/\bMo\b/g, monthNames.Mo)
            .replace(/\bYYYY\b/g, date.getFullYear().toString())
            .replace(/\bYY\b/g, date.getFullYear().toString().slice(-2))
            .replace(/\bMM\b/g, pad(date.getMonth() + 1))
            .replace(/\bDD\b/g, pad(date.getDate()))
            .replace(/\bHH\b/g, pad(date.getHours()))
            .replace(/\bmm\b/g, pad(date.getMinutes()))
            .replace(/\bss\b/g, pad(date.getSeconds()));
    }
    function debounce(func, wait) {
        var timeout;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () { return func.apply(void 0, args); }, wait);
        };
    }
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// End:
