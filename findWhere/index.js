function findWhere(arr, map) {
    var result = [];
    var isFind = false;
    for (var i = 0; i < arr.length; i++) {
        isFind = true;
        for (var key in map) {
            isFind = arr[i][key] === map[key];
            if (!isFind) {
                break;
            }
        }
        if (isFind) {
            result.push(arr[i]);
            return result;
        }
    }
}
var sss = findWhere([{ age: 13, name: 'david', sex: 'boys' }, { age: 12, name: 'tom', sex: 'boy' }, {
        age: 12,
        name: 'david',
        sex: 'boy3'
    }], {
    name: 'david',
    age: 12
});
console.log(sss);
