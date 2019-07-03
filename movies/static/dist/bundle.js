/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./movies/static/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./movies/static/src/favorites.js":
/*!****************************************!*\
  !*** ./movies/static/src/favorites.js ***!
  \****************************************/
/*! exports provided: handleAddFavorite, handleGetFavorites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleAddFavorite\", function() { return handleAddFavorite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleGetFavorites\", function() { return handleGetFavorites; });\n/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests */ \"./movies/static/src/requests.js\");\n\n\nconst PATH = '/favorites';\n\nconst handleAddFavorite = () => {\n    document.getElementById('add-to-favorites').onclick = e => {\n        const payload = {\n            \"title\": document.querySelector('.movie-title').textContent,\n            \"image\": document.querySelector('.movie-image').getAttribute('src'),\n            \"plot\": document.querySelector('.movie-plot').textContent\n        };\n        _requests__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(PATH, payload, handleSuccessResponse);\n    }\n\n    const handleSuccessResponse = response => {\n        const jsonResponse = JSON.parse(response);\n        if (jsonResponse[\"added\"]) {\n            document.querySelector('.added-to-favorites').style.display = 'block';\n        }\n    };\n};\n\nconst handleGetFavorites = () => {\n    document.getElementById('get-favorites').onclick = e => {\n        _requests__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(PATH, handleFavoritesList);\n    }\n\n    const handleFavoritesList = response => {\n        const favoritesList = document.querySelector('.favorites-list');\n        const favorites = JSON.parse(response)[\"favorites\"];\n\n        favorites.forEach(favorite => {\n            const listItem = document.createElement('li');\n            const title = document.createElement('h2');\n            title.textContent = favorite.title;\n            const image = document.createElement('img');\n            image.setAttribute('src', favorite.image);\n            const plot = document.createElement('p');\n            plot.textContent = favorite.plot;\n\n            listItem.appendChild(title);\n            listItem.appendChild(image);\n            listItem.appendChild(plot);\n            favoritesList.appendChild(listItem);\n        });\n    }\n}\n\n\n\n\n//# sourceURL=webpack:///./movies/static/src/favorites.js?");

/***/ }),

/***/ "./movies/static/src/index.js":
/*!************************************!*\
  !*** ./movies/static/src/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _omdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./omdb */ \"./movies/static/src/omdb.js\");\n/* harmony import */ var _favorites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites */ \"./movies/static/src/favorites.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    Object(_omdb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    Object(_favorites__WEBPACK_IMPORTED_MODULE_1__[\"handleGetFavorites\"])();\n    Object(_favorites__WEBPACK_IMPORTED_MODULE_1__[\"handleAddFavorite\"])();\n});\n\n\n//# sourceURL=webpack:///./movies/static/src/index.js?");

/***/ }),

/***/ "./movies/static/src/omdb.js":
/*!***********************************!*\
  !*** ./movies/static/src/omdb.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests */ \"./movies/static/src/requests.js\");\n\n\nconst handleMovieSearch = () => {\n    document.getElementById('submit-button').onclick = e => {\n        e.preventDefault();\n        document.querySelector('.movie-section').style.display = 'none';\n\n        const path = document.getElementById('movie-search-form').getAttribute('action');\n        const movieNameInput = document.getElementById('movie-name');\n        const movieName = movieNameInput.value;\n\n        if (!movieName) {\n            movieNameInput.setAttribute('placeholder', 'Enter a movie name');\n            return;\n        }\n        if (movieNameInput.getAttribute('placeholder')) {\n            movieNameInput.setAttribute('placeholder', '');\n        }\n\n        const payload = { \"movie_name\": movieName };\n        _requests__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(path, payload, handleSearchResult);\n    }\n};\n\nconst handleSearchResult = response => {\n    const movieData = JSON.parse(response);\n    const movieSection = document.querySelector('.movie-section');\n    const errorSection = document.querySelector('.error-section');\n\n    if (movieData['has_error']) {\n        movieSection.style.display = 'none';\n        document.querySelector('.error-message').textContent = movieData['error'];\n        document.querySelector('.error-image').setAttribute(\n            'src', '../static/src/not-found.svg'\n        );\n        errorSection.style.display = 'block';\n    }\n    else {\n        errorSection.style.display = 'none';\n        document.querySelector('.movie-title').textContent = movieData['Title'];\n        document.querySelector('.movie-image').setAttribute('src', movieData['Poster']);\n        document.querySelector('.movie-plot').textContent = movieData['Plot'];\n        movieSection.style.display = 'block';\n        document.getElementById('movie-name').value = '';\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handleMovieSearch);\n\n\n//# sourceURL=webpack:///./movies/static/src/omdb.js?");

/***/ }),

/***/ "./movies/static/src/requests.js":
/*!***************************************!*\
  !*** ./movies/static/src/requests.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst makeRequest = (function() {\n    const __request = (method, path, payload, successCallback) => {\n        const xhr = new XMLHttpRequest();\n        xhr.onreadystatechange = function() {\n            if (xhr.readyState === 4 && xhr.status === 200) {\n                successCallback(xhr.responseText);\n            }\n        }\n        xhr.open(method, path);\n        xhr.setRequestHeader('Content-Type', 'application/json');\n        payload ? xhr.send(JSON.stringify(payload)) : xhr.send()\n    }\n\n    return {\n        get: (path, successCallback) => {\n            return __request('GET', path, null, successCallback);\n        },\n        post: (path, payload, successCallback) => {\n            return __request('POST', path, payload, successCallback);\n        },\n        delete: (path, payload, successCallback) => {\n            return __request('DELETE', path, payload, successCallback);\n        }\n    };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeRequest);\n\n\n//# sourceURL=webpack:///./movies/static/src/requests.js?");

/***/ })

/******/ });