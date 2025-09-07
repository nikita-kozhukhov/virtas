/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/app/store/store.ts":
/*!********************************!*\
  !*** ./src/app/store/store.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {}\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9hcHAvc3RvcmUvc3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBa0Q7QUFFM0MsTUFBTUMsUUFBUUQsZ0VBQWNBLENBQUM7SUFDbENFLFNBQVMsQ0FBQztBQUNaLEdBQUciLCJzb3VyY2VzIjpbIkQ6XFx3b3JrXFxuZXdfcHJvamVjdFxcQnJlS29cXHNyY1xcYXBwXFxzdG9yZVxcc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7fSxcbn0pO1xuXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT47XG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDtcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInN0b3JlIiwicmVkdWNlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/app/store/store.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./src/app/styles/index.scss":
/*!***********************************!*\
  !*** ./src/app/styles/index.scss ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/store */ \"(pages-dir-node)/./src/app/store/store.ts\");\n/* harmony import */ var widgets_main_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widgets/main-layout */ \"(pages-dir-node)/./src/widgets/main-layout/index.ts\");\n/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/index.scss */ \"(pages-dir-node)/./src/app/styles/index.scss\");\n/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_index_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_1__, store_store__WEBPACK_IMPORTED_MODULE_2__]);\n([react_redux__WEBPACK_IMPORTED_MODULE_1__, store_store__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n        store: store_store__WEBPACK_IMPORTED_MODULE_2__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(widgets_main_layout__WEBPACK_IMPORTED_MODULE_3__.MainLayout, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\new_project\\\\BreKo\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\work\\\\new_project\\\\BreKo\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\work\\\\new_project\\\\BreKo\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFSDtBQUVhO0FBSXRCO0FBRVosU0FBU0csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM5RCxxQkFDRSw4REFBQ0wsaURBQVFBO1FBQUNDLE9BQU9BLDhDQUFLQTtrQkFDcEIsNEVBQUNDLDJEQUFVQTtzQkFDVCw0RUFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyIsInNvdXJjZXMiOlsiRDpcXHdvcmtcXG5ld19wcm9qZWN0XFxCcmVLb1xcc3JjXFxwYWdlc1xcX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnc3RvcmUvc3RvcmUnO1xuXG5pbXBvcnQgeyBNYWluTGF5b3V0IH0gZnJvbSAnd2lkZ2V0cy9tYWluLWxheW91dCc7XG5cbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5cbmltcG9ydCAnc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8TWFpbkxheW91dD5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9NYWluTGF5b3V0PlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJzdG9yZSIsIk1haW5MYXlvdXQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/widgets/footer/ui/Footer.module.scss":
/*!**************************************************!*\
  !*** ./src/widgets/footer/ui/Footer.module.scss ***!
  \**************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"footer\": \"Footer_footer__sdq5y\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy93aWRnZXRzL2Zvb3Rlci91aS9Gb290ZXIubW9kdWxlLnNjc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIkQ6XFx3b3JrXFxuZXdfcHJvamVjdFxcQnJlS29cXHNyY1xcd2lkZ2V0c1xcZm9vdGVyXFx1aVxcRm9vdGVyLm1vZHVsZS5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfX3NkcTV5XCJcbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/widgets/footer/ui/Footer.module.scss\n");

/***/ }),

/***/ "(pages-dir-node)/./src/widgets/footer/ui/Footer.tsx":
/*!******************************************!*\
  !*** ./src/widgets/footer/ui/Footer.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Footer: () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.scss */ \"(pages-dir-node)/./src/widgets/footer/ui/Footer.module.scss\");\n/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Footer = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().footer),\n        children: [\n            \"\\xa9 \",\n            new Date().getFullYear(),\n            \" My App. Все права защищены.\"\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\work\\\\new_project\\\\BreKo\\\\src\\\\widgets\\\\footer\\\\ui\\\\Footer.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy93aWRnZXRzL2Zvb3Rlci91aS9Gb290ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQztBQUVuQyxNQUFNQyxTQUFTO0lBQ3BCLHFCQUNFLDhEQUFDQztRQUFPQyxXQUFXSCxtRUFBYTs7WUFBRTtZQUM3QixJQUFJSSxPQUFPQyxXQUFXO1lBQUc7Ozs7Ozs7QUFHbEMsRUFBRSIsInNvdXJjZXMiOlsiRDpcXHdvcmtcXG5ld19wcm9qZWN0XFxCcmVLb1xcc3JjXFx3aWRnZXRzXFxmb290ZXJcXHVpXFxGb290ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb290ZXIubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgIMKpIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IE15IEFwcC4g0JLRgdC1INC/0YDQsNCy0LAg0LfQsNGJ0LjRidC10L3Riy5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiRm9vdGVyIiwiZm9vdGVyIiwiY2xhc3NOYW1lIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/widgets/footer/ui/Footer.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/widgets/header/index.ts":
