function find<T>(arr: Array<T>, func: (item: T) => boolean): T {
    for (let i = 0; i < arr.length; i++) {
        if(func(arr[i])){
            return arr[i];
        }
    }
}

let ss: number|string = find([1, 2, 3, 4], function (item) {
    return item % 2 === 0;
});
console.log(ss);