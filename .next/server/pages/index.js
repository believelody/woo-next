module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "MV5A":
/***/ (function(module, exports) {



/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/footer/Footer.js

var __jsx = external_react_default.a.createElement;

const Footer = () => {
  return __jsx("footer", null);
};

/* harmony default export */ var footer_Footer = (Footer);
// CONCATENATED MODULE: ./components/header/Header.js

var Header_jsx = external_react_default.a.createElement;

const {
  default: Nav
} = __webpack_require__("a46y");

const Header = () => {
  return Header_jsx("header", null, Header_jsx(Nav, null));
};

/* harmony default export */ var header_Header = (Header);
// CONCATENATED MODULE: ./components/layout/Layout.js

var Layout_jsx = external_react_default.a.createElement;




const Layout = ({
  children
}) => {
  return Layout_jsx("div", null, Layout_jsx(head_default.a, null, Layout_jsx("title", null, "We Lift UP"), Layout_jsx("link", {
    rel: "stylesheet",
    href: "https://bootswatch.com/4/cosmo/bootstrap.min.css"
  })), Layout_jsx(header_Header, null), children, Layout_jsx(footer_Footer, null));
};

/* harmony default export */ var layout_Layout = (Layout);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");

// CONCATENATED MODULE: ./client-config/config.js
const clientConfig = {
  siteUrl: "http://localhost:3000",
  graphqlUrl: "http://localhost/wordpress/graphql"
};
/* harmony default export */ var config = (clientConfig);
// CONCATENATED MODULE: ./components/products/Product.js

var Product_jsx = external_react_default.a.createElement;

const Product = ({
  product
}) => {
  return Product_jsx("div", {
    className: "card rounded h-100"
  }, Product_jsx("div", {
    className: "card-header d-flex justify-content-between"
  }, Product_jsx("h3", {
    className: ""
  }, product.name), Product_jsx("h3", {
    className: ""
  }, product.price)), Product_jsx("img", {
    style: {
      height: "auto",
      width: 300,
      margin: "0 auto"
    },
    src: product.image.sourceUrl,
    alt: product.image.altText
  }), Product_jsx("div", {
    className: "card-body"
  }, Product_jsx("p", {
    className: "card-text"
  }, product.shortDescription)), Product_jsx("div", {
    className: "card-body d-flex align-items-center justify-content-between"
  }, Product_jsx("a", {
    href: "#",
    className: "btn btn-primary px-5"
  }, "View"), Product_jsx("a", {
    href: "#",
    className: "card-link"
  }, "Another link")));
};

/* harmony default export */ var products_Product = (Product);
// CONCATENATED MODULE: ./components/products/Products.js

var Products_jsx = external_react_default.a.createElement;


const Products = ({
  products
}) => {
  return Products_jsx("div", {
    className: "container"
  }, Products_jsx("ul", {
    className: "border d-flex py-3"
  }, products.length ? products.map(product => Products_jsx("li", {
    className: "mx-3",
    key: product.id
  }, Products_jsx(products_Product, {
    product: product
  }))) : Products_jsx("p", null, "There is no product")));
};

/* harmony default export */ var products_Products = (Products);
// EXTERNAL MODULE: ./style.css
var style = __webpack_require__("MV5A");

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__("4vsW");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// EXTERNAL MODULE: external "apollo-cache-inmemory"
var external_apollo_cache_inmemory_ = __webpack_require__("oz4i");

// EXTERNAL MODULE: external "apollo-link-http"
var external_apollo_link_http_ = __webpack_require__("TG1l");

// CONCATENATED MODULE: ./apolloClient.js





const client = new external_apollo_boost_["ApolloClient"]({
  link: Object(external_apollo_link_http_["createHttpLink"])({
    uri: config.graphqlUrl,
    fetch: external_node_fetch_default.a
  }),
  cache: new external_apollo_cache_inmemory_["InMemoryCache"]()
});
/* harmony default export */ var apolloClient = (client);
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;








const PRODUCTS_QUERY = external_graphql_tag_default.a`query{
  products(first: 20) {
    nodes {
      ... on VariableProduct {
        name
        price
        productId
        shortDescription
        stockQuantity
        id
        image {
          altText
          sourceUrl
        }
      }
    }
  }
}`;

const Index = ({
  products
}) => {
  return pages_jsx(layout_Layout, null, pages_jsx(products_Products, {
    products: products
  }));
};

Index.getInitialProps = async () => {
  // const res = await fetch(`${clientConfig.siteUrl}/products`)
  // const products = await res.json()
  const {
    data: {
      products
    }
  } = await apolloClient.query({
    query: PRODUCTS_QUERY
  });
  console.log(products);
  return {
    products: products.nodes
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "TG1l":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "a46y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Nav = () => {
  return __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark"
  }, __jsx("div", {
    className: "collapse navbar-collapse",
    id: "navbarColor02"
  }, __jsx("ul", {
    className: "navbar-nav mr-auto"
  }, __jsx("li", {
    className: "nav-item active"
  }, __jsx("a", {
    className: "nav-link",
    href: "#"
  }, "We Lift UP ", __jsx("span", {
    className: "sr-only"
  }, "(current)"))), __jsx("li", {
    className: "nav-item"
  }, __jsx("a", {
    className: "nav-link",
    href: "#"
  }, "Categories")), __jsx("li", {
    className: "nav-item"
  }, __jsx("a", {
    className: "nav-link",
    href: "#"
  }, "My Account")), __jsx("li", {
    className: "nav-item"
  }, __jsx("a", {
    className: "nav-link",
    href: "#"
  }, "About")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });