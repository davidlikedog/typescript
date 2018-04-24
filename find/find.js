function find(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
}

var aa = find([1, 2, 3, 4], function (item) {
    return item % 2 === 0;
});

console.log(aa);