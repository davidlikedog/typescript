function reduce(arr, func) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (i === 0) {
            result[0] = func(arr[i], arr[i + 1]);
        } else if (i !== 0 && i + 1 < arr.length) {
            result[0] = func(result[0], arr[i + 1])
        }
    }
    return result[0];
}

var ss = reduce([1, 2, 3, 3, 3], function (item1, item2) {
    return item1 +'sss'+ item2;
});
console.log(ss);

