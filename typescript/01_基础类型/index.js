var isDone = false;
var num = 6;
var _name = 'bob';
var list = [1, 2, 3];
var list2 = [1, '2'];
// 元祖 tuple
var x;
x = ['hello', 10];
// 枚举 enum
// 默认 从0 开始为元素编号
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// console.log(c);
var colorName = Color[2];
// console.log(colorName);
// 字符串 枚举
var orderStatusDesc;
(function (orderStatusDesc) {
    orderStatusDesc["UN_PAYED"] = "\u672A\u652F\u4ED8";
    orderStatusDesc["PAYED"] = "\u5DF2\u652F\u4ED8";
    orderStatusDesc["CANCELED"] = "\u5DF2\u53D6\u6D88";
    orderStatusDesc["CLOSED"] = "\u5DF2\u5173\u95ED";
})(orderStatusDesc || (orderStatusDesc = {}));
// any 可以是任何类型
var notSure = 4;
notSure = '123';
notSure = true;
// void 没有任何类型
function warnUser() {
    console.log('This is my warning message');
}
// 声明一个 void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null
var unusable = undefined;
// Null 和 Undefined  各有自己的类型。
var u = undefined;
var n = null;
// 指定了 --strictNullChecks null 和 undefined 只能赋值给 void 和它们各自。
// Never 类型表示的是那些永不存在的值的类型
// Object
// 类型断言   告诉编译器 “相信我，我知道我自己在干什么”
// 1. 尖括号 断言形式
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
