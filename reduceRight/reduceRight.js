function reduceRight(arr, func) {
    var ss = arr[arr.length - 1];
    for (var i = arr.length - 1; i > 0; i--) {
        ss = func(ss, arr[i - 1]);
    }
    return ss;
}

var asc = reduceRight([[1, 2, 3], [3, 2, 1], [2, 2, 2], ['ok']], function (item1, item2) {
    return item1.concat(item2);
});

console.log(asc);
