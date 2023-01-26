/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/App */ \"./src/App.tsx\");\n/* harmony import */ var _src_app_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/app/store */ \"./src/app/store.ts\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get('*', (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default().renderToString( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n    store: _src_app_store__WEBPACK_IMPORTED_MODULE_6__.store,\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom_server__WEBPACK_IMPORTED_MODULE_7__.StaticRouter, {\n      location: req.url,\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {})\n    })\n  }));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default()[\"static\"]('./build'));\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack://react-theme/./server.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ \"react-helmet-async\");\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_features_config_configSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/features/config/configSlice */ \"./src/app/features/config/configSlice.ts\");\n/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/hooks */ \"./src/app/hooks.ts\");\n/* harmony import */ var _app_routers_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/routers/home */ \"./src/app/routers/home.tsx\");\n/* harmony import */ var _app_routers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/routers/post */ \"./src/app/routers/post.tsx\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.baseURL) = \"http://cms.local/api\";\r\n// const router = createBrowserRouter([\r\n//   {\r\n//     path: \"/\",\r\n//     element: <HomePage />,\r\n//     errorElement: <ErrorPage />,\r\n//   },\r\n//   {\r\n//     path: \"/:type\",\r\n//     element: <PostPage />,\r\n//     errorElement: <ErrorPage />,\r\n//   },\r\n//   {\r\n//     path: \"/:type/:slug\",\r\n//     element: <PostPage />,\r\n//     errorElement: <ErrorPage />,\r\n//   },\r\n// ]);\r\nfunction App() {\r\n    var dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();\r\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\r\n        dispatch((0,_app_features_config_configSlice__WEBPACK_IMPORTED_MODULE_5__.getThemeConfig)());\r\n    }, [dispatch]);\r\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.HelmetProvider, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, { path: \"/\", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_routers_home__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, { path: \"/:type\", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_routers_post__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, { path: \"/:type/:slug\", element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_routers_post__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}) })] }) }));\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\r\n\n\n//# sourceURL=webpack://react-theme/./src/App.tsx?");

/***/ }),

/***/ "./src/app/components/Footer.tsx":
/*!***************************************!*\
  !*** ./src/app/components/Footer.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/footer */ \"./src/views/footer.tsx\");\n\r\n\r\nfunction Header() {\r\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_views_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {});\r\n}\r\n\n\n//# sourceURL=webpack://react-theme/./src/app/components/Footer.tsx?");

/***/ }),

/***/ "./src/app/components/Header.tsx":
/*!***************************************!*\
  !*** ./src/app/components/Header.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/header */ \"./src/views/header.tsx\");\n\r\n\r\nfunction Header() {\r\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_views_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {});\r\n}\r\n\n\n//# sourceURL=webpack://react-theme/./src/app/components/Header.tsx?");

/***/ }),

/***/ "./src/app/components/Layout.tsx":
/*!***************************************!*\
  !*** ./src/app/components/Layout.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/app/components/Header.tsx\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ \"./src/app/components/Footer.tsx\");\n\r\n\r\n\r\n\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}), children, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {})] }));\r\n}\r\n\n\n//# sourceURL=webpack://react-theme/./src/app/components/Layout.tsx?");

/***/ }),

/***/ "./src/app/components/Loading.tsx":
/*!****************************************!*\
  !*** ./src/app/components/Loading.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Loading)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_components_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/components/Loading */ \"./src/views/components/Loading.tsx\");\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ \"./src/app/components/Layout.tsx\");\n\r\n\r\n\r\nfunction Loading() {\r\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_views_components_Loading__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}) });\r\n}\r\n\n\n//# sourceURL=webpack://react-theme/./src/app/components/Loading.tsx?");

/***/ }),

