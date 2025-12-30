var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// ==UserScript==
// @name         Acknowledge consent for the Trusted Traveler Program
// @version      2025-12-29_19-00
// @description  Acknowledge consent for the Trusted Traveler Program. But refuse to run more than once within 5 seconds.
// @author       John Costanzo
// @match        https://ttp.cbp.dhs.gov/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/acknowledge-consent-for-trusted-traveler-program.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/acknowledge-consent-for-trusted-traveler-program.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==
(function () {
    'use strict';
    var scriptName = "acknowledge-consent-for-trusted-traveler-program";
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
        msg = new Date().toISOString() + ": " + msg;
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
    function acknowledgePage() {
        message("acknowledgePage: looking for loginButtons");
        var loginButtons = document.querySelectorAll('input.login-button');
        if (loginButtons)
            loginButtons.forEach(function (btn) { return btn.click(); });
        message("looking for consentAndContinueButtons");
        var consentAndContinueButtons = document.querySelectorAll('button.w-100');
        if (consentAndContinueButtons)
            consentAndContinueButtons.forEach(function (btn) { return btn.click(); });
    }
    function fillInForm() {
        return __awaiter(this, void 0, void 0, function () {
            var THROTTLE_TIME, lastRunKey, lastRun, now, timeSinceLast, observer_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        THROTTLE_TIME = 5000;
                        lastRunKey = 'lastRun-' + scriptName;
                        return [4 /*yield*/, GM.getValue(lastRunKey, 0)];
                    case 1:
                        lastRun = _a.sent();
                        now = Date.now();
                        timeSinceLast = now - lastRun;
                        if (!(timeSinceLast >= THROTTLE_TIME)) return [3 /*break*/, 3];
                        observer_1 = new MutationObserver(function () {
                            acknowledgePage();
                            observer_1.disconnect(); // Cancels all monitoring
                        });
                        return [4 /*yield*/, GM_setValue(lastRunKey, now)];
                    case 2:
                        _a.sent();
                        acknowledgePage();
                        message("adding an observer...");
                        observer_1.observe(document.body, {
                            childList: true,
                            subtree: true
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    message("about to fillInForm...");
    fillInForm();
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// End:
