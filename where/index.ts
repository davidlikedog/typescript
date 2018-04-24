function where<T>(arr:Array<T>, map:object):Array<T> {
    let result: Array<T> = [];
    let isFind: boolean = false;
    for(let i=0;i<arr.length;i++){
        isFind = false;
        for(let key in map){
            isFind = arr[i][key] === map[key];
            if (!isFind) {
                break;
            }
        }
        if (isFind) {
            result.push(arr[i]);
        }
    }
    return result;
}

let ss: Array<object> = where([{age: 12, name: 'david', sex: "boy"}, {age: 12, name: 'tom', sex: "boy"}], {
    name: "david",
    sex: "boy"
});
console.log(ss);