/***/ "./src/app/context/DataHelper.ts":
/*!***************************************!*\
  !*** ./src/app/context/DataHelper.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPostBySlug\": () => (/* binding */ getPostBySlug),\n/* harmony export */   \"getPostComments\": () => (/* binding */ getPostComments),\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\nfunction getPostComments(slug, type) {\r\n    if (type === void 0) { type = 'posts'; }\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var response, error_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 2, , 3]);\r\n                    return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"post-type/\".concat(type, \"/\").concat(slug, \"/comments\"))];\r\n                case 1:\r\n                    response = _a.sent();\r\n                    return [2 /*return*/, response.data];\r\n                case 2:\r\n                    error_1 = _a.sent();\r\n                    console.error(error_1);\r\n                    return [3 /*break*/, 3];\r\n                case 3: return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n}\r\nfunction getPostBySlug(type, slug) {\r\n    if (type === void 0) { type = 'posts'; }\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var response, error_2;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 2, , 3]);\r\n                    return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"post-type/\".concat(type, \"/\").concat(slug))];\r\n                case 1:\r\n                    response = _a.sent();\r\n                    return [2 /*return*/, response.data];\r\n                case 2:\r\n                    error_2 = _a.sent();\r\n                    console.error(error_2);\r\n                    return [3 /*break*/, 3];\r\n                case 3: return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n}\r\nfunction getPosts(type, options) {\r\n    if (type === void 0) { type = 'posts'; }\r\n    if (options === void 0) { options = {}; }\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var response, error_3;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 2, , 3]);\r\n                    return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"post-type/\".concat(type), { params: options })];\r\n                case 1:\r\n                    response = _a.sent();\r\n                    return [2 /*return*/, response.data];\r\n                case 2:\r\n                    error_3 = _a.sent();\r\n                    console.error(error_3);\r\n                    return [3 /*break*/, 3];\r\n                case 3: return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://react-theme/./src/app/context/DataHelper.ts?");

/***/ }),

/***/ "./src/app/context/Helper.ts":
/*!***********************************!*\
  !*** ./src/app/context/Helper.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__\": () => (/* binding */ __),\n/* harmony export */   \"upload_url\": () => (/* binding */ upload_url)\n/* harmony export */ });\nfunction is_url(url) {\r\n    var data;\r\n    try {\r\n        data = new URL(url);\r\n    }\r\n    catch (_) {\r\n        return false;\r\n    }\r\n    return data.protocol === \"http:\" || data.protocol === \"https:\";\r\n}\r\nfunction __(key) {\r\n    return key;\r\n}\r\nfunction upload_url(path) {\r\n    if (!path) {\r\n        return '';\r\n    }\r\n    if (is_url(path)) {\r\n        return path;\r\n    }\r\n    return path;\r\n}\r\n\n\n//# sourceURL=webpack://react-theme/./src/app/context/Helper.ts?");

/***/ }),

/***/ "./src/app/features/config/configAPI.ts":
/*!**********************************************!*\
  !*** ./src/app/features/config/configAPI.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchMenu\": () => (/* binding */ fetchMenu),\n/* harmony export */   \"fetchThemeConfig\": () => (/* binding */ fetchThemeConfig)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\r\nfunction fetchThemeConfig() {\r\n    var response = axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"theme/setting\");\r\n    return response;\r\n}\r\nfunction fetchMenu(menu) {\r\n    var response = axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"menus/\".concat(menu));\r\n    return response;\r\n}\r\n\n\n//# sourceURL=webpack://react-theme/./src/app/features/config/configAPI.ts?");

/***/ }),

/***/ "./src/app/features/config/configSlice.ts":
/*!************************************************!*\
  !*** ./src/app/features/config/configSlice.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"configSlice\": () => (/* binding */ configSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getMenu\": () => (/* binding */ getMenu),\n/* harmony export */   \"getThemeConfig\": () => (/* binding */ getThemeConfig),\n/* harmony export */   \"selectConfig\": () => (/* binding */ selectConfig)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _configAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configAPI */ \"./src/app/features/config/configAPI.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\nvar initialState = {\r\n    status: 'idle',\r\n};\r\nvar getThemeConfig = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('config/fetchThemeConfig', function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var response;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, (0,_configAPI__WEBPACK_IMPORTED_MODULE_1__.fetchThemeConfig)()];\r\n            case 1:\r\n                response = _a.sent();\r\n                // The value we return becomes the `fulfilled` action payload\r\n                return [2 /*return*/, response.data];\r\n        }\r\n    });\r\n}); });\r\nvar getMenu = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('config/fetchMenu', function (location) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var response;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, (0,_configAPI__WEBPACK_IMPORTED_MODULE_1__.fetchMenu)(location)];\r\n            case 1:\r\n                response = _a.sent();\r\n                // The value we return becomes the `fulfilled` action payload\r\n                return [2 /*return*/, response.data];\r\n        }\r\n    });\r\n}); });\r\nvar configSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\r\n    name: 'config',\r\n    initialState: initialState,\r\n    // The `reducers` field lets us define reducers and generate associated actions\r\n    reducers: {},\r\n    // The `extraReducers` field lets the slice handle actions defined elsewhere,\r\n    // including actions generated by createAsyncThunk or in other slices.\r\n    extraReducers: function (builder) {\r\n        builder\r\n            .addCase(getThemeConfig.pending, function (state, action) {\r\n            state.status = 'loading';\r\n        })\r\n            .addCase(getThemeConfig.fulfilled, function (state, action) {\r\n            state.status = 'succeeded';\r\n            state.config = action.payload.data;\r\n        })\r\n            .addCase(getThemeConfig.rejected, function (state, action) {\r\n            state.status = 'failed';\r\n            state.error = action.error.message;\r\n        });\r\n    }\r\n});\r\nvar selectConfig = function (state) { return state.config.config; };\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configSlice.reducer);\r\n\n\n//# sourceURL=webpack://react-theme/./src/app/features/config/configSlice.ts?");

/***/ }),

/***/ "./src/app/features/counter/counterAPI.ts":
/*!************************************************!*\
  !*** ./src/app/features/counter/counterAPI.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchCount\": () => (/* binding */ fetchCount)\n/* harmony export */ });\n// A mock function to mimic making an async request for data\r\nfunction fetchCount(amount) {\r\n    if (amount === void 0) { amount = 1; }\r\n    return new Promise(function (resolve) {\r\n        return setTimeout(function () { return resolve({ data: amount }); }, 500);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://react-theme/./src/app/features/counter/counterAPI.ts?");

/***/ }),

/***/ "./src/app/features/counter/counterSlice.ts":
/*!**************************************************!*\
  !*** ./src/app/features/counter/counterSlice.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterSlice\": () => (/* binding */ counterSlice),\n/* harmony export */   \"decrement\": () => (/* binding */ decrement),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"increment\": () => (/* binding */ increment),\n/* harmony export */   \"incrementAsync\": () => (/* binding */ incrementAsync),\n/* harmony export */   \"incrementByAmount\": () => (/* binding */ incrementByAmount),\n/* harmony export */   \"incrementIfOdd\": () => (/* binding */ incrementIfOdd),\n/* harmony export */   \"selectCount\": () => (/* binding */ selectCount)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _counterAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counterAPI */ \"./src/app/features/counter/counterAPI.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _a;\r\n\r\n\r\nvar initialState = {\r\n    value: 0,\r\n    status: 'idle',\r\n};\r\n// The function below is called a thunk and allows us to perform async logic. It\r\n// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This\r\n// will call the thunk with the `dispatch` function as the first argument. Async\r\n// code can then be executed and other actions can be dispatched. Thunks are\r\n// typically used to make async requests.\r\nvar incrementAsync = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('counter/fetchCount', function (amount) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var response;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, (0,_counterAPI__WEBPACK_IMPORTED_MODULE_1__.fetchCount)(amount)];\r\n            case 1:\r\n                response = _a.sent();\r\n                // The value we return becomes the `fulfilled` action payload\r\n                return [2 /*return*/, response.data];\r\n        }\r\n    });\r\n}); });\r\nvar counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\r\n    name: 'counter',\r\n    initialState: initialState,\r\n    // The `reducers` field lets us define reducers and generate associated actions\r\n    reducers: {\r\n        increment: function (state) {\r\n            // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\r\n            // doesn't actually mutate the state because it uses the Immer library,\r\n            // which detects changes to a \"draft state\" and produces a brand new\r\n            // immutable state based off those changes\r\n            state.value += 1;\r\n        },\r\n        decrement: function (state) {\r\n            state.value -= 1;\r\n        },\r\n        // Use the PayloadAction type to declare the contents of `action.payload`\r\n        incrementByAmount: function (state, action) {\r\n            state.value += action.payload;\r\n        },\r\n    },\r\n    // The `extraReducers` field lets the slice handle actions defined elsewhere,\r\n    // including actions generated by createAsyncThunk or in other slices.\r\n    extraReducers: function (builder) {\r\n        builder\r\n            .addCase(incrementAsync.pending, function (state) {\r\n            state.status = 'loading';\r\n        })\r\n            .addCase(incrementAsync.fulfilled, function (state, action) {\r\n            state.status = 'idle';\r\n            state.value += action.payload;\r\n        })\r\n            .addCase(incrementAsync.rejected, function (state) {\r\n            state.status = 'failed';\r\n        });\r\n    },\r\n});\r\nvar increment = (_a = counterSlice.actions, _a.increment), decrement = _a.decrement, incrementByAmount = _a.incrementByAmount;\r\n// The function below is called a selector and allows us to select a value from\r\n// the state. Selectors can also be defined inline where they're used instead of\r\n// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`\r\nvar selectCount = function (state) { return state.counter.value; };\r\n// We can also write thunks by hand, which may contain both sync and async logic.\r\n// Here's an example of conditionally dispatching actions based on current state.\r\nvar incrementIfOdd = function (amount) {\r\n    return function (dispatch, getState) {\r\n        var currentValue = selectCount(getState());\r\n        if (currentValue % 2 === 1) {\r\n            dispatch(incrementByAmount(amount));\r\n        }\r\n    };\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);\r\n\n\n//# sourceURL=webpack://react-theme/./src/app/features/counter/counterSlice.ts?");

