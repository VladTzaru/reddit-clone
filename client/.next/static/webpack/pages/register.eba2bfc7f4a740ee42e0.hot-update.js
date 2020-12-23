webpackHotUpdate_N_E("pages/register",{

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
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

  var _useMutation = Object(urql__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(""),
      _useMutation2 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Wrapper__WEBPACK_IMPORTED_MODULE_5__["Wrapper"], {
    variant: "small",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
      initialValues: {
        username: '',
        password: ''
      },
      onSubmit: function onSubmit(values) {
        return console.log(values);
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
            lineNumber: 35,
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
              lineNumber: 41,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            isLoading: isSubmitting,
            mt: 4,
            colorScheme: "blue",
            type: "submit",
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
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

_s(Register, "Jr2q1I9RJBjd1RaocnlRv7bNVIk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeCJdLCJuYW1lcyI6WyJSRUdJU1RFUl9NVVQiLCJSZWdpc3RlciIsInVzZU11dGF0aW9uIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJpc1N1Ym1pdHRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFlBQVksK09BQWxCOztBQWVBLElBQU1DLFFBQWlDLEdBQUcsU0FBcENBLFFBQW9DLE9BQVE7QUFBQTs7QUFBQTs7QUFBQSxxQkFDckNDLHdEQUFXLElBRDBCO0FBQUE7O0FBRWhELHNCQUNFLHFFQUFDLDJEQUFEO0FBQVMsV0FBTyxFQUFDLE9BQWpCO0FBQUEsMkJBQ0UscUVBQUMsNkNBQUQ7QUFDRSxtQkFBYSxFQUFFO0FBQUVDLGdCQUFRLEVBQUUsRUFBWjtBQUFnQkMsZ0JBQVEsRUFBRTtBQUExQixPQURqQjtBQUVFLGNBQVEsRUFBRSxrQkFBQ0MsTUFBRDtBQUFBLGVBQVlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaLENBQVo7QUFBQSxPQUZaO0FBQUEsZ0JBSUc7QUFBQSxZQUFHRyxZQUFILFNBQUdBLFlBQUg7QUFBQSw0QkFDQyxxRUFBQywyQ0FBRDtBQUFBLGtDQUNFLHFFQUFDLGlFQUFEO0FBQ0UsZ0JBQUksRUFBQyxVQURQO0FBRUUsdUJBQVcsRUFBQyxVQUZkO0FBR0UsaUJBQUssRUFBQztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRSxxRUFBQyxvREFBRDtBQUFLLGNBQUUsRUFBRSxDQUFUO0FBQUEsbUNBQ0UscUVBQUMsaUVBQUQ7QUFDRSxrQkFBSSxFQUFDLFVBRFA7QUFFRSx5QkFBVyxFQUFDLFVBRmQ7QUFHRSxtQkFBSyxFQUFDLFVBSFI7QUFJRSxrQkFBSSxFQUFDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFjRSxxRUFBQyx1REFBRDtBQUNFLHFCQUFTLEVBQUVBLFlBRGI7QUFFRSxjQUFFLEVBQUUsQ0FGTjtBQUdFLHVCQUFXLEVBQUMsTUFIZDtBQUlFLGdCQUFJLEVBQUMsUUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFBQTtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQ0QsQ0FwQ0Q7O0dBQU1QLFE7VUFDT0MsZ0Q7OztLQURQRCxRO0FBc0NTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci5lYmEyYmZjN2Y0YTc0MGVlNDJlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvV3JhcHBlcic7XHJcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tICcuLi9jb21wb25lbnRzL0lucHV0RmllbGQnO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ3VycWwnO1xyXG5cclxuaW50ZXJmYWNlIFJlZ2lzdGVyUHJvcHMge31cclxuXHJcbmNvbnN0IFJFR0lTVEVSX01VVCA9IGBcclxubXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcclxuICByZWdpc3RlcihvcHRpb25zOiB7IHVzZXJuYW1lOiAkdXNlcm5hbWUsIHBhc3N3b3JkOiAkcGFzc3dvcmQgfSkge1xyXG4gICAgdXNlciB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHVzZXJuYW1lXHJcbiAgICB9XHJcbiAgICBlcnJvcnMge1xyXG4gICAgICBmaWVsZFxyXG4gICAgICBtZXNzYWdlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5jb25zdCBSZWdpc3RlcjogUmVhY3QuRkM8UmVnaXN0ZXJQcm9wcz4gPSAoe30pID0+IHtcclxuICBjb25zdCBbXSA9IHVzZU11dGF0aW9uKGBgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXIgdmFyaWFudD0nc21hbGwnPlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyB1c2VybmFtZTogJycsIHBhc3N3b3JkOiAnJyB9fVxyXG4gICAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiBjb25zb2xlLmxvZyh2YWx1ZXMpfVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICBuYW1lPSd1c2VybmFtZSdcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0ndXNlcm5hbWUnXHJcbiAgICAgICAgICAgICAgbGFiZWw9J1VzZXJuYW1lJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Qm94IG10PXs0fT5cclxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICBsYWJlbD0nUGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGlzTG9hZGluZz17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgIG10PXs0fVxyXG4gICAgICAgICAgICAgIGNvbG9yU2NoZW1lPSdibHVlJ1xyXG4gICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==