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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/stickyfilljs/dist/stickyfill.js":
/*!*******************************************************!*\
  !*** ../node_modules/stickyfilljs/dist/stickyfill.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*!\r\n  * Stickyfill – `position: sticky` polyfill\r\n  * v. 2.1.0 | https://github.com/wilddeer/stickyfill\r\n  * MIT License\r\n  */\r\n\r\n;(function(window, document) {\r\n    'use strict';\r\n    \r\n    /*\r\n     * 1. Check if the browser supports `position: sticky` natively or is too old to run the polyfill.\r\n     *    If either of these is the case set `seppuku` flag. It will be checked later to disable key features\r\n     *    of the polyfill, but the API will remain functional to avoid breaking things.\r\n     */\r\n    \r\n    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\r\n    \r\n    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\r\n    \r\n    var seppuku = false;\r\n    \r\n    var isWindowDefined = typeof window !== 'undefined';\r\n    \r\n    // The polyfill can’t function properly without `window` or `window.getComputedStyle`.\r\n    if (!isWindowDefined || !window.getComputedStyle) seppuku = true;\r\n    // Dont’t get in a way if the browser supports `position: sticky` natively.\r\n    else {\r\n            (function () {\r\n                var testNode = document.createElement('div');\r\n    \r\n                if (['', '-webkit-', '-moz-', '-ms-'].some(function (prefix) {\r\n                    try {\r\n                        testNode.style.position = prefix + 'sticky';\r\n                    } catch (e) {}\r\n    \r\n                    return testNode.style.position != '';\r\n                })) seppuku = true;\r\n            })();\r\n        }\r\n    \r\n    /*\r\n     * 2. “Global” vars used across the polyfill\r\n     */\r\n    var isInitialized = false;\r\n    \r\n    // Check if Shadow Root constructor exists to make further checks simpler\r\n    var shadowRootExists = typeof ShadowRoot !== 'undefined';\r\n    \r\n    // Last saved scroll position\r\n    var scroll = {\r\n        top: null,\r\n        left: null\r\n    };\r\n    \r\n    // Array of created Sticky instances\r\n    var stickies = [];\r\n    \r\n    /*\r\n     * 3. Utility functions\r\n     */\r\n    function extend(targetObj, sourceObject) {\r\n        for (var key in sourceObject) {\r\n            if (sourceObject.hasOwnProperty(key)) {\r\n                targetObj[key] = sourceObject[key];\r\n            }\r\n        }\r\n    }\r\n    \r\n    function parseNumeric(val) {\r\n        return parseFloat(val) || 0;\r\n    }\r\n    \r\n    function getDocOffsetTop(node) {\r\n        var docOffsetTop = 0;\r\n    \r\n        while (node) {\r\n            docOffsetTop += node.offsetTop;\r\n            node = node.offsetParent;\r\n        }\r\n    \r\n        return docOffsetTop;\r\n    }\r\n    \r\n    /*\r\n     * 4. Sticky class\r\n     */\r\n    \r\n    var Sticky = function () {\r\n        function Sticky(node) {\r\n            _classCallCheck(this, Sticky);\r\n    \r\n            if (!(node instanceof HTMLElement)) throw new Error('First argument must be HTMLElement');\r\n            if (stickies.some(function (sticky) {\r\n                return sticky._node === node;\r\n            })) throw new Error('Stickyfill is already applied to this node');\r\n    \r\n            this._node = node;\r\n            this._stickyMode = null;\r\n            this._active = false;\r\n    \r\n            stickies.push(this);\r\n    \r\n            this.refresh();\r\n        }\r\n    \r\n        _createClass(Sticky, [{\r\n            key: 'refresh',\r\n            value: function refresh() {\r\n                if (seppuku || this._removed) return;\r\n                if (this._active) this._deactivate();\r\n    \r\n                var node = this._node;\r\n    \r\n                /*\r\n                 * 1. Save node computed props\r\n                 */\r\n                var nodeComputedStyle = getComputedStyle(node);\r\n                var nodeComputedProps = {\r\n                    position: nodeComputedStyle.position,\r\n                    top: nodeComputedStyle.top,\r\n                    display: nodeComputedStyle.display,\r\n                    marginTop: nodeComputedStyle.marginTop,\r\n                    marginBottom: nodeComputedStyle.marginBottom,\r\n                    marginLeft: nodeComputedStyle.marginLeft,\r\n                    marginRight: nodeComputedStyle.marginRight,\r\n                    cssFloat: nodeComputedStyle.cssFloat\r\n                };\r\n    \r\n                /*\r\n                 * 2. Check if the node can be activated\r\n                 */\r\n                if (isNaN(parseFloat(nodeComputedProps.top)) || nodeComputedProps.display == 'table-cell' || nodeComputedProps.display == 'none') return;\r\n    \r\n                this._active = true;\r\n    \r\n                /*\r\n                 * 3. Check if the current node position is `sticky`. If it is, it means that the browser supports sticky positioning,\r\n                 *    but the polyfill was force-enabled. We set the node’s position to `static` before continuing, so that the node\r\n                 *    is in it’s initial position when we gather its params.\r\n                 */\r\n                var originalPosition = node.style.position;\r\n                if (nodeComputedStyle.position == 'sticky' || nodeComputedStyle.position == '-webkit-sticky') node.style.position = 'static';\r\n    \r\n                /*\r\n                 * 4. Get necessary node parameters\r\n                 */\r\n                var referenceNode = node.parentNode;\r\n                var parentNode = shadowRootExists && referenceNode instanceof ShadowRoot ? referenceNode.host : referenceNode;\r\n                var nodeWinOffset = node.getBoundingClientRect();\r\n                var parentWinOffset = parentNode.getBoundingClientRect();\r\n                var parentComputedStyle = getComputedStyle(parentNode);\r\n    \r\n                this._parent = {\r\n                    node: parentNode,\r\n                    styles: {\r\n                        position: parentNode.style.position\r\n                    },\r\n                    offsetHeight: parentNode.offsetHeight\r\n                };\r\n                this._offsetToWindow = {\r\n                    left: nodeWinOffset.left,\r\n                    right: document.documentElement.clientWidth - nodeWinOffset.right\r\n                };\r\n                this._offsetToParent = {\r\n                    top: nodeWinOffset.top - parentWinOffset.top - parseNumeric(parentComputedStyle.borderTopWidth),\r\n                    left: nodeWinOffset.left - parentWinOffset.left - parseNumeric(parentComputedStyle.borderLeftWidth),\r\n                    right: -nodeWinOffset.right + parentWinOffset.right - parseNumeric(parentComputedStyle.borderRightWidth)\r\n                };\r\n                this._styles = {\r\n                    position: originalPosition,\r\n                    top: node.style.top,\r\n                    bottom: node.style.bottom,\r\n                    left: node.style.left,\r\n                    right: node.style.right,\r\n                    width: node.style.width,\r\n                    marginTop: node.style.marginTop,\r\n                    marginLeft: node.style.marginLeft,\r\n                    marginRight: node.style.marginRight\r\n                };\r\n    \r\n                var nodeTopValue = parseNumeric(nodeComputedProps.top);\r\n                this._limits = {\r\n                    start: nodeWinOffset.top + window.pageYOffset - nodeTopValue,\r\n                    end: parentWinOffset.top + window.pageYOffset + parentNode.offsetHeight - parseNumeric(parentComputedStyle.borderBottomWidth) - node.offsetHeight - nodeTopValue - parseNumeric(nodeComputedProps.marginBottom)\r\n                };\r\n    \r\n                /*\r\n                 * 5. Ensure that the node will be positioned relatively to the parent node\r\n                 */\r\n                var parentPosition = parentComputedStyle.position;\r\n    \r\n                if (parentPosition != 'absolute' && parentPosition != 'relative') {\r\n                    parentNode.style.position = 'relative';\r\n                }\r\n    \r\n                /*\r\n                 * 6. Recalc node position.\r\n                 *    It’s important to do this before clone injection to avoid scrolling bug in Chrome.\r\n                 */\r\n                this._recalcPosition();\r\n    \r\n                /*\r\n                 * 7. Create a clone\r\n                 */\r\n                var clone = this._clone = {};\r\n                clone.node = document.createElement('div');\r\n    \r\n                // Apply styles to the clone\r\n                extend(clone.node.style, {\r\n                    width: nodeWinOffset.right - nodeWinOffset.left + 'px',\r\n                    height: nodeWinOffset.bottom - nodeWinOffset.top + 'px',\r\n                    marginTop: nodeComputedProps.marginTop,\r\n                    marginBottom: nodeComputedProps.marginBottom,\r\n                    marginLeft: nodeComputedProps.marginLeft,\r\n                    marginRight: nodeComputedProps.marginRight,\r\n                    cssFloat: nodeComputedProps.cssFloat,\r\n                    padding: 0,\r\n                    border: 0,\r\n                    borderSpacing: 0,\r\n                    fontSize: '1em',\r\n                    position: 'static'\r\n                });\r\n    \r\n                referenceNode.insertBefore(clone.node, node);\r\n                clone.docOffsetTop = getDocOffsetTop(clone.node);\r\n            }\r\n        }, {\r\n            key: '_recalcPosition',\r\n            value: function _recalcPosition() {\r\n                if (!this._active || this._removed) return;\r\n    \r\n                var stickyMode = scroll.top <= this._limits.start ? 'start' : scroll.top >= this._limits.end ? 'end' : 'middle';\r\n    \r\n                if (this._stickyMode == stickyMode) return;\r\n    \r\n                switch (stickyMode) {\r\n                    case 'start':\r\n                        extend(this._node.style, {\r\n                            position: 'absolute',\r\n                            left: this._offsetToParent.left + 'px',\r\n                            right: this._offsetToParent.right + 'px',\r\n                            top: this._offsetToParent.top + 'px',\r\n                            bottom: 'auto',\r\n                            width: 'auto',\r\n                            marginLeft: 0,\r\n                            marginRight: 0,\r\n                            marginTop: 0\r\n                        });\r\n                        break;\r\n    \r\n                    case 'middle':\r\n                        extend(this._node.style, {\r\n                            position: 'fixed',\r\n                            left: this._offsetToWindow.left + 'px',\r\n                            right: this._offsetToWindow.right + 'px',\r\n                            top: this._styles.top,\r\n                            bottom: 'auto',\r\n                            width: 'auto',\r\n                            marginLeft: 0,\r\n                            marginRight: 0,\r\n                            marginTop: 0\r\n                        });\r\n                        break;\r\n    \r\n                    case 'end':\r\n                        extend(this._node.style, {\r\n                            position: 'absolute',\r\n                            left: this._offsetToParent.left + 'px',\r\n                            right: this._offsetToParent.right + 'px',\r\n                            top: 'auto',\r\n                            bottom: 0,\r\n                            width: 'auto',\r\n                            marginLeft: 0,\r\n                            marginRight: 0\r\n                        });\r\n                        break;\r\n                }\r\n    \r\n                this._stickyMode = stickyMode;\r\n            }\r\n        }, {\r\n            key: '_fastCheck',\r\n            value: function _fastCheck() {\r\n                if (!this._active || this._removed) return;\r\n    \r\n                if (Math.abs(getDocOffsetTop(this._clone.node) - this._clone.docOffsetTop) > 1 || Math.abs(this._parent.node.offsetHeight - this._parent.offsetHeight) > 1) this.refresh();\r\n            }\r\n        }, {\r\n            key: '_deactivate',\r\n            value: function _deactivate() {\r\n                var _this = this;\r\n    \r\n                if (!this._active || this._removed) return;\r\n    \r\n                this._clone.node.parentNode.removeChild(this._clone.node);\r\n                delete this._clone;\r\n    \r\n                extend(this._node.style, this._styles);\r\n                delete this._styles;\r\n    \r\n                // Check whether element’s parent node is used by other stickies.\r\n                // If not, restore parent node’s styles.\r\n                if (!stickies.some(function (sticky) {\r\n                    return sticky !== _this && sticky._parent && sticky._parent.node === _this._parent.node;\r\n                })) {\r\n                    extend(this._parent.node.style, this._parent.styles);\r\n                }\r\n                delete this._parent;\r\n    \r\n                this._stickyMode = null;\r\n                this._active = false;\r\n    \r\n                delete this._offsetToWindow;\r\n                delete this._offsetToParent;\r\n                delete this._limits;\r\n            }\r\n        }, {\r\n            key: 'remove',\r\n            value: function remove() {\r\n                var _this2 = this;\r\n    \r\n                this._deactivate();\r\n    \r\n                stickies.some(function (sticky, index) {\r\n                    if (sticky._node === _this2._node) {\r\n                        stickies.splice(index, 1);\r\n                        return true;\r\n                    }\r\n                });\r\n    \r\n                this._removed = true;\r\n            }\r\n        }]);\r\n    \r\n        return Sticky;\r\n    }();\r\n    \r\n    /*\r\n     * 5. Stickyfill API\r\n     */\r\n    \r\n    \r\n    var Stickyfill = {\r\n        stickies: stickies,\r\n        Sticky: Sticky,\r\n    \r\n        forceSticky: function forceSticky() {\r\n            seppuku = false;\r\n            init();\r\n    \r\n            this.refreshAll();\r\n        },\r\n        addOne: function addOne(node) {\r\n            // Check whether it’s a node\r\n            if (!(node instanceof HTMLElement)) {\r\n                // Maybe it’s a node list of some sort?\r\n                // Take first node from the list then\r\n                if (node.length && node[0]) node = node[0];else return;\r\n            }\r\n    \r\n            // Check if Stickyfill is already applied to the node\r\n            // and return existing sticky\r\n            for (var i = 0; i < stickies.length; i++) {\r\n                if (stickies[i]._node === node) return stickies[i];\r\n            }\r\n    \r\n            // Create and return new sticky\r\n            return new Sticky(node);\r\n        },\r\n        add: function add(nodeList) {\r\n            // If it’s a node make an array of one node\r\n            if (nodeList instanceof HTMLElement) nodeList = [nodeList];\r\n            // Check if the argument is an iterable of some sort\r\n            if (!nodeList.length) return;\r\n    \r\n            // Add every element as a sticky and return an array of created Sticky instances\r\n            var addedStickies = [];\r\n    \r\n            var _loop = function _loop(i) {\r\n                var node = nodeList[i];\r\n    \r\n                // If it’s not an HTMLElement – create an empty element to preserve 1-to-1\r\n                // correlation with input list\r\n                if (!(node instanceof HTMLElement)) {\r\n                    addedStickies.push(void 0);\r\n                    return 'continue';\r\n                }\r\n    \r\n                // If Stickyfill is already applied to the node\r\n                // add existing sticky\r\n                if (stickies.some(function (sticky) {\r\n                    if (sticky._node === node) {\r\n                        addedStickies.push(sticky);\r\n                        return true;\r\n                    }\r\n                })) return 'continue';\r\n    \r\n                // Create and add new sticky\r\n                addedStickies.push(new Sticky(node));\r\n            };\r\n    \r\n            for (var i = 0; i < nodeList.length; i++) {\r\n                var _ret2 = _loop(i);\r\n    \r\n                if (_ret2 === 'continue') continue;\r\n            }\r\n    \r\n            return addedStickies;\r\n        },\r\n        refreshAll: function refreshAll() {\r\n            stickies.forEach(function (sticky) {\r\n                return sticky.refresh();\r\n            });\r\n        },\r\n        removeOne: function removeOne(node) {\r\n            // Check whether it’s a node\r\n            if (!(node instanceof HTMLElement)) {\r\n                // Maybe it’s a node list of some sort?\r\n                // Take first node from the list then\r\n                if (node.length && node[0]) node = node[0];else return;\r\n            }\r\n    \r\n            // Remove the stickies bound to the nodes in the list\r\n            stickies.some(function (sticky) {\r\n                if (sticky._node === node) {\r\n                    sticky.remove();\r\n                    return true;\r\n                }\r\n            });\r\n        },\r\n        remove: function remove(nodeList) {\r\n            // If it’s a node make an array of one node\r\n            if (nodeList instanceof HTMLElement) nodeList = [nodeList];\r\n            // Check if the argument is an iterable of some sort\r\n            if (!nodeList.length) return;\r\n    \r\n            // Remove the stickies bound to the nodes in the list\r\n    \r\n            var _loop2 = function _loop2(i) {\r\n                var node = nodeList[i];\r\n    \r\n                stickies.some(function (sticky) {\r\n                    if (sticky._node === node) {\r\n                        sticky.remove();\r\n                        return true;\r\n                    }\r\n                });\r\n            };\r\n    \r\n            for (var i = 0; i < nodeList.length; i++) {\r\n                _loop2(i);\r\n            }\r\n        },\r\n        removeAll: function removeAll() {\r\n            while (stickies.length) {\r\n                stickies[0].remove();\r\n            }\r\n        }\r\n    };\r\n    \r\n    /*\r\n     * 6. Setup events (unless the polyfill was disabled)\r\n     */\r\n    function init() {\r\n        if (isInitialized) {\r\n            return;\r\n        }\r\n    \r\n        isInitialized = true;\r\n    \r\n        // Watch for scroll position changes and trigger recalc/refresh if needed\r\n        function checkScroll() {\r\n            if (window.pageXOffset != scroll.left) {\r\n                scroll.top = window.pageYOffset;\r\n                scroll.left = window.pageXOffset;\r\n    \r\n                Stickyfill.refreshAll();\r\n            } else if (window.pageYOffset != scroll.top) {\r\n                scroll.top = window.pageYOffset;\r\n                scroll.left = window.pageXOffset;\r\n    \r\n                // recalc position for all stickies\r\n                stickies.forEach(function (sticky) {\r\n                    return sticky._recalcPosition();\r\n                });\r\n            }\r\n        }\r\n    \r\n        checkScroll();\r\n        window.addEventListener('scroll', checkScroll);\r\n    \r\n        // Watch for window resizes and device orientation changes and trigger refresh\r\n        window.addEventListener('resize', Stickyfill.refreshAll);\r\n        window.addEventListener('orientationchange', Stickyfill.refreshAll);\r\n    \r\n        //Fast dirty check for layout changes every 500ms\r\n        var fastCheckTimer = void 0;\r\n    \r\n        function startFastCheckTimer() {\r\n            fastCheckTimer = setInterval(function () {\r\n                stickies.forEach(function (sticky) {\r\n                    return sticky._fastCheck();\r\n                });\r\n            }, 500);\r\n        }\r\n    \r\n        function stopFastCheckTimer() {\r\n            clearInterval(fastCheckTimer);\r\n        }\r\n    \r\n        var docHiddenKey = void 0;\r\n        var visibilityChangeEventName = void 0;\r\n    \r\n        if ('hidden' in document) {\r\n            docHiddenKey = 'hidden';\r\n            visibilityChangeEventName = 'visibilitychange';\r\n        } else if ('webkitHidden' in document) {\r\n            docHiddenKey = 'webkitHidden';\r\n            visibilityChangeEventName = 'webkitvisibilitychange';\r\n        }\r\n    \r\n        if (visibilityChangeEventName) {\r\n            if (!document[docHiddenKey]) startFastCheckTimer();\r\n    \r\n            document.addEventListener(visibilityChangeEventName, function () {\r\n                if (document[docHiddenKey]) {\r\n                    stopFastCheckTimer();\r\n                } else {\r\n                    startFastCheckTimer();\r\n                }\r\n            });\r\n        } else startFastCheckTimer();\r\n    }\r\n    \r\n    if (!seppuku) init();\r\n    \r\n    /*\r\n     * 7. Expose Stickyfill\r\n     */\r\n    if ( true && module.exports) {\r\n        module.exports = Stickyfill;\r\n    } else if (isWindowDefined) {\r\n        window.Stickyfill = Stickyfill;\r\n    }\r\n    \r\n})(window, document);\n\n//# sourceURL=webpack:///../node_modules/stickyfilljs/dist/stickyfill.js?");

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.scss */ \"./components/Footer/footer.scss\");\n/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Footer = function Footer(_ref) {\n  var text = _ref.text;\n\n  var _this = document.createElement('footer');\n\n  _this.classList.add('footer');\n\n  _this.innerHTML = \"\\n    <div class=\\\"footer__holder\\\">\\n      <p class=\\\"footer__text\\\">\".concat(text, \"</p>\\n    </div>\\n  \");\n  return _this;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./components/Footer/Footer.js?");

/***/ }),