/***/ }),

/***/ "./src/app/features/poster/posterAPI.ts":
/*!**********************************************!*\
  !*** ./src/app/features/poster/posterAPI.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchPost\": () => (/* binding */ fetchPost),\n/* harmony export */   \"fetchPosts\": () => (/* binding */ fetchPosts)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\r\nfunction fetchPost(type, slug) {\r\n    var response = axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"post-type/\".concat(type, \"/\").concat(slug));\r\n    return response;\r\n}\r\nfunction fetchPosts(type, options) {\r\n    var response = axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"post-type/\".concat(type), { params: options });\r\n    return response;\r\n}\r\n\n\n//# sourceURL=webpack://react-theme/./src/app/features/poster/posterAPI.ts?");

/***/ }),

/***/ "./src/app/features/poster/posterSlice.ts":
/*!************************************************!*\
  !*** ./src/app/features/poster/posterSlice.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getPostBySlug\": () => (/* binding */ getPostBySlug),\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts),\n/* harmony export */   \"posterSlice\": () => (/* binding */ posterSlice),\n/* harmony export */   \"selectAllPosts\": () => (/* binding */ selectAllPosts),\n/* harmony export */   \"selectPost\": () => (/* binding */ selectPost)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _posterAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posterAPI */ \"./src/app/features/poster/posterAPI.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\nvar initialState = {\r\n    posts: {},\r\n    status: 'idle',\r\n};\r\nvar getPostBySlug = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('poster/fetchPost', function (_a) {\r\n    var type = _a.type, slug = _a.slug;\r\n    return __awaiter(void 0, void 0, void 0, function () {\r\n        var response;\r\n        return __generator(this, function (_b) {\r\n            switch (_b.label) {\r\n                case 0: return [4 /*yield*/, (0,_posterAPI__WEBPACK_IMPORTED_MODULE_1__.fetchPost)(type, slug)];\r\n                case 1:\r\n                    response = _b.sent();\r\n                    return [2 /*return*/, response.data];\r\n            }\r\n        });\r\n    });\r\n});\r\nvar getPosts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('poster/fetchPosts', function (_a) {\r\n    var type = _a.type, options = _a.options;\r\n    return __awaiter(void 0, void 0, void 0, function () {\r\n        var response;\r\n        return __generator(this, function (_b) {\r\n            switch (_b.label) {\r\n                case 0: return [4 /*yield*/, (0,_posterAPI__WEBPACK_IMPORTED_MODULE_1__.fetchPosts)(type, options)];\r\n                case 1:\r\n                    response = _b.sent();\r\n                    return [2 /*return*/, response.data];\r\n            }\r\n        });\r\n    });\r\n});\r\nvar posterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\r\n    name: 'poster',\r\n    initialState: initialState,\r\n    reducers: {},\r\n    // The `extraReducers` field lets the slice handle actions defined elsewhere,\r\n    // including actions generated by createAsyncThunk or in other slices.\r\n    extraReducers: function (builder) {\r\n        builder\r\n            .addCase(getPosts.pending, function (state, action) {\r\n            state.status = 'loading';\r\n        })\r\n            .addCase(getPosts.fulfilled, function (state, action) {\r\n            state.status = 'succeeded';\r\n            // Add any fetched posts to the array\r\n            state.posts = action.payload;\r\n        })\r\n            .addCase(getPosts.rejected, function (state, action) {\r\n            state.status = 'failed';\r\n            state.error = action.error.message;\r\n        })\r\n            .addCase(getPostBySlug.fulfilled, function (state, action) {\r\n            state.status = 'succeeded';\r\n            // Add any fetched posts to the array\r\n            state.post = action.payload.data;\r\n        });\r\n    }\r\n});\r\nvar selectAllPosts = function (state) { return state.poster.posts; };\r\nvar selectPost = function (state) { return state.poster.post; };\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (posterSlice.reducer);\r\n\n\n//# sourceURL=webpack://react-theme/./src/app/features/poster/posterSlice.ts?");

