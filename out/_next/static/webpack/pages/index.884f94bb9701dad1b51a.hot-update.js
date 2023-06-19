self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Contact/Contact.js":
/*!*******************************************!*\
  !*** ./src/components/Contact/Contact.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _ContactStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactStyles */ "./src/components/Contact/ContactStyles.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emailjs/browser */ "./node_modules/@emailjs/browser/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


var _jsxFileName = "C:\\Users\\Kaleb\\Documents\\Visual Studio Code - Projects\\Learning Projects\\React\\Portfolio Projects\\portfolio_website-STARTER\\src\\components\\Contact\\Contact.js",
    _this = undefined,
    _s = $RefreshSig$();



/* Below is for form to work */

__webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js").config(); //for local or Netlify env file to set vars we need



 // npm i @emailjs/browser
// need to import from .env.local
// # For emailjs email form in Contact

var YOUR_SERVICE_ID = process.env.YOUR_SERVICE_ID;
var YOUR_TEMPLATE_ID = process.env.YOUR_TEMPLATE_ID; // #Account>API Keys-Public key

var YOUR_PUBLIC_KEY = process.env.YOUR_PUBLIC_KEY;
console.log(YOUR_TEMPLATE_ID);

var Contact = function Contact() {
  _s();

  var form = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  console.log(form);

  var sendEmail = function sendEmail(e) {
    console.error("test error");
    console.log("send email clicked");
    e.preventDefault();
    _emailjs_browser__WEBPACK_IMPORTED_MODULE_4__.default.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY).then(function (result) {
      console.log(result.text);
      console.log("message sent");
      e.target.reset();
    }, function (error) {
      console.log(error.text);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContactStyles__WEBPACK_IMPORTED_MODULE_2__.ContactContainer, {
    id: "contact",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.SectionTitle, {
      children: "CONTACT"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContactStyles__WEBPACK_IMPORTED_MODULE_2__.ContactBar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContactStyles__WEBPACK_IMPORTED_MODULE_2__.ContactSubtext, {
      children: "Have a question or want to work together?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContactStyles__WEBPACK_IMPORTED_MODULE_2__.FormContainer, {
      ref: form,
      onSubmit: sendEmail,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContactStyles__WEBPACK_IMPORTED_MODULE_2__.Input, {
        placeholder: "Name",
        type: "text",
        name: "user_name",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContactStyles__WEBPACK_IMPORTED_MODULE_2__.Input, {
        placeholder: "Enter email",
        type: "email",
        name: "user_email",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContactStyles__WEBPACK_IMPORTED_MODULE_2__.TextArea, {
        placeholder: "Your Message",
        type: "text",
        name: "message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContactStyles__WEBPACK_IMPORTED_MODULE_2__.SubmitButton, {
        type: "submit",
        value: "Send",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, _this);
};

_s(Contact, "dQhLC9DEDZP9Q6oVJIWRdCVKDdw=");

_c = Contact;
/* harmony default export */ __webpack_exports__["default"] = (Contact);

var _c;

$RefreshReg$(_c, "Contact");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdC9Db250YWN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJZT1VSX1NFUlZJQ0VfSUQiLCJwcm9jZXNzIiwiZW52IiwiWU9VUl9URU1QTEFURV9JRCIsIllPVVJfUFVCTElDX0tFWSIsImNvbnNvbGUiLCJsb2ciLCJDb250YWN0IiwiZm9ybSIsInVzZVJlZiIsInNlbmRFbWFpbCIsImUiLCJlcnJvciIsInByZXZlbnREZWZhdWx0IiwiZW1haWxqcyIsImN1cnJlbnQiLCJ0aGVuIiwicmVzdWx0IiwidGV4dCIsInRhcmdldCIsInJlc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQVVBOztBQUNBQSw2RUFBQSxHLENBQTRCOzs7QUFDNUI7Q0FDd0M7QUFDeEM7QUFDQTs7QUFHQSxJQUFNQyxlQUFlLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixlQUFwQztBQUNBLElBQU1HLGdCQUFnQixHQUFHRixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBQXJDLEMsQ0FDQTs7QUFDQSxJQUFNQyxlQUFlLEdBQUdILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxlQUFwQztBQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsZ0JBQVo7O0FBRUEsSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxJQUFJLEdBQUdDLDZDQUFNLEVBQW5CO0FBQ0FKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRSxJQUFaOztBQUVBLE1BQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLENBQUQsRUFBTztBQUN2Qk4sV0FBTyxDQUFDTyxLQUFSLENBQWMsWUFBZDtBQUNBUCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBSyxLQUFDLENBQUNFLGNBQUY7QUFFQUMsa0VBQUEsQ0FFSWQsZUFGSixFQUdJRyxnQkFISixFQUlJSyxJQUFJLENBQUNPLE9BSlQsRUFLSVgsZUFMSixFQU9HWSxJQVBILENBUUksVUFBQ0MsTUFBRCxFQUFZO0FBQ1ZaLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVyxNQUFNLENBQUNDLElBQW5CO0FBQ0FiLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQUssT0FBQyxDQUFDUSxNQUFGLENBQVNDLEtBQVQ7QUFDRCxLQVpMLEVBYUksVUFBQ1IsS0FBRCxFQUFXO0FBQ1RQLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTSxLQUFLLENBQUNNLElBQWxCO0FBQ0QsS0FmTDtBQWlCRCxHQXRCRDs7QUF3QkEsc0JBQ0UsOERBQUMsNERBQUQ7QUFBa0IsTUFBRSxFQUFDLFNBQXJCO0FBQUEsNEJBQ0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRSw4REFBQyx5REFBRDtBQUFlLFNBQUcsRUFBRVYsSUFBcEI7QUFBMEIsY0FBUSxFQUFFRSxTQUFwQztBQUFBLDhCQUNFLDhEQUFDLGlEQUFEO0FBQU8sbUJBQVcsRUFBQyxNQUFuQjtBQUEwQixZQUFJLEVBQUMsTUFBL0I7QUFBc0MsWUFBSSxFQUFDLFdBQTNDO0FBQXVELGdCQUFRO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLGlEQUFEO0FBQ0UsbUJBQVcsRUFBQyxhQURkO0FBRUUsWUFBSSxFQUFDLE9BRlA7QUFHRSxZQUFJLEVBQUMsWUFIUDtBQUlFLGdCQUFRO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBUUUsOERBQUMsb0RBQUQ7QUFDRSxtQkFBVyxFQUFDLGNBRGQ7QUFFRSxZQUFJLEVBQUMsTUFGUDtBQUdFLFlBQUksRUFBQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQW1CRSw4REFBQyx3REFBRDtBQUFjLFlBQUksRUFBQyxRQUFuQjtBQUE0QixhQUFLLEVBQUMsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4QkQsQ0ExREQ7O0dBQU1ILE87O0tBQUFBLE87QUE0RE4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODg0Zjk0YmI5NzAxZGFkMWI1MWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgU2VjdGlvbixcclxuICBTZWN0aW9uRGl2aWRlcixcclxuICBTZWN0aW9uVGl0bGUsXHJcbiAgU2VjdGlvblN1YlRleHQsXHJcbn0gZnJvbSBcIi4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29udGFjdENvbnRhaW5lcixcclxuICBDb250YWN0QmFyLFxyXG4gIENvbnRhY3RTdWJ0ZXh0LFxyXG4gIEZvcm1Db250YWluZXIsXHJcbiAgSW5wdXQsXHJcbiAgVGV4dEFyZWEsXHJcbiAgU3VibWl0QnV0dG9uLFxyXG59IGZyb20gXCIuL0NvbnRhY3RTdHlsZXNcIjtcclxuXHJcbi8qIEJlbG93IGlzIGZvciBmb3JtIHRvIHdvcmsgKi9cclxucmVxdWlyZShcImRvdGVudlwiKS5jb25maWcoKTsgLy9mb3IgbG9jYWwgb3IgTmV0bGlmeSBlbnYgZmlsZSB0byBzZXQgdmFycyB3ZSBuZWVkXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGVtYWlsanMgZnJvbSBcIkBlbWFpbGpzL2Jyb3dzZXJcIjsgLy8gbnBtIGkgQGVtYWlsanMvYnJvd3NlclxyXG4vLyBuZWVkIHRvIGltcG9ydCBmcm9tIC5lbnYubG9jYWxcclxuLy8gIyBGb3IgZW1haWxqcyBlbWFpbCBmb3JtIGluIENvbnRhY3RcclxuXHJcblxyXG5jb25zdCBZT1VSX1NFUlZJQ0VfSUQgPSBwcm9jZXNzLmVudi5ZT1VSX1NFUlZJQ0VfSUQ7XHJcbmNvbnN0IFlPVVJfVEVNUExBVEVfSUQgPSBwcm9jZXNzLmVudi5ZT1VSX1RFTVBMQVRFX0lEO1xyXG4vLyAjQWNjb3VudD5BUEkgS2V5cy1QdWJsaWMga2V5XHJcbmNvbnN0IFlPVVJfUFVCTElDX0tFWSA9IHByb2Nlc3MuZW52LllPVVJfUFVCTElDX0tFWTtcclxuY29uc29sZS5sb2coWU9VUl9URU1QTEFURV9JRClcclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IHVzZVJlZigpO1xyXG4gIGNvbnNvbGUubG9nKGZvcm0pXHJcblxyXG4gIGNvbnN0IHNlbmRFbWFpbCA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwidGVzdCBlcnJvclwiKTtcclxuICAgIGNvbnNvbGUubG9nKFwic2VuZCBlbWFpbCBjbGlja2VkXCIpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGVtYWlsanNcclxuICAgICAgLnNlbmRGb3JtKFxyXG4gICAgICAgIFlPVVJfU0VSVklDRV9JRCxcclxuICAgICAgICBZT1VSX1RFTVBMQVRFX0lELFxyXG4gICAgICAgIGZvcm0uY3VycmVudCxcclxuICAgICAgICBZT1VSX1BVQkxJQ19LRVlcclxuICAgICAgKVxyXG4gICAgICAudGhlbihcclxuICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudGV4dCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2Ugc2VudFwiKTtcclxuICAgICAgICAgIGUudGFyZ2V0LnJlc2V0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhY3RDb250YWluZXIgaWQ9XCJjb250YWN0XCI+XHJcbiAgICAgIDxTZWN0aW9uVGl0bGU+Q09OVEFDVDwvU2VjdGlvblRpdGxlPlxyXG4gICAgICA8Q29udGFjdEJhciAvPlxyXG4gICAgICA8Q29udGFjdFN1YnRleHQ+SGF2ZSBhIHF1ZXN0aW9uIG9yIHdhbnQgdG8gd29yayB0b2dldGhlcj88L0NvbnRhY3RTdWJ0ZXh0PlxyXG4gICAgICA8Rm9ybUNvbnRhaW5lciByZWY9e2Zvcm19IG9uU3VibWl0PXtzZW5kRW1haWx9PlxyXG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIk5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyX25hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgbmFtZT1cInVzZXJfZW1haWxcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIE1lc3NhZ2VcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgID48L1RleHRBcmVhPlxyXG4gICAgICAgIHsvKiA8ZGl2IGlkPVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgWW91ciBtZXNzYWdlIHdhcyBzZW50IHN1Y2Nlc3NmdWxseS4gVGhhbmtzIVxyXG4gICAgICAgICAgICA8c3BhbiBpZD1cImNsb3NlXCIgY2xhc3NOYW1lPVwibWRpIG1kaS1jbG9zZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIj5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvU3VibWl0QnV0dG9uPlxyXG4gICAgICA8L0Zvcm1Db250YWluZXI+XHJcbiAgICA8L0NvbnRhY3RDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=