/***/ "./components/Footer/footer.scss":
/*!***************************************!*\
  !*** ./components/Footer/footer.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/Footer/footer.scss?");

/***/ }),

/***/ "./components/Form/Form.js":
/*!*********************************!*\
  !*** ./components/Form/Form.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scripts/actions */ \"./scripts/actions.js\");\n/* harmony import */ var _form_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.scss */ \"./components/Form/form.scss\");\n/* harmony import */ var _form_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Form = function Form() {\n  var _this = document.createElement('form');\n\n  _this.classList.add('form');\n\n  var _input = document.createElement('input');\n\n  _input.classList.add('form__input');\n\n  _input.placeholder = 'Type task...';\n\n  _input.setAttribute('name', 'input');\n\n  _input.setAttribute('type', 'text');\n\n  var _button = document.createElement('button');\n\n  _button.classList.add('form__button');\n\n  _button.setAttribute('name', 'add');\n\n  _button.setAttribute('type', 'submit');\n\n  _button.innerText = 'Add';\n\n  _this.append(_input, _button);\n\n  _this.addEventListener('submit', function (event) {\n    event.preventDefault();\n\n    if (!_input.value.length) {\n      return;\n    }\n\n    var item = {\n      id: Date.now(),\n      text: _input.value\n    };\n    _scripts_actions__WEBPACK_IMPORTED_MODULE_0__[\"addTask\"](item);\n    _input.value = '';\n  });\n\n  return _this;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n//# sourceURL=webpack:///./components/Form/Form.js?");

