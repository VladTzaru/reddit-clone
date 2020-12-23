webpackHotUpdate_N_E("pages/register",{

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toArray.js":
false,

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Wrapper */ "./src/components/Wrapper.tsx");
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/InputField */ "./src/components/InputField.tsx");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");




var _jsxFileName = "C:\\Users\\tzaru\\OneDrive\\Radna povr\u0161ina\\Projects\\LIREDDIT-SERVER\\client\\src\\pages\\register.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var REGISTER_MUT = "\nmutation Register($username: String!, $password: String!) {\n  register(options: { username: $username, password: $password }) {\n    user {\n      id\n      username\n    }\n    errors {\n      field\n      message\n    }\n  }\n}\n";

var Register = function Register(_ref) {
  _s();

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref);

  var _useMutation = Object(urql__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(REGISTER_MUT),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      register = _useMutation2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Wrapper__WEBPACK_IMPORTED_MODULE_5__["Wrapper"], {
    variant: "small",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
      initialValues: {
        username: '',
        password: ''
      },
      onSubmit: function onSubmit(values) {
        console.log(values);
        register(values);
      },
      children: function children(_ref2) {
        var isSubmitting = _ref2.isSubmitting;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_InputField__WEBPACK_IMPORTED_MODULE_6__["InputField"], {
            name: "username",
            placeholder: "username",
            label: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Box"], {
            mt: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_InputField__WEBPACK_IMPORTED_MODULE_6__["InputField"], {
              name: "password",
              placeholder: "password",
              label: "Password",
              type: "password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            isLoading: isSubmitting,
            mt: 4,
            colorScheme: "blue",
            type: "submit",
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_s(Register, "7CEe8jaeeKkSxBnlwahqPb7e3aI=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_8__["useMutation"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeCJdLCJuYW1lcyI6WyJSRUdJU1RFUl9NVVQiLCJSZWdpc3RlciIsInVzZU11dGF0aW9uIiwicmVnaXN0ZXIiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImlzU3VibWl0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsWUFBWSwrT0FBbEI7O0FBZUEsSUFBTUMsUUFBaUMsR0FBRyxTQUFwQ0EsUUFBb0MsT0FBUTtBQUFBOztBQUFBOztBQUFBLHFCQUMzQkMsd0RBQVcsQ0FBQ0YsWUFBRCxDQURnQjtBQUFBO0FBQUEsTUFDdkNHLFFBRHVDOztBQUVoRCxzQkFDRSxxRUFBQywyREFBRDtBQUFTLFdBQU8sRUFBQyxPQUFqQjtBQUFBLDJCQUNFLHFFQUFDLDZDQUFEO0FBQ0UsbUJBQWEsRUFBRTtBQUFFQyxnQkFBUSxFQUFFLEVBQVo7QUFBZ0JDLGdCQUFRLEVBQUU7QUFBMUIsT0FEakI7QUFFRSxjQUFRLEVBQUUsa0JBQUNDLE1BQUQsRUFBWTtBQUNwQkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDQUgsZ0JBQVEsQ0FBQ0csTUFBRCxDQUFSO0FBQ0QsT0FMSDtBQUFBLGdCQU9HO0FBQUEsWUFBR0csWUFBSCxTQUFHQSxZQUFIO0FBQUEsNEJBQ0MscUVBQUMsMkNBQUQ7QUFBQSxrQ0FDRSxxRUFBQyxpRUFBRDtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLHVCQUFXLEVBQUMsVUFGZDtBQUdFLGlCQUFLLEVBQUM7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBTUUscUVBQUMsb0RBQUQ7QUFBSyxjQUFFLEVBQUUsQ0FBVDtBQUFBLG1DQUNFLHFFQUFDLGlFQUFEO0FBQ0Usa0JBQUksRUFBQyxVQURQO0FBRUUseUJBQVcsRUFBQyxVQUZkO0FBR0UsbUJBQUssRUFBQyxVQUhSO0FBSUUsa0JBQUksRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLGVBY0UscUVBQUMsdURBQUQ7QUFDRSxxQkFBUyxFQUFFQSxZQURiO0FBRUUsY0FBRSxFQUFFLENBRk47QUFHRSx1QkFBVyxFQUFDLE1BSGQ7QUFJRSxnQkFBSSxFQUFDLFFBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBQUE7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUNELENBdkNEOztHQUFNUixRO1VBQ2lCQyxnRDs7O0tBRGpCRCxRO0FBeUNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci44MDc3OThiYzgzMzI2ZjA2ZTNhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvV3JhcHBlcic7XHJcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tICcuLi9jb21wb25lbnRzL0lucHV0RmllbGQnO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ3VycWwnO1xyXG5cclxuaW50ZXJmYWNlIFJlZ2lzdGVyUHJvcHMge31cclxuXHJcbmNvbnN0IFJFR0lTVEVSX01VVCA9IGBcclxubXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcclxuICByZWdpc3RlcihvcHRpb25zOiB7IHVzZXJuYW1lOiAkdXNlcm5hbWUsIHBhc3N3b3JkOiAkcGFzc3dvcmQgfSkge1xyXG4gICAgdXNlciB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHVzZXJuYW1lXHJcbiAgICB9XHJcbiAgICBlcnJvcnMge1xyXG4gICAgICBmaWVsZFxyXG4gICAgICBtZXNzYWdlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5jb25zdCBSZWdpc3RlcjogUmVhY3QuRkM8UmVnaXN0ZXJQcm9wcz4gPSAoe30pID0+IHtcclxuICBjb25zdCBbLCByZWdpc3Rlcl0gPSB1c2VNdXRhdGlvbihSRUdJU1RFUl9NVVQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlciB2YXJpYW50PSdzbWFsbCc+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHVzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnIH19XHJcbiAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICAgICAgICByZWdpc3Rlcih2YWx1ZXMpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8SW5wdXRGaWVsZFxyXG4gICAgICAgICAgICAgIG5hbWU9J3VzZXJuYW1lJ1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSd1c2VybmFtZSdcclxuICAgICAgICAgICAgICBsYWJlbD0nVXNlcm5hbWUnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCb3ggbXQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIGxhYmVsPSdQYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgbXQ9ezR9XHJcbiAgICAgICAgICAgICAgY29sb3JTY2hlbWU9J2JsdWUnXHJcbiAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9