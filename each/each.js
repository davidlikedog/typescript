function each(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

each([1, 2, 3, 4], function (item) {
    console.log(item);
});