/***/ }),

/***/ "./src/app/hooks.ts":
/*!**************************!*\
  !*** ./src/app/hooks.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAppDispatch\": () => (/* binding */ useAppDispatch),\n/* harmony export */   \"useAppSelector\": () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n\r\n// Use throughout your app instead of plain `useDispatch` and `useSelector`\r\nvar useAppDispatch = function () { return (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(); };\r\nvar useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\r\n\n\n//# sourceURL=webpack://react-theme/./src/app/hooks.ts?");

/***/ }),

/***/ "./src/app/routers/home.tsx":
/*!**********************************!*\
  !*** ./src/app/routers/home.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet-async */ \"react-helmet-async\");\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views */ \"./src/views/index.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./src/app/components/Layout.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loading */ \"./src/app/components/Loading.tsx\");\n/* harmony import */ var _context_DataHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/DataHelper */ \"./src/app/context/DataHelper.ts\");\n/* harmony import */ var _features_config_configSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../features/config/configSlice */ \"./src/app/features/config/configSlice.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction HomePage() {\r\n    var _a, _b;\r\n    var config = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_features_config_configSlice__WEBPACK_IMPORTED_MODULE_8__.selectConfig);\r\n    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), posts = _c[0], setPosts = _c[1];\r\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\r\n        (0,_context_DataHelper__WEBPACK_IMPORTED_MODULE_7__.getPosts)('posts').then(function (res) { return setPosts(res); });\r\n    }, []);\r\n    if (!posts)\r\n        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {});\r\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__.Helmet, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", { children: (_a = config === null || config === void 0 ? void 0 : config.general) === null || _a === void 0 ? void 0 : _a.title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", { name: \"description\", content: (_b = config === null || config === void 0 ? void 0 : config.general) === null || _b === void 0 ? void 0 : _b.description })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_views__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { posts: posts, isLoading: false })] });\r\n}\r\n\n\n//# sourceURL=webpack://react-theme/./src/app/routers/home.tsx?");

/***/ }),

/***/ "./src/app/routers/post.tsx":
/*!**********************************!*\
  !*** ./src/app/routers/post.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/app/components/Layout.tsx\");\n\r\n\r\nfunction PostPage() {\r\n    // const config = useSelector(selectConfig);\r\n    // const { type, slug } = useParams();\r\n    // const [post, setPost] = useState(null);\r\n    // if (!config?.post_types || !type) {\r\n    //   return;\r\n    // }\r\n    // const permalink: any = config?.permalinks ? config?.permalinks[type] : null;\r\n    // const postTypeConfig: any = config?.post_types[permalink?.post_type];\r\n    // useEffect(() => {\r\n    //   if (!postTypeConfig || !slug) {\r\n    //     return;\r\n    //   }\r\n    //   getPostBySlug(postTypeConfig.type, slug).then((response) => setPost(response.data));\r\n    // }, [postTypeConfig]);\r\n    // if (!config || !post) return <Loading />\r\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {});\r\n}\r\n\n\n//# sourceURL=webpack://react-theme/./src/app/routers/post.tsx?");

/***/ }),

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_counter_counterSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/counter/counterSlice */ \"./src/app/features/counter/counterSlice.ts\");\n/* harmony import */ var _features_poster_posterSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/poster/posterSlice */ \"./src/app/features/poster/posterSlice.ts\");\n/* harmony import */ var _features_config_configSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/config/configSlice */ \"./src/app/features/config/configSlice.ts\");\n\r\n\r\n\r\n\r\nvar store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\r\n    reducer: {\r\n        counter: _features_counter_counterSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n        poster: _features_poster_posterSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n        config: _features_config_configSlice__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n    },\r\n});\r\n\n\n//# sourceURL=webpack://react-theme/./src/app/store.ts?");