/*!*************************************!*\
  !*** ./src/widgets/header/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: () => (/* reexport safe */ _ui_Header__WEBPACK_IMPORTED_MODULE_0__.Header)\n/* harmony export */ });\n/* harmony import */ var _ui_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/Header */ \"(pages-dir-node)/./src/widgets/header/ui/Header.tsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy93aWRnZXRzL2hlYWRlci9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxQyIsInNvdXJjZXMiOlsiRDpcXHdvcmtcXG5ld19wcm9qZWN0XFxCcmVLb1xcc3JjXFx3aWRnZXRzXFxoZWFkZXJcXGluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IEhlYWRlciB9IGZyb20gJy4vdWkvSGVhZGVyJztcbiJdLCJuYW1lcyI6WyJIZWFkZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/widgets/header/index.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./src/widgets/header/ui/Header.module.scss":
/*!**************************************************!*\
  !*** ./src/widgets/header/ui/Header.module.scss ***!
  \**************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"Header_header__swxTv\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy93aWRnZXRzL2hlYWRlci91aS9IZWFkZXIubW9kdWxlLnNjc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIkQ6XFx3b3JrXFxuZXdfcHJvamVjdFxcQnJlS29cXHNyY1xcd2lkZ2V0c1xcaGVhZGVyXFx1aVxcSGVhZGVyLm1vZHVsZS5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcIkhlYWRlcl9oZWFkZXJfX3N3eFR2XCJcbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/widgets/header/ui/Header.module.scss\n");

/***/ }),

/***/ "(pages-dir-node)/./src/widgets/header/ui/Header.tsx":
/*!******************************************!*\
  !*** ./src/widgets/header/ui/Header.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.scss */ \"(pages-dir-node)/./src/widgets/header/ui/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Header = ({ title })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header),\n        children: [\n            title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\new_project\\\\BreKo\\\\src\\\\widgets\\\\header\\\\ui\\\\Header.tsx\",\n                lineNumber: 12,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: \"Главная\"\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\new_project\\\\BreKo\\\\src\\\\widgets\\\\header\\\\ui\\\\Header.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/about\",\n                children: \"О нас\"\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\new_project\\\\BreKo\\\\src\\\\widgets\\\\header\\\\ui\\\\Header.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\work\\\\new_project\\\\BreKo\\\\src\\\\widgets\\\\header\\\\ui\\\\Header.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy93aWRnZXRzL2hlYWRlci91aS9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZCO0FBRWE7QUFNbkMsTUFBTUUsU0FBUyxDQUFDLEVBQUVDLEtBQUssRUFBZTtJQUMzQyxxQkFDRSw4REFBQ0M7UUFBT0MsV0FBV0osbUVBQWE7O1lBQzdCRSx1QkFBUyw4REFBQ0c7MEJBQUlIOzs7Ozs7MEJBQ2YsOERBQUNILGtEQUFJQTtnQkFBQ08sTUFBSzswQkFBSTs7Ozs7OzBCQUNmLDhEQUFDUCxrREFBSUE7Z0JBQUNPLE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUcxQixFQUFFIiwic291cmNlcyI6WyJEOlxcd29ya1xcbmV3X3Byb2plY3RcXEJyZUtvXFxzcmNcXHdpZGdldHNcXGhlYWRlclxcdWlcXEhlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuc2Nzcyc7XG5cbnR5cGUgSGVhZGVyUHJvcHMgPSB7XG4gIHRpdGxlPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICh7IHRpdGxlIH06IEhlYWRlclByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAge3RpdGxlICYmIDxoMT57dGl0bGV9PC9oMT59XG4gICAgICA8TGluayBocmVmPVwiL1wiPtCT0LvQsNCy0L3QsNGPPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPtCeINC90LDRgTwvTGluaz5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiTGluayIsInN0eWxlcyIsIkhlYWRlciIsInRpdGxlIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaDEiLCJocmVmIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/widgets/header/ui/Header.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/widgets/main-layout/index.ts":
