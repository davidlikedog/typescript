function some(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            return true;
        }
    }
    return false;
}
var ss = some([0, undefined]);
console.log(ss);