/***/ }),

/***/ "./components/Form/form.scss":
/*!***********************************!*\
  !*** ./components/Form/form.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/Form/form.scss?");

/***/ }),

/***/ "./components/FormWrapper/FormWrapper.js":
/*!***********************************************!*\
  !*** ./components/FormWrapper/FormWrapper.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Form/Form */ \"./components/Form/Form.js\");\n/* harmony import */ var _form_wrapper_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-wrapper.scss */ \"./components/FormWrapper/form-wrapper.scss\");\n/* harmony import */ var _form_wrapper_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_wrapper_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar FormWrapper = function FormWrapper() {\n  var _this = document.createElement('section');\n\n  _this.classList.add('form-wrapper');\n\n  var _holder = document.createElement('div');\n\n  _holder.classList.add('form-wrapper__holder');\n\n  var form = new _Form_Form__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n  _this.appendChild(_holder).appendChild(form);\n\n  return _this;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormWrapper);\n\n//# sourceURL=webpack:///./components/FormWrapper/FormWrapper.js?");

/***/ }),

/***/ "./components/FormWrapper/form-wrapper.scss":
/*!**************************************************!*\
  !*** ./components/FormWrapper/form-wrapper.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/FormWrapper/form-wrapper.scss?");

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ \"./components/Header/header.scss\");\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nvar classes = ['header', 'sticky'];\n\nvar Header = function Header(_ref) {\n  var title = _ref.title;\n\n  var _this = document.createElement('header');\n\n  classes.forEach(function (value) {\n    return _this.classList.add(value);\n  });\n  _this.innerHTML = \"\\n    <div class=\\\"header__holder\\\">\\n      <h1 class=\\\"header__title\\\">\".concat(title, \"</h1>\\n    </div>\\n  \");\n  return _this;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./components/Header/Header.js?");

/***/ }),

