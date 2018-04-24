function reject<T>(arr: Array<T>, func: (item: T) => boolean): Array<T> {
    let result: Array<T> = [];
    for(let i=0;i<arr.length;i++){
        if (!func(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

let sss: Array<number> = reject([1, 2, 3, 4, 5], function (item) {
    return item % 2 === 0;
});
console.log(sss);