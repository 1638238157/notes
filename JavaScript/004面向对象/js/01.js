//通过实例 创建 对象
// let person = new Object();
// person.name = "Nicholas";
// person.age = 29;
// person.job = "Software Engineer";
// person.sayName = function(){
//     console.log(this.name);
// }

//通过字面量创建对象
// let person = {
//     name: "Nichola",
//     age: 29,
//     job: "Software Engineer",
//     sayName(){
//         console.log(this.name)
//     }
// }

/**
 * js 为了将某个特性标识为内部特性，规范会用两个中括号把特性的名称括起来，比如 [[Enumerable]]
 * 1. 数据属性
 *    数据属性包含一个保存数据值的位置。值会从这个位置读取，也会写入到这个位置。数据属性有4个特性描述他们的行为。
 * [[Configurable]] 表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特性，以及是否可以把它改为访问属性，默认，所有直接定义在对象上的属性，这个特性都是true
 * [[Enumerable]] 表示属性是否可以通过for-in循环返回。默认，所有直接定义在对象上的属性的这个特性都是true
 * [[Writable]] 表示属性的值是否可以被修改。默认，所有直接定义在对象上的属性的这个特性都是true
 * [[Value]] 包含属性实际的值。这就是前面提到的那个读取和写入属性值的位置。这个特性默认为 undefined
 * 
 * 像前面的例子中那样将属性显示添加到对象之后，[[Configurable]]、[[Enumerable]]和[[Writable]]都会被设置为true，而[[Value]]特性会被设置为指定的值。比如：
 * let person = {
 *      name: "Nicholas"
 * }
 */

// Object.defineProperty() 被调用时，configurable、enumerable和writable的值如果不指定，则默认为false
// let person = {};
// Object.defineProperty(person,"name",{
//     writable: false,
//     configurable: false,
//     value: "Nicholas"
// });
// console.log(person.name);
// person.name = "Greg";
// delete person.name
// console.log(person.name);

/**
 * 2. 访问器属性
 *      访问器属性不包含数据值。相反，它们包含一个获取（getter）函数和一个设置（setter）,不过这两个函数不是必须的。
 *      getter：读取访问器属性，会调用获取函数，这个函数的责任就是返回一个有效的值。
 *      setter：写入访问器属性时，会调用设置函数并传入新值，这个函数必须决定对数据做出什么修改。
 * 
 *      [[Configurable]] 表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特性，以及是否可以把它改为访问属性，默认，所有直接定义在对象上的属性，这个特性都是true
 *      [[Enumerable]] 表示属性是否可以通过for-in循环返回。默认，所有直接定义在对象上的属性的这个特性都是true
 *      [[Get]] 获取函数，在读取属性时调用。默认 undefined
 *      [[Set]] 设置函数，在写入属性时调用。默认 undefined
 */
// let book = {
//     year_: 2017,
//     edition: 1
// }
// Object.defineProperty(book,"year",{
//     get(){
//         return this.year_;
//     },
//     set(newValue){
//         if(newValue > 2017){
//             this.year_ = newValue;
//             this.edition += newValue - 2017;
//         }
//     }
// })

// book.year = 2018;
// console.log(book.edition);

// 在一个对象上同时定义多个属性  Object.defineProperties 两个参数  第一个 添加或修改属性的对象  第二个 另一个描述对象
let book = {};
Object.defineProperties(book,{
    year_: {
        value: 2017
    },
    edition:{
        value: 1
    },
    year:{
        get(){
            return this.year_;
        },
        set(newValue){
            if(newValue > 2017){
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    }
});
// 获取指定属性的描述符。两个参数  第一个  属性所在的对象  第二个 要获取描述符的属性名
// let descriptor = Object.getOwnPropertyDescriptor(book,"year_");
// console.log(descriptor);
let descriptor = Object.getOwnPropertyDescriptor(book,"year");
console.log(descriptor);