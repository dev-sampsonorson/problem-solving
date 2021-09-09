/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!***************************!*\
  !*** ./src/prefix-sum.ts ***!
  \***************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
function rangeSum(data, startIndex, endIndex) {
    var _a, _b;
    for (var i = 0; i < data.length; i++) {
        data[i] = data[i] + ((_a = data[i - 1]) !== null && _a !== void 0 ? _a : 0);
        // data[i] = i === 0 ? data[i] : data[i] + data[i - 1];
    }
    var sum = data[endIndex] - ((_b = data[startIndex - 1]) !== null && _b !== void 0 ? _b : 0);
    return "(" + startIndex + " - " + endIndex + ") => " + sum;
}
console.log(rangeSum([6, 3, -2, 4, -1, 0, -5], 2, 6));
console.log(rangeSum([6, 3, -2, 4, -1, 0, -5], 3, 5));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZml4LXN1bS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2JsZW0tc29sdmluZy8uL3NyYy9wcmVmaXgtc3VtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIHJhbmdlU3VtKGRhdGEsIHN0YXJ0SW5kZXgsIGVuZEluZGV4KSB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZGF0YVtpXSA9IGRhdGFbaV0gKyAoKF9hID0gZGF0YVtpIC0gMV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IDApO1xyXG4gICAgICAgIC8vIGRhdGFbaV0gPSBpID09PSAwID8gZGF0YVtpXSA6IGRhdGFbaV0gKyBkYXRhW2kgLSAxXTtcclxuICAgIH1cclxuICAgIHZhciBzdW0gPSBkYXRhW2VuZEluZGV4XSAtICgoX2IgPSBkYXRhW3N0YXJ0SW5kZXggLSAxXSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogMCk7XHJcbiAgICByZXR1cm4gXCIoXCIgKyBzdGFydEluZGV4ICsgXCIgLSBcIiArIGVuZEluZGV4ICsgXCIpID0+IFwiICsgc3VtO1xyXG59XHJcbmNvbnNvbGUubG9nKHJhbmdlU3VtKFs2LCAzLCAtMiwgNCwgLTEsIDAsIC01XSwgMiwgNikpO1xyXG5jb25zb2xlLmxvZyhyYW5nZVN1bShbNiwgMywgLTIsIDQsIC0xLCAwLCAtNV0sIDMsIDUpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9