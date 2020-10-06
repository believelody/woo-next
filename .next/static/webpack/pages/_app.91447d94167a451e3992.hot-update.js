webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/modal/Modal.js":
/*!***********************************!*\
  !*** ./components/modal/Modal.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/AppContext */ \"./context/AppContext.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/yamakasi/nextjs/woo-next/components/modal/Modal.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Modal = function Modal() {\n  _s();\n\n  var modalRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createRef\"])();\n  var modalEl = document.getElementById(\"modalTest\");\n\n  var _useAppHooks = Object(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"useAppHooks\"])(),\n      _useAppHooks$useModal = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useAppHooks.useModal, 2),\n      modal = _useAppHooks$useModal[0],\n      setModal = _useAppHooks$useModal[1];\n\n  var handleAction = function handleAction() {\n    modal.action.method();\n    setModal(null);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (modal) {\n      // $(\"#modalTest\").modal(\"toggle\")\n      // console.log($(\"#modalTest\"))\n      // console.log(modalRef)\n      // document.getElementById(\"modalTest\").modal(\"toggle\")\n      if (modalEl) {\n        console.log(modalEl); // modalRef.current.getElementById(\"modalTest\").modal(\"toggle\")\n      }\n    }\n  }, [modal]);\n  return modal && __jsx(\"div\", {\n    className: \"modal fade border border-danger\",\n    tabIndex: -1,\n    id: \"modalTest\",\n    \"aria-labelledby\": \"modalLabel\",\n    ref: modalRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"modal-dialog\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"modal-content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"modal-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, __jsx(\"h5\", {\n    className: \"modal-title\",\n    id: \"modalTestLabel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, modal.title)), __jsx(\"div\", {\n    className: \"modal-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, modal.body)), __jsx(\"div\", {\n    className: \"modal-footer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return setModal(null);\n    },\n    className: \"btn btn-secondary\",\n    \"data-dismiss\": \"modal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, modal.dismiss || \"Close\"), __jsx(\"button\", {\n    onClick: handleAction,\n    className: \"btn btn-\".concat(modal.action.role),\n    \"data-dismiss\": \"modal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, modal.action.text)))));\n};\n\n_s(Modal, \"7eQbzX/zVt/NUyqys/OXBnBovPY=\", false, function () {\n  return [_context_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"useAppHooks\"]];\n});\n\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\nvar _c;\n\n$RefreshReg$(_c, \"Modal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbC5qcz85NzA1Il0sIm5hbWVzIjpbIk1vZGFsIiwibW9kYWxSZWYiLCJjcmVhdGVSZWYiLCJtb2RhbEVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInVzZUFwcEhvb2tzIiwidXNlTW9kYWwiLCJtb2RhbCIsInNldE1vZGFsIiwiaGFuZGxlQWN0aW9uIiwiYWN0aW9uIiwibWV0aG9kIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiYm9keSIsImRpc21pc3MiLCJyb2xlIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxRQUFRLGdCQUFHQyx1REFBUyxFQUExQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCOztBQUZrQixxQkFHb0JDLHVFQUFXLEVBSC9CO0FBQUEsb0lBR1hDLFFBSFc7QUFBQSxNQUdBQyxLQUhBO0FBQUEsTUFHT0MsUUFIUDs7QUFLbEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkYsU0FBSyxDQUFDRyxNQUFOLENBQWFDLE1BQWI7QUFDQUgsWUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNELEdBSEQ7O0FBS0FJLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlMLEtBQUosRUFBVztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBSUwsT0FBSixFQUFhO0FBQ1hXLGVBQU8sQ0FBQ0MsR0FBUixDQUFZWixPQUFaLEVBRFcsQ0FFWDtBQUNEO0FBQ0Y7QUFDRixHQVhRLEVBV04sQ0FBQ0ssS0FBRCxDQVhNLENBQVQ7QUFhQSxTQUNFQSxLQUFLLElBQ0w7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFDRSxZQUFRLEVBQUUsQ0FBQyxDQURiO0FBRUUsTUFBRSxFQUFDLFdBRkw7QUFHRSx1QkFBZ0IsWUFIbEI7QUFJRSxPQUFHLEVBQUVQLFFBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGFBQWQ7QUFBNEIsTUFBRSxFQUFDLGdCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlETyxLQUFLLENBQUNRLEtBQXZELENBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVIsS0FBSyxDQUFDUyxJQUFWLENBREYsQ0FKRixFQU9FO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTVIsUUFBUSxDQUFDLElBQUQsQ0FBZDtBQUFBLEtBQWpCO0FBQXVDLGFBQVMsRUFBQyxtQkFBakQ7QUFBcUUsb0JBQWEsT0FBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyRkQsS0FBSyxDQUFDVSxPQUFOLElBQWlCLE9BQTVHLENBREYsRUFFRTtBQUFRLFdBQU8sRUFBRVIsWUFBakI7QUFBK0IsYUFBUyxvQkFBYUYsS0FBSyxDQUFDRyxNQUFOLENBQWFRLElBQTFCLENBQXhDO0FBQTBFLG9CQUFhLE9BQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0dYLEtBQUssQ0FBQ0csTUFBTixDQUFhUyxJQUE3RyxDQUZGLENBUEYsQ0FERixDQU5GLENBRkY7QUF3QkQsQ0EvQ0Q7O0dBQU1wQixLO1VBR2tDTSwrRDs7O0tBSGxDTixLO0FBaURTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbW9kYWwvTW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VBcHBIb29rcyB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0FwcENvbnRleHRcIlxuXG5jb25zdCBNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWxSZWYgPSBjcmVhdGVSZWYoKVxuICBjb25zdCBtb2RhbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFRlc3RcIilcbiAgY29uc3Qge3VzZU1vZGFsOiBbbW9kYWwsIHNldE1vZGFsXX0gPSB1c2VBcHBIb29rcygpXG5cbiAgY29uc3QgaGFuZGxlQWN0aW9uID0gKCkgPT4ge1xuICAgIG1vZGFsLmFjdGlvbi5tZXRob2QoKVxuICAgIHNldE1vZGFsKG51bGwpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtb2RhbCkge1xuICAgICAgLy8gJChcIiNtb2RhbFRlc3RcIikubW9kYWwoXCJ0b2dnbGVcIilcbiAgICAgIC8vIGNvbnNvbGUubG9nKCQoXCIjbW9kYWxUZXN0XCIpKVxuICAgICAgLy8gY29uc29sZS5sb2cobW9kYWxSZWYpXG4gICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsVGVzdFwiKS5tb2RhbChcInRvZ2dsZVwiKVxuICAgICAgaWYgKG1vZGFsRWwpIHtcbiAgICAgICAgY29uc29sZS5sb2cobW9kYWxFbClcbiAgICAgICAgLy8gbW9kYWxSZWYuY3VycmVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsVGVzdFwiKS5tb2RhbChcInRvZ2dsZVwiKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW21vZGFsXSlcblxuICByZXR1cm4gKFxuICAgIG1vZGFsICYmXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlIGJvcmRlciBib3JkZXItZGFuZ2VyXCJcbiAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgIGlkPVwibW9kYWxUZXN0XCJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsTGFiZWxcIlxuICAgICAgcmVmPXttb2RhbFJlZn1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJtb2RhbFRlc3RMYWJlbFwiPnttb2RhbC50aXRsZX08L2g1PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgPHA+e21vZGFsLmJvZHl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsKG51bGwpfSBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+e21vZGFsLmRpc21pc3MgfHwgXCJDbG9zZVwifTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBY3Rpb259IGNsYXNzTmFtZT17YGJ0biBidG4tJHttb2RhbC5hY3Rpb24ucm9sZX1gfSBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPnttb2RhbC5hY3Rpb24udGV4dH08L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/modal/Modal.js\n");

/***/ })

})