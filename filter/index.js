//进来和出去类型一致，因此用一个泛型参数
function filter(arr, func) {
    var cc = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            cc.push(arr[i]);
        }
    }
    return cc;
}
console.log(filter([1, 2, 3, 4, 5], function (item) {
    return item % 2 === 0;
}));
console.log(filter(['ab', 'cd', 'efg'], function (item) {
    return item.length >= 3;
}));
function ff(arr, func) {
    var bb = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            bb.push(arr[i]);
        }
    }
    return bb;
}
console.log(ff(['123', '1233', '1'], function (item) {
    return item.length >= 3;
}));