/*!******************************************!*\
  !*** ./src/widgets/main-layout/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainLayout: () => (/* reexport safe */ _ui_MainLayout__WEBPACK_IMPORTED_MODULE_0__.MainLayout)\n/* harmony export */ });\n/* harmony import */ var _ui_MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/MainLayout */ \"(pages-dir-node)/./src/widgets/main-layout/ui/MainLayout.tsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy93aWRnZXRzL21haW4tbGF5b3V0L2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZDIiwic291cmNlcyI6WyJEOlxcd29ya1xcbmV3X3Byb2plY3RcXEJyZUtvXFxzcmNcXHdpZGdldHNcXG1haW4tbGF5b3V0XFxpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBNYWluTGF5b3V0IH0gZnJvbSAnLi91aS9NYWluTGF5b3V0JztcbiJdLCJuYW1lcyI6WyJNYWluTGF5b3V0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/widgets/main-layout/index.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./src/widgets/main-layout/ui/MainLayout.module.scss":
/*!***********************************************************!*\
  !*** ./src/widgets/main-layout/ui/MainLayout.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"MainLayout_layout__0UcUk\",\n\t\"main\": \"MainLayout_main__RwO8G\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy93aWRnZXRzL21haW4tbGF5b3V0L3VpL01haW5MYXlvdXQubW9kdWxlLnNjc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiRDpcXHdvcmtcXG5ld19wcm9qZWN0XFxCcmVLb1xcc3JjXFx3aWRnZXRzXFxtYWluLWxheW91dFxcdWlcXE1haW5MYXlvdXQubW9kdWxlLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGF5b3V0XCI6IFwiTWFpbkxheW91dF9sYXlvdXRfXzBVY1VrXCIsXG5cdFwibWFpblwiOiBcIk1haW5MYXlvdXRfbWFpbl9fUndPOEdcIlxufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/widgets/main-layout/ui/MainLayout.module.scss\n");

/***/ }),

/***/ "(pages-dir-node)/./src/widgets/main-layout/ui/MainLayout.tsx":
/*!***************************************************!*\
  !*** ./src/widgets/main-layout/ui/MainLayout.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainLayout: () => (/* binding */ MainLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var widgets_footer_ui_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widgets/footer/ui/Footer */ \"(pages-dir-node)/./src/widgets/footer/ui/Footer.tsx\");\n/* harmony import */ var widgets_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widgets/header */ \"(pages-dir-node)/./src/widgets/header/index.ts\");\n/* harmony import */ var _MainLayout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainLayout.module.scss */ \"(pages-dir-node)/./src/widgets/main-layout/ui/MainLayout.module.scss\");\n/* harmony import */ var _MainLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MainLayout_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst MainLayout = ({ children })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_MainLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().layout),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(widgets_header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                fileName: \"D:\\\\work\\\\new_project\\\\BreKo\\\\src\\\\widgets\\\\main-layout\\\\ui\\\\MainLayout.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_MainLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: children\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\new_project\\\\BreKo\\\\src\\\\widgets\\\\main-layout\\\\ui\\\\MainLayout.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(widgets_footer_ui_Footer__WEBPACK_IMPORTED_MODULE_1__.Footer, {}, void 0, false, {\n                fileName: \"D:\\\\work\\\\new_project\\\\BreKo\\\\src\\\\widgets\\\\main-layout\\\\ui\\\\MainLayout.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\work\\\\new_project\\\\BreKo\\\\src\\\\widgets\\\\main-layout\\\\ui\\\\MainLayout.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy93aWRnZXRzL21haW4tbGF5b3V0L3VpL01haW5MYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRWtEO0FBQ1Y7QUFFTTtBQU12QyxNQUFNRyxhQUFhLENBQUMsRUFBRUMsUUFBUSxFQUFtQjtJQUN0RCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV0osdUVBQWdCOzswQkFDOUIsOERBQUNELGtEQUFNQTs7Ozs7MEJBQ1AsOERBQUNNO2dCQUFLRCxXQUFXSixxRUFBYzswQkFBR0U7Ozs7OzswQkFDbEMsOERBQUNKLDREQUFNQTs7Ozs7Ozs7Ozs7QUFHYixFQUFFIiwic291cmNlcyI6WyJEOlxcd29ya1xcbmV3X3Byb2plY3RcXEJyZUtvXFxzcmNcXHdpZGdldHNcXG1haW4tbGF5b3V0XFx1aVxcTWFpbkxheW91dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICd3aWRnZXRzL2Zvb3Rlci91aS9Gb290ZXInO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnd2lkZ2V0cy9oZWFkZXInO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWFpbkxheW91dC5tb2R1bGUuc2Nzcyc7XG5cbnR5cGUgTWFpbkxheW91dFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGNvbnN0IE1haW5MYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiBNYWluTGF5b3V0UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydsYXlvdXQnXX0+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlc1snbWFpbiddfT57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJGb290ZXIiLCJIZWFkZXIiLCJzdHlsZXMiLCJNYWluTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/widgets/main-layout/ui/MainLayout.tsx\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();