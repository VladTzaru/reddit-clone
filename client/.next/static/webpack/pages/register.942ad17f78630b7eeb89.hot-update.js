webpackHotUpdate_N_E("pages/register",{

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");



var _jsxFileName = "C:\\Users\\tzaru\\OneDrive\\Radna povr\u0161ina\\Projects\\LIREDDIT-SERVER\\client\\src\\pages\\register.tsx",
    _this = undefined;





var Register = function Register(_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: function onSubmit(values) {
      return console.log(values);
    },
    children: function children(values, handleChange) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
            htmlFor: "username",
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
            value: values.username,
            onChange: handleChange,
            id: "username",
            placeholder: "username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["FormErrorMessage"], {
            children: form.errors.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeCJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiZm9ybSIsImVycm9ycyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFTQSxJQUFNQSxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxPQUFRO0FBQUE7O0FBQ2hELHNCQUNFLHFFQUFDLDZDQUFEO0FBQ0UsaUJBQWEsRUFBRTtBQUFFQyxjQUFRLEVBQUUsRUFBWjtBQUFnQkMsY0FBUSxFQUFFO0FBQTFCLEtBRGpCO0FBRUUsWUFBUSxFQUFFLGtCQUFDQyxNQUFEO0FBQUEsYUFBWUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVosQ0FBWjtBQUFBLEtBRlo7QUFBQSxjQUlHLGtCQUFDQSxNQUFELEVBQVNHLFlBQVQ7QUFBQSwwQkFDQyxxRUFBQywyQ0FBRDtBQUFBLCtCQUNFLHFFQUFDLDREQUFEO0FBQUEsa0NBQ0UscUVBQUMsMERBQUQ7QUFBVyxtQkFBTyxFQUFDLFVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUscUVBQUMsc0RBQUQ7QUFDRSxpQkFBSyxFQUFFSCxNQUFNLENBQUNGLFFBRGhCO0FBRUUsb0JBQVEsRUFBRUssWUFGWjtBQUdFLGNBQUUsRUFBQyxVQUhMO0FBSUUsdUJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFRRSxxRUFBQyxpRUFBRDtBQUFBLHNCQUFtQkMsSUFBSSxDQUFDQyxNQUFMLENBQVlDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBQUE7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0F0QkQ7O0tBQU1ULFE7QUF3QlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLjk0MmFkMTdmNzg2MzBiN2VlYjg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQge1xyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1MYWJlbCxcclxuICBJbnB1dCxcclxuICBGb3JtRXJyb3JNZXNzYWdlLFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFJlZ2lzdGVyUHJvcHMge31cclxuXHJcbmNvbnN0IFJlZ2lzdGVyOiBSZWFjdC5GQzxSZWdpc3RlclByb3BzPiA9ICh7fSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybWlrXHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3sgdXNlcm5hbWU6ICcnLCBwYXNzd29yZDogJycgfX1cclxuICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IGNvbnNvbGUubG9nKHZhbHVlcyl9XHJcbiAgICA+XHJcbiAgICAgIHsodmFsdWVzLCBoYW5kbGVDaGFuZ2UpID0+IChcclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPSd1c2VybmFtZSc+VXNlcm5hbWU8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy51c2VybmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGlkPSd1c2VybmFtZSdcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0ndXNlcm5hbWUnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9ycy5uYW1lfTwvRm9ybUVycm9yTWVzc2FnZT5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICApfVxyXG4gICAgPC9Gb3JtaWs+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9