/***/ "./components/Header/header.scss":
/*!***************************************!*\
  !*** ./components/Header/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/Header/header.scss?");

/***/ }),

/***/ "./components/Main/Main.js":
/*!*********************************!*\
  !*** ./components/Main/Main.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tasks_Tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Tasks/Tasks */ \"./components/Tasks/Tasks.js\");\n/* harmony import */ var _FormWrapper_FormWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormWrapper/FormWrapper */ \"./components/FormWrapper/FormWrapper.js\");\n/* harmony import */ var _scripts_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scripts/actions */ \"./scripts/actions.js\");\n\n\n\n\nvar Main = function Main() {\n  var main = document.createElement('main');\n  main.classList.add('main');\n  var list = _scripts_actions__WEBPACK_IMPORTED_MODULE_2__[\"getTasks\"]();\n  var formWrapper = new _FormWrapper_FormWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  var tasks = new _Tasks_Tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"](list);\n  main.append(formWrapper, tasks);\n  return main;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\n//# sourceURL=webpack:///./components/Main/Main.js?");

/***/ }),

/***/ "./components/RemoveButton/RemoveButton.js":
/*!*************************************************!*\
  !*** ./components/RemoveButton/RemoveButton.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scripts/actions */ \"./scripts/actions.js\");\n/* harmony import */ var _remove_button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove-button.scss */ \"./components/RemoveButton/remove-button.scss\");\n/* harmony import */ var _remove_button_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_remove_button_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar RemoveButton = function RemoveButton(id) {\n  var _this = document.createElement('button');\n\n  _this.setAttribute('name', 'remove');\n\n  _this.setAttribute('type', 'button');\n\n  _this.classList.add('remove-button');\n\n  _this.innerHTML = \"\\n    <icon class=\\\"remove-button__icon\\\"></icon>\\n  \";\n\n  _this.addEventListener('click', function () {\n    _scripts_actions__WEBPACK_IMPORTED_MODULE_0__[\"removeTask\"](id);\n  });\n\n  return _this;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RemoveButton);\n\n//# sourceURL=webpack:///./components/RemoveButton/RemoveButton.js?");

