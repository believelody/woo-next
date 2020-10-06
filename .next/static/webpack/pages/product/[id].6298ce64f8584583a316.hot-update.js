webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./components/modal/Modal.js":
/*!***********************************!*\
  !*** ./components/modal/Modal.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/AppContext */ \"./context/AppContext.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/yamakasi/nextjs/woo-next/components/modal/Modal.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Modal = function Modal() {\n  _s();\n\n  var modalRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  var _useAppHooks = Object(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"useAppHooks\"])(),\n      _useAppHooks$useModal = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useAppHooks.useModal, 2),\n      modal = _useAppHooks$useModal[0],\n      setModal = _useAppHooks$useModal[1];\n\n  var handleAction = function handleAction() {\n    modal.action.method();\n    setModal(null);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (modal) {\n      // $(\"#modalTest\").modal(\"toggle\")\n      // console.log($(\"#modalTest\"))\n      console.log(modalRef);\n\n      if (modalRef) {\n        modalRef.current.modal(\"toggle\");\n      }\n    }\n  }, [modal]);\n  return modal && __jsx(\"div\", {\n    className: \"modal fade border border-danger\",\n    tabIndex: -1,\n    id: \"modalTest\",\n    \"aria-labelledby\": \"modalLabel\",\n    ref: modalRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"modal-dialog\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"modal-content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"modal-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, __jsx(\"h5\", {\n    className: \"modal-title\",\n    id: \"modalTestLabel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, modal.title)), __jsx(\"div\", {\n    className: \"modal-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, modal.body)), __jsx(\"div\", {\n    className: \"modal-footer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return setModal(null);\n    },\n    className: \"btn btn-secondary\",\n    \"data-dismiss\": \"modal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, modal.dismiss || \"Close\"), __jsx(\"button\", {\n    onClick: handleAction,\n    className: \"btn btn-\".concat(modal.action.role),\n    \"data-dismiss\": \"modal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, modal.action.text)))));\n};\n\n_s(Modal, \"472sidv4bzE1Bb9qw0rW99z3xII=\", false, function () {\n  return [_context_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"useAppHooks\"]];\n});\n\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\nvar _c;\n\n$RefreshReg$(_c, \"Modal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbC5qcz85NzA1Il0sIm5hbWVzIjpbIk1vZGFsIiwibW9kYWxSZWYiLCJ1c2VSZWYiLCJ1c2VBcHBIb29rcyIsInVzZU1vZGFsIiwibW9kYWwiLCJzZXRNb2RhbCIsImhhbmRsZUFjdGlvbiIsImFjdGlvbiIsIm1ldGhvZCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwidGl0bGUiLCJib2R5IiwiZGlzbWlzcyIsInJvbGUiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sRUFBdkI7O0FBRGtCLHFCQUVvQkMsdUVBQVcsRUFGL0I7QUFBQSxvSUFFWEMsUUFGVztBQUFBLE1BRUFDLEtBRkE7QUFBQSxNQUVPQyxRQUZQOztBQUlsQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCRixTQUFLLENBQUNHLE1BQU4sQ0FBYUMsTUFBYjtBQUNBSCxZQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0QsR0FIRDs7QUFLQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUwsS0FBSixFQUFXO0FBQ1Q7QUFDQTtBQUNBTSxhQUFPLENBQUNDLEdBQVIsQ0FBWVgsUUFBWjs7QUFDQSxVQUFJQSxRQUFKLEVBQWM7QUFDWkEsZ0JBQVEsQ0FBQ1ksT0FBVCxDQUFpQlIsS0FBakIsQ0FBdUIsUUFBdkI7QUFDRDtBQUNGO0FBQ0YsR0FUUSxFQVNOLENBQUNBLEtBQUQsQ0FUTSxDQUFUO0FBV0EsU0FDRUEsS0FBSyxJQUNMO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQ0UsWUFBUSxFQUFFLENBQUMsQ0FEYjtBQUVFLE1BQUUsRUFBQyxXQUZMO0FBR0UsdUJBQWdCLFlBSGxCO0FBSUUsT0FBRyxFQUFFSixRQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxhQUFkO0FBQTRCLE1BQUUsRUFBQyxnQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpREksS0FBSyxDQUFDUyxLQUF2RCxDQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlULEtBQUssQ0FBQ1UsSUFBVixDQURGLENBSkYsRUFPRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1ULFFBQVEsQ0FBQyxJQUFELENBQWQ7QUFBQSxLQUFqQjtBQUF1QyxhQUFTLEVBQUMsbUJBQWpEO0FBQXFFLG9CQUFhLE9BQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkZELEtBQUssQ0FBQ1csT0FBTixJQUFpQixPQUE1RyxDQURGLEVBRUU7QUFBUSxXQUFPLEVBQUVULFlBQWpCO0FBQStCLGFBQVMsb0JBQWFGLEtBQUssQ0FBQ0csTUFBTixDQUFhUyxJQUExQixDQUF4QztBQUEwRSxvQkFBYSxPQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdHWixLQUFLLENBQUNHLE1BQU4sQ0FBYVUsSUFBN0csQ0FGRixDQVBGLENBREYsQ0FORixDQUZGO0FBd0JELENBNUNEOztHQUFNbEIsSztVQUVrQ0csK0Q7OztLQUZsQ0gsSztBQThDU0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21vZGFsL01vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUmVmLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VBcHBIb29rcyB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0FwcENvbnRleHRcIlxuXG5jb25zdCBNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWxSZWYgPSB1c2VSZWYoKVxuICBjb25zdCB7dXNlTW9kYWw6IFttb2RhbCwgc2V0TW9kYWxdfSA9IHVzZUFwcEhvb2tzKClcblxuICBjb25zdCBoYW5kbGVBY3Rpb24gPSAoKSA9PiB7XG4gICAgbW9kYWwuYWN0aW9uLm1ldGhvZCgpXG4gICAgc2V0TW9kYWwobnVsbClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICAvLyAkKFwiI21vZGFsVGVzdFwiKS5tb2RhbChcInRvZ2dsZVwiKVxuICAgICAgLy8gY29uc29sZS5sb2coJChcIiNtb2RhbFRlc3RcIikpXG4gICAgICBjb25zb2xlLmxvZyhtb2RhbFJlZilcbiAgICAgIGlmIChtb2RhbFJlZikge1xuICAgICAgICBtb2RhbFJlZi5jdXJyZW50Lm1vZGFsKFwidG9nZ2xlXCIpXG4gICAgICB9XG4gICAgfVxuICB9LCBbbW9kYWxdKVxuXG4gIHJldHVybiAoXG4gICAgbW9kYWwgJiZcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGUgYm9yZGVyIGJvcmRlci1kYW5nZXJcIlxuICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgaWQ9XCJtb2RhbFRlc3RcIlxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWxMYWJlbFwiXG4gICAgICByZWY9e21vZGFsUmVmfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cIm1vZGFsVGVzdExhYmVsXCI+e21vZGFsLnRpdGxlfTwvaDU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICA8cD57bW9kYWwuYm9keX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0TW9kYWwobnVsbCl9IGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj57bW9kYWwuZGlzbWlzcyB8fCBcIkNsb3NlXCJ9PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFjdGlvbn0gY2xhc3NOYW1lPXtgYnRuIGJ0bi0ke21vZGFsLmFjdGlvbi5yb2xlfWB9IGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+e21vZGFsLmFjdGlvbi50ZXh0fTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/modal/Modal.js\n");

/***/ })

})