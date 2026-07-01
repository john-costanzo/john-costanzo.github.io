// ==UserScript==
// @name         Highlight Bottom Line on Space (Gmail Fixed)
// @namespace    http://tampermonkey.net/
// @version      2026-07-01_13-50
// @description  Temporarily highlights ONLY the single bottom-most fully visible line, optimized for complex apps like Gmail.
// @author       Your Name
// @match        *://*/*
// @exclude      *://mail.google.com/*
// @exclude      *://inbox.google.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function () {
    'use strict';
    var HIGHLIGHT_DURATION = 1000; // ms
    var overlay = null;
    var removeTimeout = null;
    /**
     * Creates or resets the absolute overlay used to highlight the line
     */
    function createOverlay(rect) {
        if (overlay)
            overlay.remove();
        overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        // Account for absolute page scrolling
        overlay.style.left = "".concat(rect.left + window.scrollX, "px");
        overlay.style.top = "".concat(rect.top + window.scrollY, "px");
        overlay.style.width = "".concat(rect.width, "px");
        overlay.style.height = "".concat(rect.height, "px");
        overlay.style.backgroundColor = 'rgba(255, 235, 59, 0.45)'; // Soft yellow
        overlay.style.pointerEvents = 'none'; // Never block clicks
        overlay.style.transition = 'opacity 0.3s ease';
        overlay.style.zIndex = '2147483647'; // Max z-index to stay above Gmail UI layers
        document.body.appendChild(overlay);
        if (removeTimeout)
            clearTimeout(removeTimeout);
        removeTimeout = window.setTimeout(function () {
            if (overlay) {
                overlay.style.opacity = '0';
                setTimeout(function () { return overlay === null || overlay === void 0 ? void 0 : overlay.remove(); }, 300);
            }
        }, HIGHLIGHT_DURATION);
    }
    /**
     * Scans the page structurally to find the bottom-most visible text line
     */
    function highlightBottomLine() {
        var viewportHeight = window.innerHeight;
        var viewportWidth = window.innerWidth;
        // 1. Find what the user is actually looking at/interacting with
        var activeContainer = document.body;
        var selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            var node = selection.getRangeAt(0).startContainer;
            if (node.parentElement) {
                // Climb up to find the closest scrollable container or major wrapper
                activeContainer = node.parentElement.closest('[role="main"], .class, article, main, body') || document.body;
            }
        }
        else if (document.activeElement && document.activeElement !== document.body) {
            activeContainer = document.activeElement;
        }
        // 2. Gather all text nodes within that active container scope
        var textNodes = getTextNodes(activeContainer);
        var lowestLineRect = null;
        for (var _i = 0, textNodes_1 = textNodes; _i < textNodes_1.length; _i++) {
            var node = textNodes_1[_i];
            // Skip hidden text nodes entirely
            if (!node.parentElement || node.parentElement.offsetWidth === 0 || node.parentElement.offsetHeight === 0) {
                continue;
            }
            // Optimization: Skip elements that are obviously way out of the viewport
            var parentRect = node.parentElement.getBoundingClientRect();
            if (parentRect.top > viewportHeight || parentRect.bottom < 0) {
                continue;
            }
            var rects = getTextNodeRects(node);
            for (var i = 0; i < rects.length; i++) {
                var rect = rects[i];
                // Ensure line is fully visible vertically and horizontally inside the viewport boundaries
                var isFullyVisible = rect.bottom <= (viewportHeight - 10) &&
                    rect.top >= 5 &&
                    rect.height > 0 &&
                    rect.left >= 0 &&
                    rect.right <= viewportWidth;
                if (isFullyVisible) {
                    // We want the line closest to the bottom of the viewport
                    if (!lowestLineRect || rect.bottom > lowestLineRect.bottom) {
                        // Avoid matching wide empty spaces or UI utility text (like timestamps/buttons usually under 15px wide)
                        if (rect.width > 20) {
                            lowestLineRect = rect;
                        }
                    }
                }
            }
        }
        // 3. Draw the highlight if a line was captured
        if (lowestLineRect) {
            createOverlay(lowestLineRect);
        }
    }
    /**
     * Extracts text nodes cleanly while filtering out script tags or invisible layout blocks
     */
    function getTextNodes(root) {
        var textNodes = [];
        var walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode: function (node) {
                var parent = node.parentElement;
                if (!parent)
                    return NodeFilter.FILTER_REJECT;
                var tag = parent.tagName.toUpperCase();
                // Reject script, style, and common hidden UI items
                if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT' || tag === 'BUTTON') {
                    return NodeFilter.FILTER_REJECT;
                }
                var style = window.getComputedStyle(parent);
                if (style.visibility === 'hidden' || style.display === 'none' || style.opacity === '0') {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });
        var currentNode = walk.nextNode();
        while (currentNode) {
            textNodes.push(currentNode);
            currentNode = walk.nextNode();
        }
        return textNodes;
    }
    /**
     * Extracts layout bounding rectangles for a text node
     */
    function getTextNodeRects(textNode) {
        var range = document.createRange();
        range.selectNodeContents(textNode);
        var rects = range.getClientRects();
        return rects;
    }
    // Capture spacebar event cleanly
    window.addEventListener('keydown', function (event) {
        var target = event.target;
        var isInputField = target.tagName === 'INPUT' ||
            target.tagName === 'TEXTAREA' ||
            target.isContentEditable;
        if (event.code === 'Space' && !isInputField) {
            highlightBottomLine();
        }
    }, {
        capture: true
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
