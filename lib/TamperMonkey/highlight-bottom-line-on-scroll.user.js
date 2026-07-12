// ==UserScript==
// @name         Bottom Line Highlighter
// @namespace    https://example.local/bottom-line-highlighter
// @version      2026-07-12_08-18
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
    var HIGHLIGHT_RGB = '255, 214, 0';
    var MAX_ALPHA = 0.55;
    var ALPHA_VAR = '--tm-bottom-line-alpha';
    var STYLE_ID = 'tm-bottom-line-style';
    // The highlight snaps in instantly, holds at full strength briefly so it's
    // easy to spot, then fades out gradually over FADE_DURATION_MS.
    var HOLD_DURATION_MS = 1800;
    var FADE_DURATION_MS = 2400;
    // How far up from the true bottom edge, and how far across the width,
    // we're willing to probe to find a real line of text. Pages rarely have
    // text touching the very last pixel row (margins, padding, line-height),
    // so we search a small grid instead of a single point.
    var Y_PROBES_PX = [2, 8, 16, 28, 42, 60];
    var X_FRACTIONS = [0.5, 0.3, 0.7, 0.15, 0.85];
    // Teardown for whatever highlight is currently on screen (natural finish
    // or an early cancel because a new line got highlighted). Idempotent.
    var activeTeardown = null;
    // ---- feature detection -----------------------------------------------
    function supportsCustomHighlightAPI() {
        return (typeof window.Highlight === 'function' &&
            typeof CSS.highlights !== 'undefined');
    }
    function prefersReducedMotion() {
        return (typeof window.matchMedia === 'function' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches);
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
    // ---- highlighting -------------------------------------------------------
    function highlightColor(alpha) {
        return "rgba(".concat(HIGHLIGHT_RGB, ", ").concat(alpha, ")");
    }
    function ensureHighlightStyle() {
        if (document.getElementById(STYLE_ID))
            return;
        var style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = "\n      ::highlight(".concat(HIGHLIGHT_NAME, ") {\n        background-color: rgba(").concat(HIGHLIGHT_RGB, ", var(").concat(ALPHA_VAR, ", ").concat(MAX_ALPHA, "));\n      }\n      mark[data-tm-bottom-line] {\n        color: inherit;\n      }\n    ");
        document.head.appendChild(style);
    }
    /**
     * Custom Highlight API path: there's no reliable cross-browser support for
     * CSS transitions on ::highlight() pseudo-elements (they don't behave like
     * regular boxed elements), so the fade is driven manually with
     * requestAnimationFrame, stepping a CSS custom property that the
     * ::highlight() rule reads for its alpha channel.
     */
    function highlightWithCustomHighlightAPI(range, animate) {
        var HighlightCtor = window.Highlight;
        var highlight = new HighlightCtor(range);
        var highlights = CSS.highlights;
        highlights.set(HIGHLIGHT_NAME, highlight);
        document.documentElement.style.setProperty(ALPHA_VAR, String(MAX_ALPHA));
        var rafId = null;
        var holdTimer = null;
        var finish = function () {
            highlights.delete(HIGHLIGHT_NAME);
            document.documentElement.style.removeProperty(ALPHA_VAR);
            activeTeardown = null;
        };
        var teardown = function () {
            if (holdTimer !== null)
                window.clearTimeout(holdTimer);
            if (rafId !== null)
                cancelAnimationFrame(rafId);
            highlights.delete(HIGHLIGHT_NAME);
            document.documentElement.style.removeProperty(ALPHA_VAR);
        };
        if (!animate) {
            holdTimer = window.setTimeout(finish, HOLD_DURATION_MS + FADE_DURATION_MS);
            return teardown;
        }
        var runFade = function () {
            var startTime = performance.now();
            var step = function (now) {
                var elapsed = now - startTime;
                var progress = Math.min(elapsed / FADE_DURATION_MS, 1);
                var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                var alpha = MAX_ALPHA * (1 - eased);
                document.documentElement.style.setProperty(ALPHA_VAR, alpha.toFixed(3));
                if (progress < 1) {
                    rafId = requestAnimationFrame(step);
                }
                else {
                    finish();
                }
            };
            rafId = requestAnimationFrame(step);
        };
        holdTimer = window.setTimeout(runFade, HOLD_DURATION_MS);
        return teardown;
    }
    /**
     * DOM fallback path: a real element supports real CSS transitions, so the
     * fade just animates background-color's alpha channel down to zero (never
     * `opacity`, which would also fade the underlying text).
     */
    function highlightWithDomFallback(range, animate) {
        var mark = document.createElement('mark');
        mark.setAttribute('data-tm-bottom-line', 'true');
        mark.style.transitionProperty = 'background-color';
        mark.style.transitionTimingFunction = 'ease-out';
        mark.style.transitionDuration = '0ms';
        mark.style.backgroundColor = highlightColor(MAX_ALPHA);
        try {
            range.surroundContents(mark);
        }
        catch (err) {
            // Our ranges live inside a single text node, so this should be rare.
            console.warn('Bottom Line Highlighter: could not wrap range', err);
            return function () { };
        }
        var holdTimer = null;
        var safetyTimer = null;
        var onTransitionEnd = function (e) {
            if (e.propertyName === 'background-color')
                cleanup();
        };
        function cleanup() {
            if (holdTimer !== null)
                window.clearTimeout(holdTimer);
            if (safetyTimer !== null)
                window.clearTimeout(safetyTimer);
            mark.removeEventListener('transitionend', onTransitionEnd);
            var parent = mark.parentNode;
            if (parent) {
                while (mark.firstChild)
                    parent.insertBefore(mark.firstChild, mark);
                parent.removeChild(mark);
                parent.normalize();
            }
            activeTeardown = null;
        }
        if (!animate) {
            safetyTimer = window.setTimeout(cleanup, HOLD_DURATION_MS + FADE_DURATION_MS);
            return cleanup;
        }
        mark.addEventListener('transitionend', onTransitionEnd);
        holdTimer = window.setTimeout(function () {
            mark.style.transitionDuration = "".concat(FADE_DURATION_MS, "ms");
            mark.style.backgroundColor = highlightColor(0);
        }, HOLD_DURATION_MS);
        // Safety net in case transitionend never fires (e.g. the page's own
        // script strips our inline styles mid-animation).
        safetyTimer = window.setTimeout(cleanup, HOLD_DURATION_MS + FADE_DURATION_MS + 300);
        return cleanup;
    }
    function highlightRange(range) {
        ensureHighlightStyle();
        // Cancel/clean up whatever highlight is currently fading, if any.
        activeTeardown === null || activeTeardown === void 0 ? void 0 : activeTeardown();
        activeTeardown = null;
        var animate = !prefersReducedMotion();
        activeTeardown = supportsCustomHighlightAPI() ?
            highlightWithCustomHighlightAPI(range, animate) :
            highlightWithDomFallback(range, animate);
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
