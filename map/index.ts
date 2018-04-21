// let a: Array<number> = [1, 2, 3, 4, 5];
// let b: Array<number> = [];
//
// function fff(item: number): number {
//     return item * 3;
// }
//
// for (let i = 0; i < a.length; i++) {
//     b.push(fff(a[i]));
// }
// console.log(b);
//
// function map(arr: Array<number>, func: (number: number) => any): Array<any> {
//     let b: Array<any> = [];
//     for (let i: number = 0; i < arr.length; i++) {
//         b.push(func(arr[i]));
//     }
//     return b;
// }
//进来和出去类型不一致，因此用两个泛型参数
function map<T, U>(arr: Array<T>, func: (item: T) => U): Array<U> {
    let b: Array<U> = [];
    for (let i: number = 0; i < arr.length; i++) {
        b.push(func(arr[i]));
    }
    return b;
}

let cc: Array<number> = map([1, 2, 3, 4], function (item: number): number {
    return item * 3;
});
console.log(cc);

let cc1: Array<string> = map([1, 2, 3, 4], function (item: number): string {
    return 'test' + item;
});
console.log(cc1);

function zz<T, U>(arr: Array<T>, func: (item: T) => U):Array<U> {
    let cc: Array<U> = [];
    for (let i:number = 0; i < arr.length; i++) {
        cc.push(func(arr[i]));
    }
    return cc;
}

let xxx: Array<number> = zz([4, 2, 3], function (item: number): number {
    return item * 3;
});
console.log(xxx);

