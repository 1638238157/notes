// function identity<T>(arg: T): T{
//     return arg;
// }

// let output = identity<string>("myString");
// let output = identity("myString");

function loggingIdentity<T>(arg: Array<T>): Array<T>{
    console.log(arg.length);
    return arg;
}