/***/ }),

/***/ "./src/views/components/Loading.tsx":
/*!******************************************!*\
  !*** ./src/views/components/Loading.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\n\r\nvar LoadingTemplate = function () {\r\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ style: { position: 'fixed', left: '50%', zIndex: 999 } }, { children: \"Loading...\" }));\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingTemplate);\r\n\n\n//# sourceURL=webpack://react-theme/./src/views/components/Loading.tsx?");

/***/ }),

/***/ "./src/views/footer.tsx":
/*!******************************!*\
  !*** ./src/views/footer.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\n\r\nvar TemplateFooter = function () {\r\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", __assign({ className: \"container\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", __assign({ className: \"float-end\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", __assign({ href: \"#\" }, { children: \"Back to top\" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", { children: [\"\\u00A9 2017\\u20132021 Company, Inc. \\u00B7 \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", __assign({ href: \"#\" }, { children: \"Privacy\" })), \" \\u00B7 \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", __assign({ href: \"#\" }, { children: \"Terms\" }))] })] })) }));\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateFooter);\r\n\n\n//# sourceURL=webpack://react-theme/./src/views/footer.tsx?");

/***/ }),

/***/ "./src/views/header.tsx":
/*!******************************!*\
  !*** ./src/views/header.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\n\r\n\r\nvar TemplateHeader = function () {\r\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"nav\", __assign({ className: \"navbar navbar-expand-md navbar-dark bg-dark\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"container-fluid\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, __assign({ className: \"navbar-brand\", to: '/' }, { children: \"Juzaweb\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", __assign({ className: \"navbar-toggler\", type: \"button\", \"data-bs-toggle\": \"collapse\", \"data-bs-target\": \"#navbarCollapse\", \"aria-controls\": \"navbarCollapse\", \"aria-expanded\": \"false\", \"aria-label\": \"Toggle navigation\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"navbar-toggler-icon\" }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"collapse navbar-collapse\", id: \"navbarCollapse\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", __assign({ className: \"navbar-nav me-auto mb-2 mb-md-0\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", __assign({ className: \"nav-item\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", __assign({ className: \"nav-link active\", \"aria-current\": \"page\", href: \"/\" }, { children: \"Home\" })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", __assign({ className: \"nav-item\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", __assign({ className: \"nav-link\", href: \"#\" }, { children: \"Link\" })) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", __assign({ className: \"d-flex\", action: \"/search\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", { className: \"form-control me-2\", type: \"search\", placeholder: \"Search\", \"aria-label\": \"Search\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", __assign({ className: \"btn btn-outline-success\", type: \"submit\" }, { children: \"Search\" }))] }))] }))] })) })) }) }));\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateHeader);\r\n\n\n//# sourceURL=webpack://react-theme/./src/views/header.tsx?");

/***/ }),

