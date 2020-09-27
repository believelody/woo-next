webpackHotUpdate_N_E("pages/product",{

/***/ "./pages/product/index.js":
/*!********************************!*\
  !*** ./pages/product/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout/Layout */ \"./components/layout/Layout.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/yamakasi/nextjs/woo-next/pages/product/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"query Product($id: Int !) {\\n    product(id: $id) {\\n    ... on VariableProduct {\\n      id\\n      name\\n      price\\n      image {\\n        sourceUrl\\n      }\\n      galleryImages {\\n        nodes {\\n          sourceUrl\\n          altText\\n        }\\n      }\\n    }\\n  }\\n}\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar PRODUCT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());\n\nvar ProductPage = function ProductPage(_ref) {\n  _s();\n\n  var product = _ref.product;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  console.log(product);\n  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, \"Yes we can\");\n};\n\n_s(ProductPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = ProductPage;\n\nProductPage.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var slug, _yield$client$query, product;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(ctx);\n            slug = ctx.query.slug;\n            _context.next = 4;\n            return client.query({\n              query: PRODUCT_QUERY,\n              variables: {\n                id: slug\n              }\n            });\n\n          case 4:\n            _yield$client$query = _context.sent;\n            product = _yield$client$query.data.product;\n            return _context.abrupt(\"return\", {\n              product: product\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9pbmRleC5qcz80OWNkIl0sIm5hbWVzIjpbIlBST0RVQ1RfUVVFUlkiLCJncWwiLCJQcm9kdWN0UGFnZSIsInByb2R1Y3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwic2x1ZyIsInF1ZXJ5IiwiY2xpZW50IiwidmFyaWFibGVzIiwiaWQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLGtEQUFILG1CQUFuQjs7QUFtQkEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDakMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosT0FBWjtBQUNBLFNBQ0ksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBS0gsQ0FSRDs7R0FBTUQsVztVQUNhRyxxRDs7O0tBRGJILFc7O0FBVU5BLFdBQVcsQ0FBQ00sZUFBWjtBQUFBLCtMQUE4QixpQkFBTUMsR0FBTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFCSCxtQkFBTyxDQUFDQyxHQUFSLENBQVlFLEdBQVo7QUFDY0MsZ0JBRlksR0FFSEQsR0FGRyxDQUVwQkUsS0FGb0IsQ0FFWkQsSUFGWTtBQUFBO0FBQUEsbUJBR1VFLE1BQU0sQ0FBQ0QsS0FBUCxDQUFhO0FBQUVBLG1CQUFLLEVBQUVYLGFBQVQ7QUFBd0JhLHVCQUFTLEVBQUU7QUFBQ0Msa0JBQUUsRUFBRUo7QUFBTDtBQUFuQyxhQUFiLENBSFY7O0FBQUE7QUFBQTtBQUdWUCxtQkFIVSx1QkFHbEJZLElBSGtCLENBR1ZaLE9BSFU7QUFBQSw2Q0FJbkI7QUFBQ0EscUJBQU8sRUFBUEE7QUFBRCxhQUptQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPZUQsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0J1xuXG5jb25zdCBQUk9EVUNUX1FVRVJZID0gZ3FsYHF1ZXJ5IFByb2R1Y3QoJGlkOiBJbnQgISkge1xuICAgIHByb2R1Y3QoaWQ6ICRpZCkge1xuICAgIC4uLiBvbiBWYXJpYWJsZVByb2R1Y3Qge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIHByaWNlXG4gICAgICBpbWFnZSB7XG4gICAgICAgIHNvdXJjZVVybFxuICAgICAgfVxuICAgICAgZ2FsbGVyeUltYWdlcyB7XG4gICAgICAgIG5vZGVzIHtcbiAgICAgICAgICBzb3VyY2VVcmxcbiAgICAgICAgICBhbHRUZXh0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1gXG5cbmNvbnN0IFByb2R1Y3RQYWdlID0gKHsgcHJvZHVjdCB9KSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICBZZXMgd2UgY2FuXG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuUHJvZHVjdFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgICBjb25zb2xlLmxvZyhjdHgpXG4gICAgbGV0IHsgcXVlcnk6IHtzbHVnfX0gPSBjdHhcbiAgICBjb25zdCB7IGRhdGE6IHsgcHJvZHVjdCB9IH0gPSBhd2FpdCBjbGllbnQucXVlcnkoeyBxdWVyeTogUFJPRFVDVF9RVUVSWSwgdmFyaWFibGVzOiB7aWQ6IHNsdWd9IH0pXG4gICAgcmV0dXJuIHtwcm9kdWN0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/index.js\n");

/***/ })

})