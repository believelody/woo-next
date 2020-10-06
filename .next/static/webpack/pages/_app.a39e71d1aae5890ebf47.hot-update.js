webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/modal/Modal.js":
/*!***********************************!*\
  !*** ./components/modal/Modal.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/AppContext */ \"./context/AppContext.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/yamakasi/nextjs/woo-next/components/modal/Modal.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Modal = function Modal() {\n  _s();\n\n  var _useAppHooks = Object(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"useAppHooks\"])(),\n      _useAppHooks$useModal = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useAppHooks.useModal, 2),\n      modal = _useAppHooks$useModal[0],\n      setModal = _useAppHooks$useModal[1];\n\n  var handleAction = function handleAction() {\n    modal.action.method();\n    setModal(null);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (modal) {\n      $(\"#modalTest\").modal(\"toggle\");\n    }\n  }, [modal]);\n  return modal && __jsx(\"div\", {\n    className: \"modal fade\",\n    tabIndex: -1,\n    id: \"modalTest\",\n    \"aria-labelledby\": \"modalLabel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"modal-dialog\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"modal-content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"modal-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, __jsx(\"h5\", {\n    className: \"modal-title\",\n    id: \"modalTestLabel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, modal.title)), __jsx(\"div\", {\n    className: \"modal-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, modal.body)), __jsx(\"div\", {\n    className: \"modal-footer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return setModal(null);\n    },\n    className: \"btn btn-secondary\",\n    \"data-dismiss\": \"modal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, modal.dismiss || \"Close\"), __jsx(\"button\", {\n    onClick: handleAction,\n    className: \"btn btn-\".concat(modal.action.role),\n    \"data-dismiss\": \"modal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, modal.action.text)))));\n};\n\n_s(Modal, \"7eQbzX/zVt/NUyqys/OXBnBovPY=\", false, function () {\n  return [_context_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"useAppHooks\"]];\n});\n\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\nvar _c;\n\n$RefreshReg$(_c, \"Modal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbC5qcz85NzA1Il0sIm5hbWVzIjpbIk1vZGFsIiwidXNlQXBwSG9va3MiLCJ1c2VNb2RhbCIsIm1vZGFsIiwic2V0TW9kYWwiLCJoYW5kbGVBY3Rpb24iLCJhY3Rpb24iLCJtZXRob2QiLCJ1c2VFZmZlY3QiLCIkIiwidGl0bGUiLCJib2R5IiwiZGlzbWlzcyIsInJvbGUiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEscUJBQ29CQyx1RUFBVyxFQUQvQjtBQUFBLG9JQUNYQyxRQURXO0FBQUEsTUFDQUMsS0FEQTtBQUFBLE1BQ09DLFFBRFA7O0FBR2xCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJGLFNBQUssQ0FBQ0csTUFBTixDQUFhQyxNQUFiO0FBQ0FILFlBQVEsQ0FBQyxJQUFELENBQVI7QUFDRCxHQUhEOztBQUtBSSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTCxLQUFKLEVBQVc7QUFDVE0sT0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQk4sS0FBaEIsQ0FBc0IsUUFBdEI7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDQSxLQUFELENBSk0sQ0FBVDtBQU1BLFNBQ0VBLEtBQUssSUFDTDtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQ0UsWUFBUSxFQUFFLENBQUMsQ0FEYjtBQUVFLE1BQUUsRUFBQyxXQUZMO0FBR0UsdUJBQWdCLFlBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxhQUFkO0FBQTRCLE1BQUUsRUFBQyxnQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpREEsS0FBSyxDQUFDTyxLQUF2RCxDQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlQLEtBQUssQ0FBQ1EsSUFBVixDQURGLENBSkYsRUFPRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1QLFFBQVEsQ0FBQyxJQUFELENBQWQ7QUFBQSxLQUFqQjtBQUF1QyxhQUFTLEVBQUMsbUJBQWpEO0FBQXFFLG9CQUFhLE9BQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkZELEtBQUssQ0FBQ1MsT0FBTixJQUFpQixPQUE1RyxDQURGLEVBRUU7QUFBUSxXQUFPLEVBQUVQLFlBQWpCO0FBQStCLGFBQVMsb0JBQWFGLEtBQUssQ0FBQ0csTUFBTixDQUFhTyxJQUExQixDQUF4QztBQUEwRSxvQkFBYSxPQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdHVixLQUFLLENBQUNHLE1BQU4sQ0FBYVEsSUFBN0csQ0FGRixDQVBGLENBREYsQ0FMRixDQUZGO0FBdUJELENBckNEOztHQUFNZCxLO1VBQ2tDQywrRDs7O0tBRGxDRCxLO0FBdUNTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbW9kYWwvTW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlQXBwSG9va3MgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9BcHBDb250ZXh0XCJcblxuY29uc3QgTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IHt1c2VNb2RhbDogW21vZGFsLCBzZXRNb2RhbF19ID0gdXNlQXBwSG9va3MoKVxuXG4gIGNvbnN0IGhhbmRsZUFjdGlvbiA9ICgpID0+IHtcbiAgICBtb2RhbC5hY3Rpb24ubWV0aG9kKClcbiAgICBzZXRNb2RhbChudWxsKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobW9kYWwpIHtcbiAgICAgICQoXCIjbW9kYWxUZXN0XCIpLm1vZGFsKFwidG9nZ2xlXCIpXG4gICAgfVxuICB9LCBbbW9kYWxdKVxuXG4gIHJldHVybiAoXG4gICAgbW9kYWwgJiZcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxuICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgaWQ9XCJtb2RhbFRlc3RcIlxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWxMYWJlbFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwibW9kYWxUZXN0TGFiZWxcIj57bW9kYWwudGl0bGV9PC9oNT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgIDxwPnttb2RhbC5ib2R5fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbChudWxsKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPnttb2RhbC5kaXNtaXNzIHx8IFwiQ2xvc2VcIn08L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQWN0aW9ufSBjbGFzc05hbWU9e2BidG4gYnRuLSR7bW9kYWwuYWN0aW9uLnJvbGV9YH0gZGF0YS1kaXNtaXNzPVwibW9kYWxcIj57bW9kYWwuYWN0aW9uLnRleHR9PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/modal/Modal.js\n");

/***/ })

})