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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore/lite'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBsbWDgcnPy89JruzHV4RXx5i-6udhbBbs\",\n    authDomain: \"database-learn-a629f.firebaseapp.com\",\n    projectId: \"database-learn-a629f\",\n    storageBucket: \"database-learn-a629f.appspot.com\",\n    messagingSenderId: \"17093392051\",\n    appId: \"1:17093392051:web:81d67f4e170b3410baa2c6\"\n};\n\n// Initialize Firebase\n\n\n \n const app = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(firebaseConfig);\n const db = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore/lite'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(app);\n \n // Get a list of cities from your database\n async function getCities(db) {\n    const citiesCol = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore/lite'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db, 'cafe');\n    const citySnapshot = await Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore/lite'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(citiesCol);\n    const cityList = citySnapshot.docs.map(doc => doc.data());\n    return cityList;\n }\n  \n \n\n//# sourceURL=webpack://firebase/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;