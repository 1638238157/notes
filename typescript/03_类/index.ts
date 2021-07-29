class Animal {
    private name: string;
    protected age: number
    public constructor(theName: string,theAge: number) {
        this.name = theName;
        this.age = theAge;
    };
    public move(distanceInMeters: number = 0){
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

let animal = new Animal('cat',20);


/**
 * public 默认 公共的
 * private 私有的  外部不可以访问
 * protected 和 private 唯一不同的是 可以在派生类中使用
 * readonly 只读
 */

// 存取器
// class Employee {
//     private _fullName: string;
//     get fullName(): string {
//         return this._fullName;
//     }
//     set fullName(newName: string){
//         this._fullName = newName;
//     }
// }

// 抽象类  一般不会直接实例化。不同于接口，抽象类可以包含成员的实现细节。 abstract

// 把类当做接口
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};