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
      lineNumber: 60,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContactStyles__WEBPACK_IMPORTED_MODULE_2__.ContactBar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContactStyles__WEBPACK_IMPORTED_MODULE_2__.ContactSubtext, {
      children: "Have a question or want to work together?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContactStyles__WEBPACK_IMPORTED_MODULE_2__.Input, {
        placeholder: "Enter email",
        type: "email",
        name: "user_email",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContactStyles__WEBPACK_IMPORTED_MODULE_2__.TextArea, {
        placeholder: "Your Message",
        type: "text",
        name: "message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContactStyles__WEBPACK_IMPORTED_MODULE_2__.SubmitButton, {
        type: "submit",
        value: "Send",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdC9Db250YWN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJZT1VSX1NFUlZJQ0VfSUQiLCJwcm9jZXNzIiwiZW52IiwiWU9VUl9URU1QTEFURV9JRCIsIllPVVJfUFVCTElDX0tFWSIsIkNvbnRhY3QiLCJmb3JtIiwidXNlUmVmIiwiY29uc29sZSIsImxvZyIsInNlbmRFbWFpbCIsImUiLCJlcnJvciIsInByZXZlbnREZWZhdWx0IiwiZW1haWxqcyIsImN1cnJlbnQiLCJ0aGVuIiwicmVzdWx0IiwidGV4dCIsInRhcmdldCIsInJlc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQVVBOztBQUNBQSw2RUFBQSxHLENBQTRCOzs7QUFDNUI7Q0FDd0M7QUFDeEM7QUFDQTs7QUFHQSxJQUFNQyxlQUFlLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixlQUFwQztBQUNBLElBQU1HLGdCQUFnQixHQUFHRixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBQXJDLEMsQ0FDQTs7QUFDQSxJQUFNQyxlQUFlLEdBQUdILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxlQUFwQzs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLElBQUksR0FBR0MsNkNBQU0sRUFBbkI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7O0FBRUEsTUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCSCxXQUFPLENBQUNJLEtBQVIsQ0FBYyxZQUFkO0FBQ0FKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0FFLEtBQUMsQ0FBQ0UsY0FBRjtBQUVBQyxrRUFBQSxDQUVJZCxlQUZKLEVBR0lHLGdCQUhKLEVBSUlHLElBQUksQ0FBQ1MsT0FKVCxFQUtJWCxlQUxKLEVBT0dZLElBUEgsQ0FRSSxVQUFDQyxNQUFELEVBQVk7QUFDVlQsYUFBTyxDQUFDQyxHQUFSLENBQVlRLE1BQU0sQ0FBQ0MsSUFBbkI7QUFDQVYsYUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBRSxPQUFDLENBQUNRLE1BQUYsQ0FBU0MsS0FBVDtBQUNELEtBWkwsRUFhSSxVQUFDUixLQUFELEVBQVc7QUFDVEosYUFBTyxDQUFDQyxHQUFSLENBQVlHLEtBQUssQ0FBQ00sSUFBbEI7QUFDRCxLQWZMO0FBaUJELEdBdEJEOztBQXdCQSxzQkFDRSw4REFBQyw0REFBRDtBQUFrQixNQUFFLEVBQUMsU0FBckI7QUFBQSw0QkFDRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFLDhEQUFDLHlEQUFEO0FBQWUsU0FBRyxFQUFFWixJQUFwQjtBQUEwQixjQUFRLEVBQUVJLFNBQXBDO0FBQUEsOEJBQ0UsOERBQUMsaURBQUQ7QUFBTyxtQkFBVyxFQUFDLE1BQW5CO0FBQTBCLFlBQUksRUFBQyxNQUEvQjtBQUFzQyxZQUFJLEVBQUMsV0FBM0M7QUFBdUQsZ0JBQVE7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsaURBQUQ7QUFDRSxtQkFBVyxFQUFDLGFBRGQ7QUFFRSxZQUFJLEVBQUMsT0FGUDtBQUdFLFlBQUksRUFBQyxZQUhQO0FBSUUsZ0JBQVE7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFRRSw4REFBQyxvREFBRDtBQUNFLG1CQUFXLEVBQUMsY0FEZDtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsWUFBSSxFQUFDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLGVBbUJFLDhEQUFDLHdEQUFEO0FBQWMsWUFBSSxFQUFDLFFBQW5CO0FBQTRCLGFBQUssRUFBQyxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThCRCxDQTFERDs7R0FBTUwsTzs7S0FBQUEsTztBQTRETiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MDdjNmYzMDgxZGQ0YzA5NWM5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBTZWN0aW9uLFxyXG4gIFNlY3Rpb25EaXZpZGVyLFxyXG4gIFNlY3Rpb25UaXRsZSxcclxuICBTZWN0aW9uU3ViVGV4dCxcclxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBDb250YWN0Q29udGFpbmVyLFxyXG4gIENvbnRhY3RCYXIsXHJcbiAgQ29udGFjdFN1YnRleHQsXHJcbiAgRm9ybUNvbnRhaW5lcixcclxuICBJbnB1dCxcclxuICBUZXh0QXJlYSxcclxuICBTdWJtaXRCdXR0b24sXHJcbn0gZnJvbSBcIi4vQ29udGFjdFN0eWxlc1wiO1xyXG5cclxuLyogQmVsb3cgaXMgZm9yIGZvcm0gdG8gd29yayAqL1xyXG5yZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpOyAvL2ZvciBsb2NhbCBvciBOZXRsaWZ5IGVudiBmaWxlIHRvIHNldCB2YXJzIHdlIG5lZWRcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZW1haWxqcyBmcm9tIFwiQGVtYWlsanMvYnJvd3NlclwiOyAvLyBucG0gaSBAZW1haWxqcy9icm93c2VyXHJcbi8vIG5lZWQgdG8gaW1wb3J0IGZyb20gLmVudi5sb2NhbFxyXG4vLyAjIEZvciBlbWFpbGpzIGVtYWlsIGZvcm0gaW4gQ29udGFjdFxyXG5cclxuXHJcbmNvbnN0IFlPVVJfU0VSVklDRV9JRCA9IHByb2Nlc3MuZW52LllPVVJfU0VSVklDRV9JRDtcclxuY29uc3QgWU9VUl9URU1QTEFURV9JRCA9IHByb2Nlc3MuZW52LllPVVJfVEVNUExBVEVfSUQ7XHJcbi8vICNBY2NvdW50PkFQSSBLZXlzLVB1YmxpYyBrZXlcclxuY29uc3QgWU9VUl9QVUJMSUNfS0VZID0gcHJvY2Vzcy5lbnYuWU9VUl9QVUJMSUNfS0VZO1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICBjb25zdCBmb3JtID0gdXNlUmVmKCk7XHJcbiAgY29uc29sZS5sb2coZm9ybSlcclxuXHJcbiAgY29uc3Qgc2VuZEVtYWlsID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJ0ZXN0IGVycm9yXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJzZW5kIGVtYWlsIGNsaWNrZWRcIik7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgZW1haWxqc1xyXG4gICAgICAuc2VuZEZvcm0oXHJcbiAgICAgICAgWU9VUl9TRVJWSUNFX0lELFxyXG4gICAgICAgIFlPVVJfVEVNUExBVEVfSUQsXHJcbiAgICAgICAgZm9ybS5jdXJyZW50LFxyXG4gICAgICAgIFlPVVJfUFVCTElDX0tFWVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZSBzZW50XCIpO1xyXG4gICAgICAgICAgZS50YXJnZXQucmVzZXQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFjdENvbnRhaW5lciBpZD1cImNvbnRhY3RcIj5cclxuICAgICAgPFNlY3Rpb25UaXRsZT5DT05UQUNUPC9TZWN0aW9uVGl0bGU+XHJcbiAgICAgIDxDb250YWN0QmFyIC8+XHJcbiAgICAgIDxDb250YWN0U3VidGV4dD5IYXZlIGEgcXVlc3Rpb24gb3Igd2FudCB0byB3b3JrIHRvZ2V0aGVyPzwvQ29udGFjdFN1YnRleHQ+XHJcbiAgICAgIDxGb3JtQ29udGFpbmVyIHJlZj17Zm9ybX0gb25TdWJtaXQ9e3NlbmRFbWFpbH0+XHJcbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJfbmFtZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBuYW1lPVwidXNlcl9lbWFpbFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgTWVzc2FnZVwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgPjwvVGV4dEFyZWE+XHJcbiAgICAgICAgey8qIDxkaXYgaWQ9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBZb3VyIG1lc3NhZ2Ugd2FzIHNlbnQgc3VjY2Vzc2Z1bGx5LiBUaGFua3MhXHJcbiAgICAgICAgICAgIDxzcGFuIGlkPVwiY2xvc2VcIiBjbGFzc05hbWU9XCJtZGkgbWRpLWNsb3NlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDxTdWJtaXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VuZFwiPlxyXG4gICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9TdWJtaXRCdXR0b24+XHJcbiAgICAgIDwvRm9ybUNvbnRhaW5lcj5cclxuICAgIDwvQ29udGFjdENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==