/***/ }),

/***/ "./components/RemoveButton/remove-button.scss":
/*!****************************************************!*\
  !*** ./components/RemoveButton/remove-button.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/RemoveButton/remove-button.scss?");

/***/ }),

/***/ "./components/Task/Task.js":
/*!*********************************!*\
  !*** ./components/Task/Task.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RemoveButton_RemoveButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../RemoveButton/RemoveButton */ \"./components/RemoveButton/RemoveButton.js\");\n/* harmony import */ var _scripts_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scripts/actions */ \"./scripts/actions.js\");\n/* harmony import */ var _task_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.scss */ \"./components/Task/task.scss\");\n/* harmony import */ var _task_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_task_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Task = function Task(_ref) {\n  var text = _ref.text,\n      isFinished = _ref.isFinished,\n      _ref$id = _ref.id,\n      id = _ref$id === void 0 ? Date.now() : _ref$id;\n\n  var _this = document.createElement('li');\n\n  _this.id = id;\n  _this.draggable = true;\n\n  _this.classList.add('task');\n\n  var _label = document.createElement('label');\n\n  _label.classList.add('task__box');\n\n  var _text = document.createElement('span');\n\n  _text.classList.add('task__text');\n\n  _text.innerText = text;\n  var checked = isFinished ? 'checked' : '';\n  var input = new Input({\n    id: id,\n    checked: checked\n  });\n\n  _label.append(input, _text);\n\n  var button = new _RemoveButton_RemoveButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"](id);\n\n  _this.append(_label, button);\n\n  _this.addEventListener(\"dragstart\", dragStart);\n\n  _this.addEventListener(\"dragend\", dragEnd);\n\n  _this.addEventListener(\"dragover\", dragOver);\n\n  return _this;\n};\n\nvar Input = function Input(_ref2) {\n  var id = _ref2.id,\n      checked = _ref2.checked;\n\n  var _this = document.createElement('input');\n\n  _this.setAttribute('type', 'checkbox');\n\n  _this.classList.add('task__checkbox');\n\n  _this.checked = checked;\n\n  _this.addEventListener('change', function () {\n    var isFinished = _this.checked;\n    _scripts_actions__WEBPACK_IMPORTED_MODULE_1__[\"editTask\"]({\n      id: id,\n      isFinished: isFinished\n    });\n  });\n\n  return _this;\n};\n\nfunction dragStart(event) {\n  event.currentTarget.classList.add(\"drag\");\n}\n\nfunction dragEnd(event) {\n  event.currentTarget.classList.remove(\"drag\");\n  var arr = _scripts_actions__WEBPACK_IMPORTED_MODULE_1__[\"getTasks\"]();\n  var newArr = [];\n  var tasksElements = document.querySelectorAll(\".task\");\n  tasksElements.forEach(function (element, index) {\n    var item = arr.find(function (item) {\n      return item.id === +element.id;\n    });\n    newArr[index] = item;\n  });\n  _scripts_actions__WEBPACK_IMPORTED_MODULE_1__[\"setTasks\"](newArr);\n}\n\nfunction dragOver(event) {\n  event.preventDefault();\n  var currentTarget = event.currentTarget;\n  var dragged = document.querySelector(\".drag\");\n  var next = currentTarget === dragged.nextElementSibling ? currentTarget.nextElementSibling : currentTarget;\n  var tasksList = document.querySelector(\".tasks__list\");\n  tasksList.insertBefore(dragged, next);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\n\n//# sourceURL=webpack:///./components/Task/Task.js?");

