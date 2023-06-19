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
console.log(YOUR_TEMPLATE_ID, "form template ID test");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdC9Db250YWN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJZT1VSX1NFUlZJQ0VfSUQiLCJwcm9jZXNzIiwiZW52IiwiWU9VUl9URU1QTEFURV9JRCIsIllPVVJfUFVCTElDX0tFWSIsImNvbnNvbGUiLCJsb2ciLCJDb250YWN0IiwiZm9ybSIsInVzZVJlZiIsInNlbmRFbWFpbCIsImUiLCJlcnJvciIsInByZXZlbnREZWZhdWx0IiwiZW1haWxqcyIsImN1cnJlbnQiLCJ0aGVuIiwicmVzdWx0IiwidGV4dCIsInRhcmdldCIsInJlc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQVVBOztBQUNBQSw2RUFBQSxHLENBQTRCOzs7QUFDNUI7Q0FDd0M7QUFDeEM7QUFDQTs7QUFHQSxJQUFNQyxlQUFlLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixlQUFwQztBQUNBLElBQU1HLGdCQUFnQixHQUFHRixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBQXJDLEMsQ0FDQTs7QUFDQSxJQUFNQyxlQUFlLEdBQUdILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxlQUFwQztBQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsZ0JBQVosRUFBOEIsdUJBQTlCOztBQUVBLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsSUFBSSxHQUFHQyw2Q0FBTSxFQUFuQjtBQUNBSixTQUFPLENBQUNDLEdBQVIsQ0FBWUUsSUFBWjs7QUFFQSxNQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxDQUFELEVBQU87QUFDdkJOLFdBQU8sQ0FBQ08sS0FBUixDQUFjLFlBQWQ7QUFDQVAsV0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQUssS0FBQyxDQUFDRSxjQUFGO0FBRUFDLGtFQUFBLENBRUlkLGVBRkosRUFHSUcsZ0JBSEosRUFJSUssSUFBSSxDQUFDTyxPQUpULEVBS0lYLGVBTEosRUFPR1ksSUFQSCxDQVFJLFVBQUNDLE1BQUQsRUFBWTtBQUNWWixhQUFPLENBQUNDLEdBQVIsQ0FBWVcsTUFBTSxDQUFDQyxJQUFuQjtBQUNBYixhQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FLLE9BQUMsQ0FBQ1EsTUFBRixDQUFTQyxLQUFUO0FBQ0QsS0FaTCxFQWFJLFVBQUNSLEtBQUQsRUFBVztBQUNUUCxhQUFPLENBQUNDLEdBQVIsQ0FBWU0sS0FBSyxDQUFDTSxJQUFsQjtBQUNELEtBZkw7QUFpQkQsR0F0QkQ7O0FBd0JBLHNCQUNFLDhEQUFDLDREQUFEO0FBQWtCLE1BQUUsRUFBQyxTQUFyQjtBQUFBLDRCQUNFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUUsOERBQUMseURBQUQ7QUFBZSxTQUFHLEVBQUVWLElBQXBCO0FBQTBCLGNBQVEsRUFBRUUsU0FBcEM7QUFBQSw4QkFDRSw4REFBQyxpREFBRDtBQUFPLG1CQUFXLEVBQUMsTUFBbkI7QUFBMEIsWUFBSSxFQUFDLE1BQS9CO0FBQXNDLFlBQUksRUFBQyxXQUEzQztBQUF1RCxnQkFBUTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxpREFBRDtBQUNFLG1CQUFXLEVBQUMsYUFEZDtBQUVFLFlBQUksRUFBQyxPQUZQO0FBR0UsWUFBSSxFQUFDLFlBSFA7QUFJRSxnQkFBUTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQVFFLDhEQUFDLG9EQUFEO0FBQ0UsbUJBQVcsRUFBQyxjQURkO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxZQUFJLEVBQUM7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsZUFtQkUsOERBQUMsd0RBQUQ7QUFBYyxZQUFJLEVBQUMsUUFBbkI7QUFBNEIsYUFBSyxFQUFDLE1BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBMUREOztHQUFNSCxPOztLQUFBQSxPO0FBNEROLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY3NTE3YWY2OWE3YWRhNGNhMzM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIFNlY3Rpb24sXHJcbiAgU2VjdGlvbkRpdmlkZXIsXHJcbiAgU2VjdGlvblRpdGxlLFxyXG4gIFNlY3Rpb25TdWJUZXh0LFxyXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIENvbnRhY3RDb250YWluZXIsXHJcbiAgQ29udGFjdEJhcixcclxuICBDb250YWN0U3VidGV4dCxcclxuICBGb3JtQ29udGFpbmVyLFxyXG4gIElucHV0LFxyXG4gIFRleHRBcmVhLFxyXG4gIFN1Ym1pdEJ1dHRvbixcclxufSBmcm9tIFwiLi9Db250YWN0U3R5bGVzXCI7XHJcblxyXG4vKiBCZWxvdyBpcyBmb3IgZm9ybSB0byB3b3JrICovXHJcbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7IC8vZm9yIGxvY2FsIG9yIE5ldGxpZnkgZW52IGZpbGUgdG8gc2V0IHZhcnMgd2UgbmVlZFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBlbWFpbGpzIGZyb20gXCJAZW1haWxqcy9icm93c2VyXCI7IC8vIG5wbSBpIEBlbWFpbGpzL2Jyb3dzZXJcclxuLy8gbmVlZCB0byBpbXBvcnQgZnJvbSAuZW52LmxvY2FsXHJcbi8vICMgRm9yIGVtYWlsanMgZW1haWwgZm9ybSBpbiBDb250YWN0XHJcblxyXG5cclxuY29uc3QgWU9VUl9TRVJWSUNFX0lEID0gcHJvY2Vzcy5lbnYuWU9VUl9TRVJWSUNFX0lEO1xyXG5jb25zdCBZT1VSX1RFTVBMQVRFX0lEID0gcHJvY2Vzcy5lbnYuWU9VUl9URU1QTEFURV9JRDtcclxuLy8gI0FjY291bnQ+QVBJIEtleXMtUHVibGljIGtleVxyXG5jb25zdCBZT1VSX1BVQkxJQ19LRVkgPSBwcm9jZXNzLmVudi5ZT1VSX1BVQkxJQ19LRVk7XHJcbmNvbnNvbGUubG9nKFlPVVJfVEVNUExBVEVfSUQsIFwiZm9ybSB0ZW1wbGF0ZSBJRCB0ZXN0XCIpXHJcblxyXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSB1c2VSZWYoKTtcclxuICBjb25zb2xlLmxvZyhmb3JtKVxyXG5cclxuICBjb25zdCBzZW5kRW1haWwgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5lcnJvcihcInRlc3QgZXJyb3JcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcInNlbmQgZW1haWwgY2xpY2tlZFwiKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBlbWFpbGpzXHJcbiAgICAgIC5zZW5kRm9ybShcclxuICAgICAgICBZT1VSX1NFUlZJQ0VfSUQsXHJcbiAgICAgICAgWU9VUl9URU1QTEFURV9JRCxcclxuICAgICAgICBmb3JtLmN1cnJlbnQsXHJcbiAgICAgICAgWU9VUl9QVUJMSUNfS0VZXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oXHJcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnRleHQpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJtZXNzYWdlIHNlbnRcIik7XHJcbiAgICAgICAgICBlLnRhcmdldC5yZXNldCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWN0Q29udGFpbmVyIGlkPVwiY29udGFjdFwiPlxyXG4gICAgICA8U2VjdGlvblRpdGxlPkNPTlRBQ1Q8L1NlY3Rpb25UaXRsZT5cclxuICAgICAgPENvbnRhY3RCYXIgLz5cclxuICAgICAgPENvbnRhY3RTdWJ0ZXh0PkhhdmUgYSBxdWVzdGlvbiBvciB3YW50IHRvIHdvcmsgdG9nZXRoZXI/PC9Db250YWN0U3VidGV4dD5cclxuICAgICAgPEZvcm1Db250YWluZXIgcmVmPXtmb3JtfSBvblN1Ym1pdD17c2VuZEVtYWlsfT5cclxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcl9uYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIG5hbWU9XCJ1c2VyX2VtYWlsXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBNZXNzYWdlXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICA+PC9UZXh0QXJlYT5cclxuICAgICAgICB7LyogPGRpdiBpZD1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIFlvdXIgbWVzc2FnZSB3YXMgc2VudCBzdWNjZXNzZnVsbHkuIFRoYW5rcyFcclxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJjbG9zZVwiIGNsYXNzTmFtZT1cIm1kaSBtZGktY2xvc2VcIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPFN1Ym1pdEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCI+XHJcbiAgICAgICAgICBTdWJtaXRcclxuICAgICAgICA8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgPC9Gb3JtQ29udGFpbmVyPlxyXG4gICAgPC9Db250YWN0Q29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9