"use strict";
// ==UserScript==
// @name         Automate Passport Privacy Acknowledgment
// @version      2025-12-28_21-44
// @description  Automate filling in of Passport privacy acknowledgment
// @author       John Costanzo
// @match        https://passportstatus.state.gov
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/automate-passport-privacy-acknowledgment.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/automate-passport-privacy-acknowledgment.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
// // Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTANT! Make sure the above line is commented out: // // Object.defineProperty(exports, "__esModule", { value: true });
(function () {
    'use strict';
    function autoAcknowledgePrivacy() {
        var iHaveReadPrivacy = "FraudAndAbuseCheckBox";
        console.log("autoAcknowledgePrivacy: looking for " + iHaveReadPrivacy);
        var ackButton = document.getElementById(iHaveReadPrivacy);
        if (ackButton) {
            console.log("autoAcknowledgePrivacy: found " + ackButton);
            ackButton.click(); // Acknowledge!
            Array.from(document.getElementsByTagName("button")).forEach(function (el) {
                if (el.innerHTML === "Submit") {
                    el.click();
                }
            });
        }
        else {
            setTimeout(autoAcknowledgePrivacy, 1000); // Recheck every 1 second
        }
    }
    autoAcknowledgePrivacy();
})();
