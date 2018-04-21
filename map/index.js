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
function map(arr, func) {
    var b = [];
    for (var i = 0; i < arr.length; i++) {
        b.push(func(arr[i]));
    }
    return b;
}
var cc = map([1, 2, 3, 4], function (item) {
    return item * 3;
});
console.log(cc);
var cc1 = map([1, 2, 3, 4], function (item) {
    return 'test' + item;
});
console.log(cc1);
function zz(arr, func) {
    var cc = [];
    for (var i = 0; i < arr.length; i++) {
        cc.push(func(arr[i]));
    }
    return cc;
}
var xxx = zz([4, 2, 3], function (item) {
    return item * 3;
});
console.log(xxx);
