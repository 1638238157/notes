// 交叉类型 （Intersection Types）

// 联合类型 使用（ | ）分割每个类型

let b: string | number = 'string';
b = 123

// 类型保护

// parameterName is Type 自定义类型保护

// interface Bird {
//     fly: string,
//     layEggs: number
// }

// interface Fish{
//     swim: number,
//     layEggs: number
// }

// function getSmallPet(): Fish | Bird{

// }

// let pet = getSmallPet();

// function isFish(pet: Fish | Bird):pet is Fish{
//     return (pet as Fish).swim !== undefined
// }

// if(isFish(pet)){
//     pet.swim
// }else{
//     pet.fly
// }

// typeof 类型保护
function isNumber(x: any): x is number {
    return typeof x === "number";
}
function isString(x: any): x is string {
    return typeof x === "string";
}

// instanceof 类型保护

// 编译器不能去除 null 或 undefined，可以使用类型断言手动去除。语法是添加 ！后缀。例如：identifier!
// function fixed(name: string | null): string {
//     function postfix(epithet: string){
//         return name!.charAt(0) + '. then ' + epithet;
//     }
//     name = name || 'Bob';
//     return postfix('grent');
// }

// ** 类型别名 **
// 给类型起个新的名字。类型别名有时和接口很想，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。
// 注意：类型别名不能出现在声明右侧的任何地方   type Yikes = Array<Yikes>; 是错误的
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    return n();
}

type Container<T> = { value: T };

/**
 * 类型和别名的区别
 * 1. 接口创建了一个新的名字，可以在任何地方使用。类型别名并不创建新名字，比如。错误信息就不会使用别名。
 * 2. 类型别名不能被 extends 和 implements (自己也不能extends 和 implements其他类型)。
 */

// 如果无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名。

// 字符串字面量类型   允许你指定字符串必须的固定值。

type Easing = "ease-in" | "ease-out" | "ease-in-out";

// 数字字面量类型
function numResult(): 1 | 2 | 3 {
    return 1
}

// keyof 获取对象当中的所有key
interface Person {
    name: string;
    age: number;
    location: string;
}

type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[];  // number | "length" | "push" | "concat" | ...
type K3 = keyof { [x: string]: Person };  // string | number