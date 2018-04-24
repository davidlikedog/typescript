function contains(arr, item) {
    var start = arguments[2] ? arguments[2] : 0;
    if(start>=arr.length){
        start = 0;
    }
    for (var i = start; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

var ss = contains([1, 2, 3], 2, 2);
console.log(ss);