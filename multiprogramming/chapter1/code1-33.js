"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var code1_32_1 = require("./code1-32");
var array = [1, 2, 3, 4];
var mapped = (0, code1_32_1.map)(function (x) { return x * 2; }, array);
var iterator2 = mapped[Symbol.iterator]();
console.log(mapped.next().value); // 2
console.log(iterator2.next().value); // 4
console.log(__spreadArray([], iterator2, true)); // [6, 8]
