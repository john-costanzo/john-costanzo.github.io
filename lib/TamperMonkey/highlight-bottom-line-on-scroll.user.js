// ==UserScript==
// @name         Highlight Bottom Line on Space (Focus Target Model)
// @namespace    http://tampermonkey.net/
// @version      2026-07-03_12-52
// @description  Targets only the explicit reading pane or element in active focus, identifying its absolute lowest layout line.
// @author       Your Name
// @match        *://*/*
// @exclude      *://mail.google.com/*
// @exclude      *://inbox.google.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function () {
    'use strict';
    var HIGHLIGHT_DURATION = 1800; // ms
    var overlay = null;
    var removeTimeout = null;
    function createOverlay(rect) {
        if (overlay)
            overlay.remove();
        overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.left = "".concat(rect.left + window.scrollX, "px");
        overlay.style.top = "".concat(rect.top + window.scrollY, "px");
        overlay.style.width = "".concat(rect.width, "px");
        overlay.style.height = "".concat(rect.height, "px");
        overlay.style.backgroundColor = 'rgba(255, 235, 59, 0.45)';
        overlay.style.pointerEvents = 'none';
        overlay.style.transition = 'opacity 0.2s ease';
        overlay.style.zIndex = '2147483647'; // Stand above Gmail layers
        document.body.appendChild(overlay);
        if (removeTimeout)
            clearTimeout(removeTimeout);
        removeTimeout = window.setTimeout(function () {
            if (overlay) {
                overlay.style.opacity = '0';
                setTimeout(function () { return overlay === null || overlay === void 0 ? void 0 : overlay.remove(); }, 200);
            }
        }, HIGHLIGHT_DURATION);
    }
    /**
     * Extracts the specific, localized block of text the user is reading
     */
    function getTargetReadingContext(eventTarget) {
        // 1. Check if the user has an active text cursor or selection
        var selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            var container = selection.getRangeAt(0).startContainer;
            var parent_1 = container.nodeType === Node.TEXT_NODE ? container.parentElement : container;
            if (parent_1) {
                // Try to trap the closest clean layout paragraph or block wrapper
                var block = parent_1.closest('p, div[role="listitem"], table, article, .ii.gt'); // .ii.gt matches Gmail email body structure specifically
                if (block)
                    return block;
                return parent_1;
            }
        }
        // 2. Fall back to Gmail's specific dynamic views if standard selection context is missing
        var gmailBody = eventTarget.closest('.ii.gt, [role="main"]');
        if (gmailBody)
            return gmailBody;
        return eventTarget;
    }
    function highlightBottomLine(eventTarget) {
        var readingBlock = getTargetReadingContext(eventTarget);
        // Find the bounding viewport of the literal container holding the focus
        var scrollParent = readingBlock.parentElement || document.body;
        var parentRect = scrollParent.getBoundingClientRect();
        var viewTop = Math.max(parentRect.top, 0);
        var viewBottom = Math.min(parentRect.bottom, window.innerHeight);
        // Walk text lines specifically confined to our prioritized context block
        var walker = document.createTreeWalker(readingBlock, NodeFilter.SHOW_TEXT, {
            acceptNode: function (node) {
                var parent = node.parentElement;
                if (!parent)
                    return NodeFilter.FILTER_REJECT;
                var tag = parent.tagName.toUpperCase();
                if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'BUTTON' || tag === 'A') {
                    return NodeFilter.FILTER_REJECT;
                }
                var style = window.getComputedStyle(parent);
                if (style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity) === 0) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });
        var lines = [];
        var currentNode = walker.nextNode();
        while (currentNode) {
            var range = document.createRange();
            range.selectNodeContents(currentNode);
            var rects = range.getClientRects();
            for (var i = 0; i < rects.length; i++) {
                var rect = rects[i];
                // Verify line falls directly within visual window limits of our reading viewport
                var isFullyVisible = rect.bottom <= (viewBottom - 15) &&
                    rect.top >= (viewTop + 5) &&
                    rect.height > 0 &&
                    rect.width > 30;
                if (isFullyVisible) {
                    lines.push({
                        rect: rect,
                        bottom: rect.bottom
                    });
                }
            }
            currentNode = walker.nextNode();
        }
        if (lines.length > 0) {
            // Sort by literal bottom geometry context
            lines.sort(function (a, b) { return b.bottom - a.bottom; });
            createOverlay(lines[0].rect);
        }
    }
    window.addEventListener('keydown', function (event) {
        var target = event.target;
        var isInputField = target.tagName === 'INPUT' ||
            target.tagName === 'TEXTAREA' ||
            target.isContentEditable;
        // Skip execution if writing inside input fields, compose fields, or search bars
        if (event.code === 'Space' && !isInputField) {
            highlightBottomLine(target);
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
