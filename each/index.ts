function each<T>(arr:Array<T>,func:(item:T)=>void){
    for (let i:number=0;i<arr.length;i++) {
        func(arr[i]);
    }
}

each([1,2,3],function (item) {
    console.log(item);
});