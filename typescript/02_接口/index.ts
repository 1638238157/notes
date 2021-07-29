/**
 * 接口 （interface）
 * ? 可选参数
 * readonly 只读属性
 * ReadonlyArray<T> 只读数组
 * [propName: string]: any 可以有任意数量的属性，未单独定义的属性类型都为 any
 */

// 作为变量 使用 const   作为属性 使用  readonly

interface LabelledValue {
    label: string,
    size?: number,
    readonly x?: number,
    [propName: string]: any
}

function printLabel(labelledValue: LabelledValue): void{
    // labelledValue.x
    console.log(labelledValue.label);
}

let myObj = {size: 10,label:'Size 10 Object',x: 1};
printLabel(myObj);

let a: Array<number> = [1,2,3,4,5];
let ro: ReadonlyArray<number> = a;

// 把整个ReadonlyA
a = ro as Array<number>

// 索引类型
interface ReadonlyStringArray{
    readonly [index: number]: string
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Manllory"   不能设置 myArray[2]，因为索引签名是只读的

// implements 实现一个新的类，从父类或者接口实现所有的属性和方法，同时可以重写属性和方法，包含一些新的功能
// extends 继承，一个新的接口或者类，从父类或者接口继承所有的属性和方法，不可以重写属性，但可以重写方法。