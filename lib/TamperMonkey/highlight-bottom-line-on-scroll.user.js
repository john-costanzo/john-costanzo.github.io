// ==UserScript==
// @name         Bottom Line Highlighter
// @namespace    https://example.local/bottom-line-highlighter
// @version      2026-07-08_11-41
// @description  Highlights the text line that was at the bottom of the viewport just before Space paged the screen down.
// @author       you
// @match        *://*/*
// @exclude      *://mail.google.com/*
// @exclude      *://inbox.google.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==
(function main() {
    'use strict';
    var HIGHLIGHT_NAME = 'tm-bottom-line';
    var HIGHLIGHT_DURATION_MS = 1500;
    var STYLE_ID = 'tm-bottom-line-style';
    // How far up from the true bottom edge, and how far across the width,
    // we're willing to probe to find a real line of text. Pages rarely have
    // text touching the very last pixel row (margins, padding, line-height),
    // so we search a small grid instead of a single point.
    var Y_PROBES_PX = [2, 8, 16, 28, 42, 60];
    var X_FRACTIONS = [0.5, 0.3, 0.7, 0.15, 0.85];
    var clearTimer = null;
    // ---- feature detection -----------------------------------------------
    function supportsCustomHighlightAPI() {
        return (typeof window.Highlight === 'function' &&
            typeof CSS.highlights !== 'undefined');
    }
    function getCaretRangeAtPoint(x, y) {
        var doc = document;
        if (typeof doc.caretRangeFromPoint === 'function') {
            // Chrome / Edge / Safari
            return doc.caretRangeFromPoint(x, y);
        }
        if (typeof doc.caretPositionFromPoint === 'function') {
            // Firefox (and newer standardized form)
            var pos = doc.caretPositionFromPoint(x, y);
            if (!pos || !pos.offsetNode)
                return null;
            var range = document.createRange();
            range.setStart(pos.offsetNode, pos.offset);
            range.setEnd(pos.offsetNode, pos.offset);
            return range;
        }
        return null;
    }
    function isUsableTextNode(node) {
        return (!!node &&
            node.nodeType === Node.TEXT_NODE &&
            !!node.textContent &&
            node.textContent.trim().length > 0);
    }
    // ---- finding the visual line ------------------------------------------
    function getCharRect(textNode, offset) {
        var range = document.createRange();
        var end = Math.min(offset + 1, textNode.length);
        if (offset >= end)
            return null;
        range.setStart(textNode, offset);
        range.setEnd(textNode, end);
        var rects = range.getClientRects();
        return rects.length ? rects[0] : null;
    }
    /**
     * Given a text node and a known-good offset inside it (from a caret hit
     * test), expand left and right character-by-character until the visual
     * line changes, so we end up with a Range covering exactly one wrapped
     * line of text - not the whole paragraph/element. Assumes normal
     * horizontal, left-to-right text flow.
     */
    function expandToVisualLine(textNode, seedOffset) {
        var length = textNode.length;
        if (length === 0)
            return null;
        var clampedSeed = Math.min(seedOffset, length - 1);
        var baseRect = getCharRect(textNode, clampedSeed);
        if (!baseRect)
            return null;
        var sameLine = function (rect) {
            return Math.abs(rect.top - baseRect.top) < 2 ||
                (rect.bottom > baseRect.top + 1 && rect.top < baseRect.bottom - 1);
        };
        var start = clampedSeed;
        while (start > 0) {
            var rect = getCharRect(textNode, start - 1);
            if (!rect || !sameLine(rect))
                break;
            start--;
        }
        var end = clampedSeed + 1;
        while (end < length) {
            var rect = getCharRect(textNode, end);
            if (!rect || !sameLine(rect))
                break;
            end++;
        }
        if (start >= end)
            return null;
        var range = document.createRange();
        range.setStart(textNode, start);
        range.setEnd(textNode, end);
        return range;
    }
    /**
     * Probes a small grid of points near the bottom of the viewport and
     * returns a Range for the first real line of text it finds, searching
     * points closest to the true bottom edge first.
     */
    function findLineRangeAtViewportBottom() {
        var viewportBottom = window.innerHeight;
        var viewportWidth = window.innerWidth;
        for (var _i = 0, Y_PROBES_PX_1 = Y_PROBES_PX; _i < Y_PROBES_PX_1.length; _i++) {
            var yOffset = Y_PROBES_PX_1[_i];
            var y = viewportBottom - yOffset;
            if (y < 0)
                continue;
            for (var _a = 0, X_FRACTIONS_1 = X_FRACTIONS; _a < X_FRACTIONS_1.length; _a++) {
                var xFraction = X_FRACTIONS_1[_a];
                var x = viewportWidth * xFraction;
                var caretRange = getCaretRangeAtPoint(x, y);
                if (!caretRange)
                    continue;
                var node = caretRange.startContainer;
                if (!isUsableTextNode(node))
                    continue;
                var lineRange = expandToVisualLine(node, caretRange.startOffset);
                if (lineRange && lineRange.toString().trim().length > 0) {
                    return lineRange;
                }
            }
        }
        return null;
    }
    // ---- highlighting ------------------------------------------------------
    function ensureHighlightStyle() {
        if (document.getElementById(STYLE_ID))
            return;
        var style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = "\n      ::highlight(".concat(HIGHLIGHT_NAME, ") {\n        background-color: rgba(255, 214, 0, 0.55);\n      }\n      mark[data-tm-bottom-line] {\n        background-color: rgba(255, 214, 0, 0.55);\n        color: inherit;\n      }\n    ");
        document.head.appendChild(style);
    }
    function scheduleClear(clearFn) {
        if (clearTimer !== null) {
            window.clearTimeout(clearTimer);
            clearTimer = null;
        }
        clearTimer = window.setTimeout(function () {
            clearFn();
            clearTimer = null;
        }, HIGHLIGHT_DURATION_MS);
    }
    function highlightWithCustomHighlightAPI(range) {
        var HighlightCtor = window.Highlight;
        var highlight = new HighlightCtor(range);
        CSS.highlights.set(HIGHLIGHT_NAME, highlight);
        scheduleClear(function () { return CSS.highlights.delete(HIGHLIGHT_NAME); });
    }
    function highlightWithDomFallback(range) {
        try {
            var mark_1 = document.createElement('mark');
            mark_1.setAttribute('data-tm-bottom-line', 'true');
            range.surroundContents(mark_1);
            scheduleClear(function () {
                var parent = mark_1.parentNode;
                if (!parent)
                    return;
                while (mark_1.firstChild)
                    parent.insertBefore(mark_1.firstChild, mark_1);
                parent.removeChild(mark_1);
                parent.normalize();
            });
        }
        catch (err) {
            // Our ranges live inside a single text node, so this should be rare.
            console.warn('Bottom Line Highlighter: could not wrap range', err);
        }
    }
    function highlightRange(range) {
        ensureHighlightStyle();
        if (supportsCustomHighlightAPI()) {
            highlightWithCustomHighlightAPI(range);
        }
        else {
            highlightWithDomFallback(range);
        }
    }
    // ---- event wiring --------------------------------------------------
    function isTypingContext(target) {
        if (!(target instanceof HTMLElement))
            return false;
        var tag = target.tagName;
        return tag === 'INPUT' || tag === 'TEXTAREA' || target.isContentEditable;
    }
    function onKeyDown(event) {
        if (event.code !== 'Space')
            return;
        if (event.repeat)
            return; // ignore auto-repeat from a held-down key
        if (event.ctrlKey || event.altKey || event.metaKey || event.shiftKey)
            return;
        if (isTypingContext(event.target))
            return;
        // Read the pre-scroll state now: keydown fires before the browser's
        // default page-down action (or any site JS driven by this same event)
        // actually scrolls anything, so this reflects the "before" layout.
        var range = findLineRangeAtViewportBottom();
        if (!range)
            return;
        highlightRange(range);
    }
    document.addEventListener('keydown', onKeyDown, {
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