/***/ }),

/***/ "./components/Task/task.scss":
/*!***********************************!*\
  !*** ./components/Task/task.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/Task/task.scss?");

/***/ }),

/***/ "./components/Tasks/Tasks.js":
/*!***********************************!*\
  !*** ./components/Tasks/Tasks.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Task_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Task/Task */ \"./components/Task/Task.js\");\n/* harmony import */ var _tasks_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.scss */ \"./components/Tasks/tasks.scss\");\n/* harmony import */ var _tasks_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tasks_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Tasks = function Tasks(list) {\n  var _this = document.createElement('section');\n\n  _this.classList.add('tasks');\n\n  var _holder = document.createElement('div');\n\n  _holder.classList.add('tasks__holder');\n\n  var _list = document.createElement('ul');\n\n  _list.classList.add('tasks__list');\n\n  list.map(function (item) {\n    var task = new _Task_Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](item);\n    return _list.appendChild(task);\n  });\n  document.addEventListener('addTask', function (_ref) {\n    var detail = _ref.detail;\n    var task = detail.task;\n    var newTask = new _Task_Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](task);\n\n    _list.insertBefore(newTask, _list.firstChild);\n  });\n  document.addEventListener('removeTask', function (_ref2) {\n    var detail = _ref2.detail;\n    var taskId = detail.taskId;\n    var task = document.getElementById(taskId);\n\n    _list.removeChild(task);\n  });\n\n  _this.appendChild(_holder).appendChild(_list);\n\n  return _this;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasks);\n\n//# sourceURL=webpack:///./components/Tasks/Tasks.js?");

