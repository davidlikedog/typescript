function some<T>(arr: Array<T>): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            return true;
        }
    }
    return false;
}

let ss: boolean = some([0, '123', undefined]);
console.log(ss);