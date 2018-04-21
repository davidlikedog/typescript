function reduceRight(arr: Array<any>, func: (item: Array<string | number>, item2: Array<string | number>) => Array<string | number>): Array<string | number> {
    let ss: Array<string | number> = [];
    typeof arr[arr.length - 1] !== "object" ? ss[0] = arr[arr.length - 1] : ss[0] = arr[arr.length - 1][0];
    for (let i: number = arr.length - 1; i > 0; i--) {
        ss = func(ss, arr[i - 1]);
    }
    return ss;
}

let sss: Array<any> = reduceRight([['you'], ['love'], ['I'], 123, 'fsda'], function (item1: Array<any>, item2: Array<any>): Array<number | string> {
    return item1.concat(item2);
});

console.log(sss);

let sc: Array<string | number | boolean> = [123, '321', false];

class Animal {
    name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);


class Grid {
    static origin = {x: 0, y: 0};

    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

    constructor(public scale: number) {
    }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));