"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/protocols";
exports.ids = ["vendor-chunks/protocols"];
exports.modules = {

/***/ "../../.yarn/cache/protocols-npm-2.0.1-e2bc74d1c1-4a9bef6aa0.zip/node_modules/protocols/lib/index.js":
/*!***********************************************************************************************************!*\
  !*** ../../.yarn/cache/protocols-npm-2.0.1-e2bc74d1c1-4a9bef6aa0.zip/node_modules/protocols/lib/index.js ***!
  \***********************************************************************************************************/
/***/ ((module) => {

eval("\n\n/**\n * protocols\n * Returns the protocols of an input url.\n *\n * @name protocols\n * @function\n * @param {String|URL} input The input url (string or `URL` instance)\n * @param {Boolean|Number} first If `true`, the first protocol will be returned. If number, it will represent the zero-based index of the protocols array.\n * @return {Array|String} The array of protocols or the specified protocol.\n */\nmodule.exports = function protocols(input, first) {\n\n    if (first === true) {\n        first = 0;\n    }\n\n    var prots = \"\";\n    if (typeof input === \"string\") {\n        try {\n            prots = new URL(input).protocol;\n        } catch (e) {}\n    } else if (input && input.constructor === URL) {\n        prots = input.protocol;\n    }\n\n    var splits = prots.split(/\\:|\\+/).filter(Boolean);\n\n    if (typeof first === \"number\") {\n        return splits[first];\n    }\n\n    return splits;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLnlhcm4vY2FjaGUvcHJvdG9jb2xzLW5wbS0yLjAuMS1lMmJjNzRkMWMxLTRhOWJlZjZhYTAuemlwL25vZGVfbW9kdWxlcy9wcm90b2NvbHMvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixXQUFXLGdCQUFnQjtBQUMzQixZQUFZLGNBQWM7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac2JqYW5nL2RvY3MvLi4vLi4vLnlhcm4vY2FjaGUvcHJvdG9jb2xzLW5wbS0yLjAuMS1lMmJjNzRkMWMxLTRhOWJlZjZhYTAuemlwL25vZGVfbW9kdWxlcy9wcm90b2NvbHMvbGliL2luZGV4LmpzPzZlZDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogcHJvdG9jb2xzXG4gKiBSZXR1cm5zIHRoZSBwcm90b2NvbHMgb2YgYW4gaW5wdXQgdXJsLlxuICpcbiAqIEBuYW1lIHByb3RvY29sc1xuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ3xVUkx9IGlucHV0IFRoZSBpbnB1dCB1cmwgKHN0cmluZyBvciBgVVJMYCBpbnN0YW5jZSlcbiAqIEBwYXJhbSB7Qm9vbGVhbnxOdW1iZXJ9IGZpcnN0IElmIGB0cnVlYCwgdGhlIGZpcnN0IHByb3RvY29sIHdpbGwgYmUgcmV0dXJuZWQuIElmIG51bWJlciwgaXQgd2lsbCByZXByZXNlbnQgdGhlIHplcm8tYmFzZWQgaW5kZXggb2YgdGhlIHByb3RvY29scyBhcnJheS5cbiAqIEByZXR1cm4ge0FycmF5fFN0cmluZ30gVGhlIGFycmF5IG9mIHByb3RvY29scyBvciB0aGUgc3BlY2lmaWVkIHByb3RvY29sLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHByb3RvY29scyhpbnB1dCwgZmlyc3QpIHtcblxuICAgIGlmIChmaXJzdCA9PT0gdHJ1ZSkge1xuICAgICAgICBmaXJzdCA9IDA7XG4gICAgfVxuXG4gICAgdmFyIHByb3RzID0gXCJcIjtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcm90cyA9IG5ldyBVUkwoaW5wdXQpLnByb3RvY29sO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH0gZWxzZSBpZiAoaW5wdXQgJiYgaW5wdXQuY29uc3RydWN0b3IgPT09IFVSTCkge1xuICAgICAgICBwcm90cyA9IGlucHV0LnByb3RvY29sO1xuICAgIH1cblxuICAgIHZhciBzcGxpdHMgPSBwcm90cy5zcGxpdCgvXFw6fFxcKy8pLmZpbHRlcihCb29sZWFuKTtcblxuICAgIGlmICh0eXBlb2YgZmlyc3QgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIHNwbGl0c1tmaXJzdF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwbGl0cztcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../.yarn/cache/protocols-npm-2.0.1-e2bc74d1c1-4a9bef6aa0.zip/node_modules/protocols/lib/index.js\n");

/***/ })

};
;