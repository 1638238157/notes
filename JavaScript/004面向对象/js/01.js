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
// let book = {};
// Object.defineProperties(book,{
//     year_: {
//         value: 2017
//     },
//     edition:{
//         value: 1
//     },
//     year:{
//         get(){
//             return this.year_;
//         },
//         set(newValue){
//             if(newValue > 2017){
//                 this.year_ = newValue;
//                 this.edition += newValue - 2017;
//             }
//         }
//     }
// });
// 获取指定属性的描述符。两个参数  第一个  属性所在的对象  第二个 要获取描述符的属性名
// let descriptor = Object.getOwnPropertyDescriptor(book,"year_");
// console.log(descriptor);
// let descriptor = Object.getOwnPropertyDescriptor(book,"year");
// console.log(descriptor);

// Object.getOwnPropertyDescriptors  会在每个自有属性上调用 Object.getOwnPropertyDescriptor 并在一个新对象中返回他们
// let descriptorsResult = Object.getOwnPropertyDescriptors(book);
// console.log(descriptorsResult);

// let person = {
//     name: 'kyrie'
// }
// let personDescriptor = Object.getOwnPropertyDescriptor(person, "name");
// console.log(personDescriptor);

// 合并对象
// 简单复制
/*
    Object.assign() 修改目标对象 返回修改后的目标对象 (浅复制)
    该方法接受一个目标对象和一个或多个源对象作为参数，将每个源对象中可枚举和自有属性复制到目标对象。
    多个源对象都有相同的属性，则使用最后一个复制的值。
*/
let dest, src, result;
dest = {};
src = {id: 'src'};
result = Object.assign(dest, src);
console.log(dest === result);
console.log(dest !== src);
console.log(result);
console.log(dest);

/**
 * 多个源对象
 */
dest = {};
result = Object.assign(dest, {a:'foo'},{b: 'bar'});
console.log(result);

/**
 * 获取函数与设置函数
 */
dest = {
    set a(val){
        console.log(`Invoked dest setter with param ${val}`);
    }
};
src = {
    get a(){
        console.log('Invoked src getter');
        return 'foo';
    }
}
Object.assign(dest, src);
// 调用 src 的获取方法
// 调用 dest 的设置方法并传入参数"foo"
// 因为这里的设置函数不执行赋值操作
// 所以实际上并没有把值转移过来
console.log(dest);

// 覆盖属性

dest = {id: 'dest'};
result = Object.assign(dest,{id: 'src1'},{id: 'src2'});
console.log(result); // {id: "src2"}
// 可以通过目标对象上的设置函数观察到覆盖的过程:
 dest = {
    set id(x) {
        console.log(x);
} };
Object.assign(dest, { id: 'first' }, { id: 'second' }, { id: 'third' });
// first
// second
// third

/**
* 对象引用 */
dest = {};
src = { a: {} };
Object.assign(dest, src);
// 浅复制意味着只会复制对象的引用 
console.log(dest); // {a:{}}
console.log(dest.a === src.a); // true

//嵌套结构
// let person = {
//     name: 'Matt',
//     age: 27,
//     job: {
//         title: 'Software engineer'
//     }
// };

// const {job: {title},job: personJob} = person;
// console.log(title,personJob);