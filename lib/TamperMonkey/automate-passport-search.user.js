"use strict";
// ==UserScript==
// @name         Automate Passport Search
// @version      2025-12-28_21-44
// @description  Automate filling in of Passport Search fields
// @author       John Costanzo
// @match        https://passportstatus.state.gov/Search
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/automate-passport-search.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/automate-passport-search.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
// // Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTANT! Make sure the above line is commented out: // // Object.defineProperty(exports, "__esModule", { value: true });
(function () {
    'use strict';
    function autoFillIn() {
        var lastNameField = document.getElementById("LastName");
        var dateOfBirth = document.getElementById("DateOfBirth");
        var last4SSN = document.getElementById("Last4SSN");
        var captureCode = document.getElementById("CaptchaCode");
        if (lastNameField)
            lastNameField.value = "Costanzo";
        if (dateOfBirth)
            dateOfBirth.value = "08/23/1961";
        if (last4SSN)
            last4SSN.value = "1768";
        if (captureCode)
            captureCode.focus();
    }
    autoFillIn();
})();