/***/ }),

/***/ "./components/Tasks/tasks.scss":
/*!*************************************!*\
  !*** ./components/Tasks/tasks.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./components/Tasks/tasks.scss?");

/***/ }),

/***/ "./scripts/actions.js":
/*!****************************!*\
  !*** ./scripts/actions.js ***!
  \****************************/
/*! exports provided: addTask, removeTask, editTask, getTasks, setTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTask\", function() { return addTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTask\", function() { return removeTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editTask\", function() { return editTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTasks\", function() { return getTasks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTasks\", function() { return setTasks; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction addTask(task) {\n  var tasksArr = getTasks();\n  tasksArr.unshift(task);\n  setTasks(tasksArr);\n  var event = new CustomEvent('addTask', {\n    detail: {\n      task: task\n    }\n  });\n  document.dispatchEvent(event);\n}\n;\nfunction removeTask(id) {\n  var tasksArr = getTasks();\n  var newTasksArr = tasksArr.filter(function (task) {\n    return task.id !== +id;\n  });\n  setTasks(newTasksArr);\n  var event = new CustomEvent('removeTask', {\n    detail: {\n      taskId: id\n    }\n  });\n  document.dispatchEvent(event);\n}\n;\nfunction editTask(newTask) {\n  var tasksArr = getTasks();\n  var id = newTask.id;\n  var newTasksArr = tasksArr.map(function (item) {\n    if (item.id === +id) {\n      return _objectSpread(_objectSpread({}, item), newTask);\n    }\n\n    ;\n    return item;\n  });\n  setTasks(newTasksArr);\n}\nfunction getTasks() {\n  var tasks = localStorage.getItem('tasks') || [];\n\n  try {\n    return JSON.parse(tasks);\n  } catch (_unused) {\n    return [];\n  }\n}\nfunction setTasks(tasksArr) {\n  var tasks = JSON.stringify(tasksArr);\n  localStorage.setItem('tasks', tasks);\n}\n\n//# sourceURL=webpack:///./scripts/actions.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Header/Header */ \"./components/Header/Header.js\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer/Footer */ \"./components/Footer/Footer.js\");\n/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Main/Main */ \"./components/Main/Main.js\");\n/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polyfills */ \"./scripts/polyfills.js\");\n\n\n\n\nvar App = document.getElementById('root');\nvar main = new _components_Main_Main__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nvar header = new _components_Header_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  title: 'TODO List'\n});\nvar footer = new _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  text: 'by Z. Muhamediarova'\n});\nApp.append(header, main, footer);\n\n//# sourceURL=webpack:///./scripts/index.js?");

/***/ }),

/***/ "./scripts/polyfills.js":
/*!******************************!*\
  !*** ./scripts/polyfills.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var stickyfilljs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stickyfilljs */ \"../node_modules/stickyfilljs/dist/stickyfill.js\");\n/* harmony import */ var stickyfilljs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stickyfilljs__WEBPACK_IMPORTED_MODULE_0__);\n// polyfills\n\nvar elements = document.querySelectorAll('.sticky');\nstickyfilljs__WEBPACK_IMPORTED_MODULE_0___default.a.add(elements);\n\n//# sourceURL=webpack:///./scripts/polyfills.js?");

/***/ })

/******/ });