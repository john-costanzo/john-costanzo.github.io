// ==UserScript==
// @name         Dynamic Date Replacer
// @namespace    http://tampermonkey.net/
// @version      2026-02-22_12-12
// @description  Replace ${DATE "..."} placeholders with computed dates in Gmail
// @match        https://mail.google.com/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/dynamic-date-replacer.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/dynamic-date-replacer.user.js
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var pattern = /\$\{DATE(?:\s*"([^"]+)")?(?:\s*([+-]\d+)\s*([YMWDhms]))?\}/g;
    var observer = new MutationObserver(debounce(function (mutations) {
        var _a;
        var nodesToProcess = [];
        for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
            var mutation = mutations_1[_i];
            for (var _b = 0, _c = Array.from(mutation.addedNodes); _b < _c.length; _b++) {
                var node = _c[_b];
                if (node.nodeType === Node.TEXT_NODE) {
                    if (isInsideEditable(node) && (node.nodeValue || '').includes('${DATE')) {
                        nodesToProcess.push({
                            node: node,
                            type: 'text'
                        });
                    }
                }
                else if (node.nodeType === Node.ELEMENT_NODE) {
                    var element = node;
                    if (element.closest('div.editable')) {
                        if ((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.includes('${DATE')) {
                            nodesToProcess.push({
                                node: element,
                                type: 'element'
                            });
                        }
                    }
                    else {
                        element.querySelectorAll('div.editable')
                            .forEach(function (el) {
                            var _a;
                            if ((_a = el.textContent) === null || _a === void 0 ? void 0 : _a.includes('${DATE')) {
                                nodesToProcess.push({
                                    node: el,
                                    type: 'element'
                                });
                            }
                        });
                    }
                }
            }
            if (mutation.type === 'characterData') {
                if (isInsideEditable(mutation.target) && (mutation.target.nodeValue || '').includes('${DATE')) {
                    nodesToProcess.push({
                        node: mutation.target,
                        type: 'text'
                    });
                }
            }
        }
        if (nodesToProcess.length === 0)
            return;
        // Only manage selection if the current focus is within one of the nodes we are about to process
        var shouldManageSelection = false;
        var sel = window.getSelection();
        var anchorNode = sel === null || sel === void 0 ? void 0 : sel.anchorNode;
        if (anchorNode) {
            for (var _d = 0, nodesToProcess_1 = nodesToProcess; _d < nodesToProcess_1.length; _d++) {
                var node = nodesToProcess_1[_d].node;
                if (node.contains(anchorNode)) {
                    shouldManageSelection = true;
                    break;
                }
            }
        }
        var savedRange = shouldManageSelection ? saveSelection() : null;
        for (var _e = 0, nodesToProcess_2 = nodesToProcess; _e < nodesToProcess_2.length; _e++) {
            var _f = nodesToProcess_2[_e], node = _f.node, type = _f.type;
            if (type === 'text') {
                replaceInNode(node, savedRange);
            }
            else {
                scanElement(node, savedRange);
            }
        }
        // Restore selection after processing
        if (shouldManageSelection) {
            restoreSelection(savedRange);
        }
    }, 50));
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });
    function isInsideEditable(node) {
        while (node) {
            if (node instanceof Element && node.closest('div.editable')) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }
    // Save current selection
    function saveSelection() {
        var sel = window.getSelection();
        return sel && sel.rangeCount > 0 ? sel.getRangeAt(0).cloneRange() : null;
    }
    // Restore selection
    function restoreSelection(savedRange) {
        if (!savedRange)
            return;
        var sel = window.getSelection();
        if (!sel)
            return;
        sel.removeAllRanges();
        sel.addRange(savedRange);
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
        if (!originalText || !pattern.test(originalText) || !textNode.parentNode)
            return;
        // Check if cursor is in this node
        var isCursorInNode = savedRange && (savedRange.startContainer === textNode || savedRange.endContainer === textNode);
        // Split the text around matches and replace only the matched parts
        var fragments = document.createDocumentFragment();
        var lastIndex = 0;
        var match;
        var lastReplacementNodeIndex = -1;
        pattern.lastIndex = 0;
        while ((match = pattern.exec(originalText)) !== null) {
            // Add text before match
            if (match.index > lastIndex) {
                fragments.appendChild(document.createTextNode(originalText.slice(lastIndex, match.index)));
            }
            // Replace matched placeholder
            var replacement = replaceMatch(match);
            fragments.appendChild(document.createTextNode(replacement));
            lastReplacementNodeIndex = fragments.childNodes.length - 1;
            lastIndex = match.index + match[0].length;
        }
        // Add remaining text
        if (lastIndex < originalText.length) {
            fragments.appendChild(document.createTextNode(originalText.slice(lastIndex)));
        }
        // Capture child nodes before they are appended to the document
        var childNodes = Array.from(fragments.childNodes);
        var parent = textNode.parentNode;
        parent.replaceChild(fragments, textNode);
        // Update saved range to point to end of last replacement if cursor was in this node
        if (isCursorInNode && lastReplacementNodeIndex >= 0) {
            var targetNode = childNodes[lastReplacementNodeIndex];
            savedRange.setStart(targetNode, ((_a = targetNode.textContent) === null || _a === void 0 ? void 0 : _a.length) || 0);
            savedRange.collapse(true);
        }
    }
    function replaceMatch(match) {
        var _a = match[1], format = _a === void 0 ? '' : _a, _b = match[2], offset = _b === void 0 ? '' : _b, _c = match[3], unit = _c === void 0 ? '' : _c;
        var date = new Date();
        if (offset && unit) {
            var amount = parseInt(offset, 10);
            switch (unit) {
                case 'Y':
                    date.setFullYear(date.getFullYear() + amount);
                    break;
                case 'M':
                    date.setMonth(date.getMonth() + amount);
                    break;
                case 'W':
                    date.setDate(date.getDate() + (amount * 7));
                    break;
                case 'D':
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
            }
        }
        return formatDate(date, format || 'YYYY-MM-DD');
    }
    function getPaddedDay(date) {
        if (date === void 0) { date = new Date(); }
        return String(date.getDate()).padStart(2, '0'); // e.g. "01", "09", "23"
    }
    function formatDate(date, format) {
        var pad = function (n, width) {
            if (width === void 0) { width = 2; }
            return n.toString().padStart(width, '0');
        };
        // Day names
        var dayNames = {
            'DDDD': date.toLocaleDateString('en-US', {
                weekday: 'long'
            }), // Sunday
            'DDD': date.toLocaleDateString('en-US', {
                weekday: 'short'
            }), // Sun
            'DD': date.getDay().toString(), // 0
            'D': getPaddedDay(date) // date.getDate( ).toString( ) // day-of-month
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
            .replace(/\bYYYY\b/g, date.getFullYear().toString())
            .replace(/\bYY\b/g, date.getFullYear().toString().slice(-2))
            .replace(/\bMMMM\b/g, monthNames.MMMM)
            .replace(/\bMMM\b/g, monthNames.MMM)
            .replace(/\bMM\b/g, pad(date.getMonth() + 1))
            .replace(/\bMo\b/g, monthNames.Mo)
            .replace(/\bDDDD\b/g, dayNames.DDDD)
            .replace(/\bDDD\b/g, dayNames.DDD)
            .replace(/\bDD\b/g, dayNames.DD)
            //.replace( /\bDD\b/g, pad( date.getDate( ) ) )
            .replace(/\bD\b/g, dayNames.D)
            .replace(/\bhh\b/g, pad(date.getHours()))
            .replace(/\bmm\b/g, pad(date.getMinutes()))
            .replace(/\bss\b/g, pad(date.getSeconds()));
    }
    function debounce(func, wait) {
        var timeout;
        var accumulatedMutations = [];
        return function (mutations) {
            accumulatedMutations.push.apply(accumulatedMutations, mutations);
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                var toProcess = accumulatedMutations;
                accumulatedMutations = [];
                func(toProcess);
            }, wait);
        };
    }
})();
/**** Test Cases:
{DATE "YYYY-MM-DDDD hh:mm:ss"}
{DATE "YYYY-MM-DDD hh:mm:ss"}
{DATE "YYYY-MM-DD hh:mm:ss"}
{DATE "YYYY-MM-D hh:mm:ss"}

{DATE "YY-MMM-D hh:mm:ss"}
{DATE "DDDD hh:mm:ss"}
{DATE "DDD hh:mm:ss"}
{DATE "DD hh:mm:ss"}
{DATE "D hh:mm:ss"}

{DATE "YYYY-MM-D hh:mm:ss" +1Y}
{DATE "YYYY-MM-D hh:mm:ss" -1Y}

{DATE "YYYY-MM-D hh:mm:ss" +1M}
{DATE "YYYY-MM-D hh:mm:ss" -1M}

{DATE "YYYY-MM-D hh:mm:ss" +1W}
{DATE "YYYY-MM-D hh:mm:ss" -1W}

{DATE "YYYY-MM-D hh:mm:ss" +1D}
{DATE "YYYY-MM-D hh:mm:ss" -1D}

{DATE "YYYY-MM-D hh:mm:ss" +1h}
{DATE "YYYY-MM-D hh:mm:ss" -1h}

{DATE "YYYY-MM-D hh:mm:ss" +1m}
{DATE "YYYY-MM-D hh:mm:ss" -1m}

{DATE "YYYY-MM-D hh:mm:ss" +1s}
{DATE "YYYY-MM-D hh:mm:ss" -1s}


***/
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// End:
