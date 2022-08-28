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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n  const element = document.createElement('div');\n\n  element.classList.add = 'contact';\n\n  element.innerText = 'Here you can find the contact details of our friterie.';\n\n  return element;\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home() {\n  const element = document.createElement('div');\n  element.classList.add = 'main';\n\n  const para1 = document.createElement('p');\n  para1.innerText = 'Welcome to the Fry Shack, where you\\'ll get the best French fries in the state!\\n Take a moment to explore the menu, with our wide range of \"vleesekes\" and sauces (some of them homemade!).';\n  \n  element.appendChild(para1);\n  const para2 = document.createElement('p');\n  para2.innerText = 'If you\\'re ever in Antwerp, OH, make sure you drop by. You won\\'t regret it!';\n  \n  element.appendChild(para2);\n  return element;\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ \"./src/logo.png\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconst content = document.getElementById('content');\n\ncreateHeader();\ncreateMainSection();\naddClickEvents();\n\nfunction createHeader() {\n  const header = document.createElement('div');\n  header.id = 'header';\n\n  // add header logo\n  const myLogo = new Image();\n  myLogo.src = _logo_png__WEBPACK_IMPORTED_MODULE_0__;\n  myLogo.id = 'logo';\n  header.appendChild(myLogo);\n\n  // add header text\n  const headerTxt = document.createElement('h1');\n  headerTxt.innerText = 'The Fry Shack';\n  header.appendChild(headerTxt);\n\n  content.appendChild(header);\n}\n\nfunction createMainSection() {\n  const main = document.createElement('div');\n  main.id = 'main_section';\n\n  main.appendChild(nav());\n  main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.home)());\n\n  content.appendChild(main);\n}\n\nfunction nav() {\n  const nav = document.createElement('nav');\n\n  nav.classList.add = 'nav';\n\n  const navArray = ['Home', 'Menu', 'Contact'];\n\n  for (let i = 0; i < navArray.length; i++) {\n    const element = document.createElement('div');\n    element.id = `${navArray[i]}`;\n    element.innerText = navArray[i];\n    nav.appendChild(element);\n  }\n\n  return nav;\n}\n\nfunction addClickEvents() {\n  const main = document.getElementById('main_section');\n  const btnHome = document.getElementById('Home');\n  const btnMenu = document.getElementById('Menu');\n  const btnContact = document.getElementById('Contact');\n\n  // add event listeners\n  btnHome.addEventListener('click', () => {\n    main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.home)());\n  });\n  btnMenu.addEventListener('click', () => {\n    main.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu)())\n  });\n  btnContact.addEventListener('click', () => {\n    main.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__.contact)())\n  });\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n  const element = document.createElement('div');\n\n  element.classList.add = 'menu';\n\n  element.innerText = 'This is the menu of our friterie.';\n\n  return element;\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4852a813e1c454921e5c.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/logo.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;