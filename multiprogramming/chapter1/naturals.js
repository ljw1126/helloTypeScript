// 1-17
function naturals(end) {
    var _a;
    if (end === void 0) { end = Infinity; }
    var n = 1;
    return _a = {
            next: function () {
                return n <= end
                    ? { value: n++, done: false }
                    : { value: undefined, done: true };
            }
        },
        _a[Symbol.iterator] = function () {
            return this;
        },
        _a;
}
var iterator = naturals(3);
for (var _i = 0, iterator_1 = iterator; _i < iterator_1.length; _i++) {
    var num = iterator_1[_i];
    console.log(num);
}