/***/ "./src/views/index.tsx":
/*!*****************************!*\
  !*** ./src/views/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_context_Helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/context/Helper */ \"./src/app/context/Helper.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\n\r\n\r\n\r\n\r\nvar IndexTemplate = function (props) {\r\n    var _a;\r\n    var posts = props.posts;\r\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"container marketing mt-4\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"row\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"col-lg-4\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"svg\", __assign({ className: \"bd-placeholder-img rounded-circle\", width: \"140\", height: \"140\", xmlns: \"http://www.w3.org/2000/svg\", role: \"img\", \"aria-label\": \"Placeholder: 140x140\", preserveAspectRatio: \"xMidYMid slice\", focusable: \"false\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", { children: \"Placeholder\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"rect\", { width: \"100%\", height: \"100%\", fill: \"#777\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"text\", __assign({ x: \"50%\", y: \"50%\", fill: \"#777\", dy: \".3em\" }, { children: \"140x140\" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", { children: (0,_app_context_Helper__WEBPACK_IMPORTED_MODULE_2__.__)('Heading') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { children: (0,_app_context_Helper__WEBPACK_IMPORTED_MODULE_2__.__)('Some representative placeholder content for the three columns of text below the carousel. This is the first column.') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", __assign({ className: \"btn btn-secondary\", href: \"#\" }, { children: [(0,_app_context_Helper__WEBPACK_IMPORTED_MODULE_2__.__)('View details'), \" \\u00BB\"] })) })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"col-lg-4\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"svg\", __assign({ className: \"bd-placeholder-img rounded-circle\", width: \"140\", height: \"140\", xmlns: \"http://www.w3.org/2000/svg\", role: \"img\", \"aria-label\": \"Placeholder: 140x140\", preserveAspectRatio: \"xMidYMid slice\", focusable: \"false\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", { children: \"Placeholder\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"rect\", { width: \"100%\", height: \"100%\", fill: \"#777\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"text\", __assign({ x: \"50%\", y: \"50%\", fill: \"#777\", dy: \".3em\" }, { children: \"140x140\" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", { children: (0,_app_context_Helper__WEBPACK_IMPORTED_MODULE_2__.__)('Heading') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { children: (0,_app_context_Helper__WEBPACK_IMPORTED_MODULE_2__.__)('Another exciting bit of representative placeholder content. This time, we\\'ve moved on to the second column.') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", __assign({ className: \"btn btn-secondary\", href: \"#\" }, { children: [(0,_app_context_Helper__WEBPACK_IMPORTED_MODULE_2__.__)('View details'), \" \\u00BB\"] })) })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"col-lg-4\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"svg\", __assign({ className: \"bd-placeholder-img rounded-circle\", width: \"140\", height: \"140\", xmlns: \"http://www.w3.org/2000/svg\", role: \"img\", \"aria-label\": \"Placeholder: 140x140\", preserveAspectRatio: \"xMidYMid slice\", focusable: \"false\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", { children: \"Placeholder\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"rect\", { width: \"100%\", height: \"100%\", fill: \"#777\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"text\", __assign({ x: \"50%\", y: \"50%\", fill: \"#777\", dy: \".3em\" }, { children: \"140x140\" }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", { children: (0,_app_context_Helper__WEBPACK_IMPORTED_MODULE_2__.__)('Heading') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { children: \"And lastly this, the third column of representative placeholder content.\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", __assign({ className: \"btn btn-secondary\", href: \"#\" }, { children: [(0,_app_context_Helper__WEBPACK_IMPORTED_MODULE_2__.__)('View details'), \" \\u00BB\"] })) })] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"hr\", { className: \"featurette-divider\" }), (_a = posts === null || posts === void 0 ? void 0 : posts.data) === null || _a === void 0 ? void 0 : _a.map(function (item, index) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"row featurette\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({ className: \"col-md-7\" + (index % 2 != 0 ? ' order-md-2' : '') }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", __assign({ className: \"featurette-heading\" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, __assign({ to: item.url }, { children: item.title })) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", __assign({ className: \"lead\" }, { children: item.description })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, __assign({ className: \"btn btn-secondary\", to: item.url }, { children: [(0,_app_context_Helper__WEBPACK_IMPORTED_MODULE_2__.__)('View details'), \" \\u00BB\"] })) })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", __assign({ className: \"col-md-5\" + (index % 2 != 0 ? ' order-md-1' : '') }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { src: (0,_app_context_Helper__WEBPACK_IMPORTED_MODULE_2__.upload_url)(item.thumbnail), alt: item.title, className: \"w-100\" }) }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"hr\", { className: \"featurette-divider\" })] }, item.id)); })] })) }) }));\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexTemplate);\r\n\n\n//# sourceURL=webpack://react-theme/./src/views/index.tsx?");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet-async":
/*!*************************************!*\
  !*** external "react-helmet-async" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("react-helmet-async");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server.js");
/******/ 	
/******/ })()
;