!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.OktaPluginA11y=t():e.OktaPluginA11y=t()}(self,(function(){return function(){"use strict";var e={};return function(){var t=e;function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;t.init=function(e){var t,n=null===(t=e.options)||void 0===t?void 0:t.brandName;e.on("afterRender",(function(e){var t,o=null===(t=document.querySelector(".okta-form-title"))||void 0===t?void 0:t.textContent;function i(e,t){var r=document.querySelectorAll(e)||[],n=Object.keys(t)||[];r.forEach((function(e){n.forEach((function(r){e.setAttribute(r,t[r])}))}))}o&&(document.title=n?"".concat(n," - ").concat(o):o),document.querySelectorAll(".authenticator-list").forEach((function(e){e.querySelectorAll(".authenticator-row").forEach((function(e){var t;null===(t=e.querySelector(".authenticator-icon"))||void 0===t||t.setAttribute("aria-hidden","")}))})),i('input[name="identifier"]',{autocomplete:"username"}),i('input[name="userProfile.email"]',{autocomplete:"email"}),i('input[name="userProfile.lastName"]',{autocomplete:"family-name"}),i('input[name="userProfile.firstName"]',{autocomplete:"given-name"}),document.querySelectorAll(".password-toggle").forEach((function(e){var t=e.parentNode;if(t){var n=null==t?void 0:t.querySelector(".password-with-toggle");if(n){r(e.children).forEach((function(t){return e.removeChild(t)}));var o=document.createElement("button"),i=function(){var e="password"!==n.type;o.type="button",e?(o.ariaLabel="Hide password",o.className="eyeicon visibility-off-16"):(o.ariaLabel="Show password",o.className="eyeicon visibility-16")};i(),o.onclick=function(){n.type="password"===n.type?"text":"password",i()},e.appendChild(o)}}}));if([{controller:"mfa-verify-passcode",formName:"challenge-authenticator",authenticatorKey:"phone_number",methodType:"sms"},{controller:"enroll-email",formName:"enroll-authenticator",authenticatorKey:"okta_email",methodType:"email"},{controller:"mfa-verify",formName:"challenge-poll",authenticatorKey:"okta_verify",methodType:"push"},{controller:"forgot-password",formName:"identify-recovery"}].some((function(t){return n=t,o=e,r(Object.keys(n)).every((function(e){return n[e]===o[e]}));var n,o})))var a=0,l=setInterval((function(){document.querySelector(".infobox-warning")&&(document.querySelectorAll(".infobox-warning").forEach((function(e){if(0===a)e.setAttribute("aria-live","assertive");else{var t=e.parentElement;null==t||t.removeChild(e),e.setAttribute("aria-live","assertive"),null==t||t.appendChild(e)}})),clearInterval(l)),a++}),1500),u=setInterval((function(){document.querySelector(".resend-link")&&(document.querySelectorAll(".resend-link").forEach((function(e){return e.setAttribute("href","javascript:void(0);")})),clearInterval(u))}),1500)}))}}(),e}()}));
//# sourceMappingURL=okta-plugin-a11y.js.map