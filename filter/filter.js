function filter(arr, func) {
    var b = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            b.push(arr[i]);
        }
    }
    return b;
}


console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], function (item) {
    return item % 2 === 0;
}));

console.log(filter(['ab','cd','efg'], function (item) {
    return item.length >= 3;
}));