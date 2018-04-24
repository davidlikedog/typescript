function findWhere<T>(arr: Array<T>, map: T): Array<T> {
    let result: Array<T> = [];
    let isFind: boolean = false;
    for (let i = 0; i < arr.length; i++) {
        isFind = true;
        for(let key in map){
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

let sss: Array<object> = findWhere([{age: 13, name: 'david', sex: 'boys'}, {age: 12, name: 'tom', sex: 'boy'}, {
    age: 12,
    name: 'david',
    sex: 'boy3'
}], {
    name: 'david',
    age: 12
});

console.log(sss);