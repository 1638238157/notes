/**
 * number
 * boolean
 * string
 * array
 * tuple 元组
 * enum 枚举
 * any
 * never
 * undefined
 * null
 * void
 * object
 * 类型断言 as / <>
 */




let isDone: boolean = false;

let num: number = 6;

let _name: string = 'bob';

let list: number[] = [1,2,3];
let list2: Array<string | number> = [1,'2']

// 元祖 tuple
let x: [string,number];
x = ['hello', 10];

// 枚举 enum
// 默认 从0 开始为元素编号
enum Color {Red,Green,Blue}
let c: Color = Color.Green;
// console.log(c);
let colorName: string = Color[2];
// console.log(colorName);

// 字符串 枚举
enum orderStatusDesc {
    UN_PAYED = '未支付',
    PAYED = '已支付',
    CANCELED = '已取消',
    CLOSED = '已关闭'
}

// any 可以是任何类型
let notSure: any = 4;
notSure = '123';
notSure = true

// void 没有任何类型
function warnUser(): void {
    console.log('This is my warning message');
}

// 声明一个 void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null
let unusable: void = undefined;

// Null 和 Undefined  各有自己的类型。
let u: undefined = undefined;
let n: null = null;

// 指定了 --strictNullChecks null 和 undefined 只能赋值给 void 和它们各自。

// Never 类型表示的是那些永不存在的值的类型

// Object

// 类型断言   告诉编译器 “相信我，我知道我自己在干什么”
// 1. 尖括号 断言形式
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// 2. as 断言语法
strLength = (someValue as string).length;

// 在ts中使用 jsx 时，只有 as 语法断言是被允许的。
