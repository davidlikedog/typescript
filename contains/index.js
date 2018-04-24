function contains(arr, item, start) {
    if (start === void 0) { start = 0; }
    for (var i = start; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}
var ss = contains([1, 2, 3, 4], 3, 3);
console.log(ss);
