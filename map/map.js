function map(arr, func) {
    var b = [];
    for (var i = 0; i < arr.length; i++) {
        b.push(func(arr[i]));
    }
    return b;
}

console.log(map([1, 2, 3, 4], function (item) {
    return item * 2;
}));

console.log(map([1, 2, 3, 4], function (item) {
    return 'test' + item;
}));
