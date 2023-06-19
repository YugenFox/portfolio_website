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
console.log(first);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdC9Db250YWN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJZT1VSX1NFUlZJQ0VfSUQiLCJwcm9jZXNzIiwiZW52IiwiWU9VUl9URU1QTEFURV9JRCIsIllPVVJfUFVCTElDX0tFWSIsImNvbnNvbGUiLCJsb2ciLCJmaXJzdCIsIkNvbnRhY3QiLCJmb3JtIiwidXNlUmVmIiwic2VuZEVtYWlsIiwiZSIsImVycm9yIiwicHJldmVudERlZmF1bHQiLCJlbWFpbGpzIiwiY3VycmVudCIsInRoZW4iLCJyZXN1bHQiLCJ0ZXh0IiwidGFyZ2V0IiwicmVzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBVUE7O0FBQ0FBLDZFQUFBLEcsQ0FBNEI7OztBQUM1QjtDQUN3QztBQUN4QztBQUNBOztBQUdBLElBQU1DLGVBQWUsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLGVBQXBDO0FBQ0EsSUFBTUcsZ0JBQWdCLEdBQUdGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFBckMsQyxDQUNBOztBQUNBLElBQU1DLGVBQWUsR0FBR0gsT0FBTyxDQUFDQyxHQUFSLENBQVlFLGVBQXBDO0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaOztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsSUFBSSxHQUFHQyw2Q0FBTSxFQUFuQjtBQUNBTCxTQUFPLENBQUNDLEdBQVIsQ0FBWUcsSUFBWjs7QUFFQSxNQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxDQUFELEVBQU87QUFDdkJQLFdBQU8sQ0FBQ1EsS0FBUixDQUFjLFlBQWQ7QUFDQVIsV0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQU0sS0FBQyxDQUFDRSxjQUFGO0FBRUFDLGtFQUFBLENBRUlmLGVBRkosRUFHSUcsZ0JBSEosRUFJSU0sSUFBSSxDQUFDTyxPQUpULEVBS0laLGVBTEosRUFPR2EsSUFQSCxDQVFJLFVBQUNDLE1BQUQsRUFBWTtBQUNWYixhQUFPLENBQUNDLEdBQVIsQ0FBWVksTUFBTSxDQUFDQyxJQUFuQjtBQUNBZCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FNLE9BQUMsQ0FBQ1EsTUFBRixDQUFTQyxLQUFUO0FBQ0QsS0FaTCxFQWFJLFVBQUNSLEtBQUQsRUFBVztBQUNUUixhQUFPLENBQUNDLEdBQVIsQ0FBWU8sS0FBSyxDQUFDTSxJQUFsQjtBQUNELEtBZkw7QUFpQkQsR0F0QkQ7O0FBd0JBLHNCQUNFLDhEQUFDLDREQUFEO0FBQWtCLE1BQUUsRUFBQyxTQUFyQjtBQUFBLDRCQUNFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUUsOERBQUMseURBQUQ7QUFBZSxTQUFHLEVBQUVWLElBQXBCO0FBQTBCLGNBQVEsRUFBRUUsU0FBcEM7QUFBQSw4QkFDRSw4REFBQyxpREFBRDtBQUFPLG1CQUFXLEVBQUMsTUFBbkI7QUFBMEIsWUFBSSxFQUFDLE1BQS9CO0FBQXNDLFlBQUksRUFBQyxXQUEzQztBQUF1RCxnQkFBUTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxpREFBRDtBQUNFLG1CQUFXLEVBQUMsYUFEZDtBQUVFLFlBQUksRUFBQyxPQUZQO0FBR0UsWUFBSSxFQUFDLFlBSFA7QUFJRSxnQkFBUTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQVFFLDhEQUFDLG9EQUFEO0FBQ0UsbUJBQVcsRUFBQyxjQURkO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxZQUFJLEVBQUM7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsZUFtQkUsOERBQUMsd0RBQUQ7QUFBYyxZQUFJLEVBQUMsUUFBbkI7QUFBNEIsYUFBSyxFQUFDLE1BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBMUREOztHQUFNSCxPOztLQUFBQSxPO0FBNEROLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM2Yjc3Yjk5ZWJmNGNmMjk5MmI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIFNlY3Rpb24sXHJcbiAgU2VjdGlvbkRpdmlkZXIsXHJcbiAgU2VjdGlvblRpdGxlLFxyXG4gIFNlY3Rpb25TdWJUZXh0LFxyXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIENvbnRhY3RDb250YWluZXIsXHJcbiAgQ29udGFjdEJhcixcclxuICBDb250YWN0U3VidGV4dCxcclxuICBGb3JtQ29udGFpbmVyLFxyXG4gIElucHV0LFxyXG4gIFRleHRBcmVhLFxyXG4gIFN1Ym1pdEJ1dHRvbixcclxufSBmcm9tIFwiLi9Db250YWN0U3R5bGVzXCI7XHJcblxyXG4vKiBCZWxvdyBpcyBmb3IgZm9ybSB0byB3b3JrICovXHJcbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7IC8vZm9yIGxvY2FsIG9yIE5ldGxpZnkgZW52IGZpbGUgdG8gc2V0IHZhcnMgd2UgbmVlZFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBlbWFpbGpzIGZyb20gXCJAZW1haWxqcy9icm93c2VyXCI7IC8vIG5wbSBpIEBlbWFpbGpzL2Jyb3dzZXJcclxuLy8gbmVlZCB0byBpbXBvcnQgZnJvbSAuZW52LmxvY2FsXHJcbi8vICMgRm9yIGVtYWlsanMgZW1haWwgZm9ybSBpbiBDb250YWN0XHJcblxyXG5cclxuY29uc3QgWU9VUl9TRVJWSUNFX0lEID0gcHJvY2Vzcy5lbnYuWU9VUl9TRVJWSUNFX0lEO1xyXG5jb25zdCBZT1VSX1RFTVBMQVRFX0lEID0gcHJvY2Vzcy5lbnYuWU9VUl9URU1QTEFURV9JRDtcclxuLy8gI0FjY291bnQ+QVBJIEtleXMtUHVibGljIGtleVxyXG5jb25zdCBZT1VSX1BVQkxJQ19LRVkgPSBwcm9jZXNzLmVudi5ZT1VSX1BVQkxJQ19LRVk7XHJcbmNvbnNvbGUubG9nKGZpcnN0KVxyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICBjb25zdCBmb3JtID0gdXNlUmVmKCk7XHJcbiAgY29uc29sZS5sb2coZm9ybSlcclxuXHJcbiAgY29uc3Qgc2VuZEVtYWlsID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJ0ZXN0IGVycm9yXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJzZW5kIGVtYWlsIGNsaWNrZWRcIik7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgZW1haWxqc1xyXG4gICAgICAuc2VuZEZvcm0oXHJcbiAgICAgICAgWU9VUl9TRVJWSUNFX0lELFxyXG4gICAgICAgIFlPVVJfVEVNUExBVEVfSUQsXHJcbiAgICAgICAgZm9ybS5jdXJyZW50LFxyXG4gICAgICAgIFlPVVJfUFVCTElDX0tFWVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZSBzZW50XCIpO1xyXG4gICAgICAgICAgZS50YXJnZXQucmVzZXQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFjdENvbnRhaW5lciBpZD1cImNvbnRhY3RcIj5cclxuICAgICAgPFNlY3Rpb25UaXRsZT5DT05UQUNUPC9TZWN0aW9uVGl0bGU+XHJcbiAgICAgIDxDb250YWN0QmFyIC8+XHJcbiAgICAgIDxDb250YWN0U3VidGV4dD5IYXZlIGEgcXVlc3Rpb24gb3Igd2FudCB0byB3b3JrIHRvZ2V0aGVyPzwvQ29udGFjdFN1YnRleHQ+XHJcbiAgICAgIDxGb3JtQ29udGFpbmVyIHJlZj17Zm9ybX0gb25TdWJtaXQ9e3NlbmRFbWFpbH0+XHJcbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJfbmFtZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBuYW1lPVwidXNlcl9lbWFpbFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgTWVzc2FnZVwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgPjwvVGV4dEFyZWE+XHJcbiAgICAgICAgey8qIDxkaXYgaWQ9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBZb3VyIG1lc3NhZ2Ugd2FzIHNlbnQgc3VjY2Vzc2Z1bGx5LiBUaGFua3MhXHJcbiAgICAgICAgICAgIDxzcGFuIGlkPVwiY2xvc2VcIiBjbGFzc05hbWU9XCJtZGkgbWRpLWNsb3NlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDxTdWJtaXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VuZFwiPlxyXG4gICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9TdWJtaXRCdXR0b24+XHJcbiAgICAgIDwvRm9ybUNvbnRhaW5lcj5cclxuICAgIDwvQ29udGFjdENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==