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
console.log(process.env.Y, "service ID");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdC9Db250YWN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJZT1VSX1NFUlZJQ0VfSUQiLCJwcm9jZXNzIiwiZW52IiwiWU9VUl9URU1QTEFURV9JRCIsIllPVVJfUFVCTElDX0tFWSIsImNvbnNvbGUiLCJsb2ciLCJZIiwiQ29udGFjdCIsImZvcm0iLCJ1c2VSZWYiLCJzZW5kRW1haWwiLCJlIiwiZXJyb3IiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsanMiLCJjdXJyZW50IiwidGhlbiIsInJlc3VsdCIsInRleHQiLCJ0YXJnZXQiLCJyZXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFVQTs7QUFDQUEsNkVBQUEsRyxDQUE0Qjs7O0FBQzVCO0NBQ3dDO0FBQ3hDO0FBQ0E7O0FBR0EsSUFBTUMsZUFBZSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsZUFBcEM7QUFDQSxJQUFNRyxnQkFBZ0IsR0FBR0YsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQUFyQyxDLENBQ0E7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsZUFBcEM7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxDQUF4QixFQUEyQixZQUEzQjs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLElBQUksR0FBR0MsNkNBQU0sRUFBbkI7QUFDQUwsU0FBTyxDQUFDQyxHQUFSLENBQVlHLElBQVo7O0FBRUEsTUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCUCxXQUFPLENBQUNRLEtBQVIsQ0FBYyxZQUFkO0FBQ0FSLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0FNLEtBQUMsQ0FBQ0UsY0FBRjtBQUVBQyxrRUFBQSxDQUVJZixlQUZKLEVBR0lHLGdCQUhKLEVBSUlNLElBQUksQ0FBQ08sT0FKVCxFQUtJWixlQUxKLEVBT0dhLElBUEgsQ0FRSSxVQUFDQyxNQUFELEVBQVk7QUFDVmIsYUFBTyxDQUFDQyxHQUFSLENBQVlZLE1BQU0sQ0FBQ0MsSUFBbkI7QUFDQWQsYUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBTSxPQUFDLENBQUNRLE1BQUYsQ0FBU0MsS0FBVDtBQUNELEtBWkwsRUFhSSxVQUFDUixLQUFELEVBQVc7QUFDVFIsYUFBTyxDQUFDQyxHQUFSLENBQVlPLEtBQUssQ0FBQ00sSUFBbEI7QUFDRCxLQWZMO0FBaUJELEdBdEJEOztBQXdCQSxzQkFDRSw4REFBQyw0REFBRDtBQUFrQixNQUFFLEVBQUMsU0FBckI7QUFBQSw0QkFDRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFLDhEQUFDLHlEQUFEO0FBQWUsU0FBRyxFQUFFVixJQUFwQjtBQUEwQixjQUFRLEVBQUVFLFNBQXBDO0FBQUEsOEJBQ0UsOERBQUMsaURBQUQ7QUFBTyxtQkFBVyxFQUFDLE1BQW5CO0FBQTBCLFlBQUksRUFBQyxNQUEvQjtBQUFzQyxZQUFJLEVBQUMsV0FBM0M7QUFBdUQsZ0JBQVE7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsaURBQUQ7QUFDRSxtQkFBVyxFQUFDLGFBRGQ7QUFFRSxZQUFJLEVBQUMsT0FGUDtBQUdFLFlBQUksRUFBQyxZQUhQO0FBSUUsZ0JBQVE7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFRRSw4REFBQyxvREFBRDtBQUNFLG1CQUFXLEVBQUMsY0FEZDtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsWUFBSSxFQUFDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLGVBbUJFLDhEQUFDLHdEQUFEO0FBQWMsWUFBSSxFQUFDLFFBQW5CO0FBQTRCLGFBQUssRUFBQyxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThCRCxDQTFERDs7R0FBTUgsTzs7S0FBQUEsTztBQTRETiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MGE5OWE3NmZkYjQ4YTQwNjJlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBTZWN0aW9uLFxyXG4gIFNlY3Rpb25EaXZpZGVyLFxyXG4gIFNlY3Rpb25UaXRsZSxcclxuICBTZWN0aW9uU3ViVGV4dCxcclxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBDb250YWN0Q29udGFpbmVyLFxyXG4gIENvbnRhY3RCYXIsXHJcbiAgQ29udGFjdFN1YnRleHQsXHJcbiAgRm9ybUNvbnRhaW5lcixcclxuICBJbnB1dCxcclxuICBUZXh0QXJlYSxcclxuICBTdWJtaXRCdXR0b24sXHJcbn0gZnJvbSBcIi4vQ29udGFjdFN0eWxlc1wiO1xyXG5cclxuLyogQmVsb3cgaXMgZm9yIGZvcm0gdG8gd29yayAqL1xyXG5yZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpOyAvL2ZvciBsb2NhbCBvciBOZXRsaWZ5IGVudiBmaWxlIHRvIHNldCB2YXJzIHdlIG5lZWRcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZW1haWxqcyBmcm9tIFwiQGVtYWlsanMvYnJvd3NlclwiOyAvLyBucG0gaSBAZW1haWxqcy9icm93c2VyXHJcbi8vIG5lZWQgdG8gaW1wb3J0IGZyb20gLmVudi5sb2NhbFxyXG4vLyAjIEZvciBlbWFpbGpzIGVtYWlsIGZvcm0gaW4gQ29udGFjdFxyXG5cclxuXHJcbmNvbnN0IFlPVVJfU0VSVklDRV9JRCA9IHByb2Nlc3MuZW52LllPVVJfU0VSVklDRV9JRDtcclxuY29uc3QgWU9VUl9URU1QTEFURV9JRCA9IHByb2Nlc3MuZW52LllPVVJfVEVNUExBVEVfSUQ7XHJcbi8vICNBY2NvdW50PkFQSSBLZXlzLVB1YmxpYyBrZXlcclxuY29uc3QgWU9VUl9QVUJMSUNfS0VZID0gcHJvY2Vzcy5lbnYuWU9VUl9QVUJMSUNfS0VZO1xyXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5ZLCBcInNlcnZpY2UgSURcIilcclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IHVzZVJlZigpO1xyXG4gIGNvbnNvbGUubG9nKGZvcm0pXHJcblxyXG4gIGNvbnN0IHNlbmRFbWFpbCA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwidGVzdCBlcnJvclwiKTtcclxuICAgIGNvbnNvbGUubG9nKFwic2VuZCBlbWFpbCBjbGlja2VkXCIpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGVtYWlsanNcclxuICAgICAgLnNlbmRGb3JtKFxyXG4gICAgICAgIFlPVVJfU0VSVklDRV9JRCxcclxuICAgICAgICBZT1VSX1RFTVBMQVRFX0lELFxyXG4gICAgICAgIGZvcm0uY3VycmVudCxcclxuICAgICAgICBZT1VSX1BVQkxJQ19LRVlcclxuICAgICAgKVxyXG4gICAgICAudGhlbihcclxuICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudGV4dCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2Ugc2VudFwiKTtcclxuICAgICAgICAgIGUudGFyZ2V0LnJlc2V0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhY3RDb250YWluZXIgaWQ9XCJjb250YWN0XCI+XHJcbiAgICAgIDxTZWN0aW9uVGl0bGU+Q09OVEFDVDwvU2VjdGlvblRpdGxlPlxyXG4gICAgICA8Q29udGFjdEJhciAvPlxyXG4gICAgICA8Q29udGFjdFN1YnRleHQ+SGF2ZSBhIHF1ZXN0aW9uIG9yIHdhbnQgdG8gd29yayB0b2dldGhlcj88L0NvbnRhY3RTdWJ0ZXh0PlxyXG4gICAgICA8Rm9ybUNvbnRhaW5lciByZWY9e2Zvcm19IG9uU3VibWl0PXtzZW5kRW1haWx9PlxyXG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIk5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyX25hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgbmFtZT1cInVzZXJfZW1haWxcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIE1lc3NhZ2VcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgID48L1RleHRBcmVhPlxyXG4gICAgICAgIHsvKiA8ZGl2IGlkPVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgWW91ciBtZXNzYWdlIHdhcyBzZW50IHN1Y2Nlc3NmdWxseS4gVGhhbmtzIVxyXG4gICAgICAgICAgICA8c3BhbiBpZD1cImNsb3NlXCIgY2xhc3NOYW1lPVwibWRpIG1kaS1jbG9zZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIj5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvU3VibWl0QnV0dG9uPlxyXG4gICAgICA8L0Zvcm1Db250YWluZXI+XHJcbiAgICA8L0NvbnRhY3RDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=