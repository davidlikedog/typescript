function contains<T>(arr: Array<T>, item: T, start: number = 0): boolean {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

let ss: Boolean = contains([1, 2, 3, 4], 3, 3);
console.log(ss);