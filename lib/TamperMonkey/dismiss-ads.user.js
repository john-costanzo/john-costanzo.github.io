// ==UserScript==
// @name         Dismiss ads
// @version      2026-01-10_10-26
// @description  Automatically dismiss the ads from various sites, based on a <button> with specified aria-labels
// @author       John Costanzo
// @match        https://quora.com/*
// @match        https://www.quora.com/*
// @match        https://www.nytimes.com/*
// @match        https://assets.mailerlite.com/*
// @match        https://*.youtube.com/*
// @match        https://*.substack.com/*
// @match        https://www.millsriverbrewingco.com/*
// @match        https://highlandbrewing.com/*
// @match        https://www.signupgenius.com/*
// @match        https://www.snopes.com/*
// @match        https://www.wunderground.com/*
// @match        https://www.perplexity.ai/*
// @match        https://medium.com/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/dismiss-ads.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/dismiss-ads.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
// FYI: https://assets.mailerlite.com/* is the iFrame that pops up in pages in the https://www.dailycartoonist.com site
(function () {
    'use strict';
    var scriptName = "dismiss-ads";
    var ariaLabelsControllingAdvertisements = [
        "Dismiss",
        "Button to subscription page",
        "Button to collapse the message",
        "Button to expand the message",
        "Button to close this message",
        "Dismiss Become a VIP Prompt",
        "Close",
        // "Close dialog"
    ];
    var textValuesControllingAdvertisements = [
        "Turn Off Adblocker",
        "No thanks",
        "Skip",
    ];
    // MutationObserver to handle dynamically loaded content
    var observer = new MutationObserver(clickCloseButton);
    var maxClicks = 10;
    var Severities;
    (function (Severities) {
        Severities[Severities["debug"] = 0] = "debug";
        Severities[Severities["log"] = 1] = "log";
        Severities[Severities["warn"] = 2] = "warn";
        Severities[Severities["error"] = 3] = "error";
    })(Severities || (Severities = {}));
    ;
    function message(msg, severity) {
        if (severity === void 0) { severity = Severities.debug; }
        var debug = true;
        switch (severity) {
            case Severities.debug:
                if (debug) {
                    console.log(scriptName + ": " + msg);
                }
                break;
            case Severities.log:
                console.log(scriptName + ": " + msg);
                break;
            case Severities.warn:
                console.warn(scriptName + ": " + msg);
                break;
            case Severities.error:
                console.error(scriptName + ": " + msg);
                break;
            default:
                console.error(scriptName + ": No such logging level (" + severity + ")");
        }
    }
    function getOwnText(element) {
        var ownText = '';
        element.childNodes.forEach(function (node) {
            if (node.nodeType === Node.TEXT_NODE) {
                ownText += node.textContent;
            }
        });
        return ownText.trim();
    }
    // Function to check if the banner has loaded. If so, return it.
    function isBannerLoaded() {
        function hideAdDivs() {
            var adImages = document.querySelectorAll('img[alt="Ad"]');
            adImages.forEach(function (img) {
                var parentDiv = img.closest('div');
                if (parentDiv) {
                    parentDiv.style.display = 'none';
                    message("hiding ad for parentDiv" + parentDiv);
                }
            });
        }
        function checkElements(elements) {
            var returnElement = null;
            var _loop_1 = function (element) {
                var ariaLabel = element.getAttribute("aria-label");
                var label = element.getAttribute("label");
                var textContent = getOwnText(element);
                var ariaLabelLowerCase = ariaLabel ? ariaLabel.toLowerCase() : "";
                var labelLowerCase = label ? label.toLowerCase() : "";
                var textContentLowerCase = textContent ? textContent.toLowerCase() : "";
                if (textContentLowerCase) {
                    textValuesControllingAdvertisements.forEach(function (adLabel) {
                        if (textContentLowerCase === adLabel.toLowerCase()) {
                            message('ad element found: ' + element + ' for value "' + textContent + '"');
                            returnElement = element;
                        }
                    });
                }
                if (ariaLabel || label) {
                    ariaLabelsControllingAdvertisements.forEach(function (adLabel) {
                        var adLabelLowerCase = adLabel.toLowerCase();
                        if (ariaLabelLowerCase === adLabelLowerCase || labelLowerCase === adLabelLowerCase) {
                            // Found the element with the correct aria-label
                            if (label) {
                                message('returning element ' + element + ' for label ' + label);
                            }
                            if (ariaLabel) {
                                message('returning element ' + element + ' for ariaLabel "' + ariaLabel + '"');
                            }
                            returnElement = element;
                        }
                    });
                }
            };
            // Loop through the elements and check the aria-label and label attributes as well as the textContent
            for (var _i = 0, _a = (Array.from(elements)); _i < _a.length; _i++) {
                var element = _a[_i];
                _loop_1(element);
            }
            if (returnElement) {
                console.log("checkElements: returning button \"".concat(getOwnText(returnElement), "\""));
            }
            else {
                console.log("checkElements: returning button \"<null>\"");
            }
            return (returnElement);
        }
        message("isBannerLoaded: checking...");
        var returnButton = null;
        // Get SignUpGenius close button
        // TODO: make this more robust (somehow?)
        var closeButton = document.querySelector("span._1nqoz2x");
        if (closeButton) {
            message("found span._1nqoz2x");
            message("Clicking " + closeButton);
            closeButton.click();
        }
        hideAdDivs();
        // Get all button elements on the page
        var buttons = document.querySelectorAll("button");
        var anchors = document.querySelectorAll("a");
        return (checkElements(buttons) || checkElements(anchors));
    }
    function clickCloseButton() {
        message("In clickCloseButton...");
        if (maxClicks <= 0) {
            message("aborting clickCloseButton()");
            observer.disconnect();
            return;
        }
        var closeButton = isBannerLoaded();
        if (closeButton) {
            message("Clicking on button with textContent \"".concat(getOwnText(closeButton), "\""));
            maxClicks--;
            closeButton.click();
        }
    }
    // Check if the ad is loaded, and if not, periodically recheck.
    function checkAndRun(n) {
        var banner = isBannerLoaded();
        if (banner) {
            message("checkAndRun: clicking on button \"".concat(getOwnText(banner), "\""));
            banner.click();
        }
        else {
            if (n >= 0) {
                setTimeout(function () { return checkAndRun(--n); }, 1000); // Recheck every 1 second
            }
        }
    }
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    checkAndRun(60);
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// jinx-local-words: "https lightblue lightyellow nh oq rgba"
// End:
