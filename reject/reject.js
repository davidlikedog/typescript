function reject(arr, func) {
    var result = [];
    for(var i=0;i<arr.length;i++){
        if(!func(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

var ss = reject([1, 2, 3, 4, 5], function (item) {
    return item % 2 === 0;
});
console.log(ss);
