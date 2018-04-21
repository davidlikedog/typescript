function reduce<T,U>(arr: Array<T>, func: (item1: any, item2: T) => U): U {
    let result: Array<U>=[];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            result[0] = func(arr[i], arr[i + 1]);
        } else if (i !== 0 && i < arr.length - 1) {
            result[0] = func(result[0], arr[i + 1]);
        }
    }
    return result[0];
}


let ss: any = reduce([1, 2, 3], function<T> (item1: any, item2: T): any {
    return item1 +' love '+ item2;
});

console.log(ss);