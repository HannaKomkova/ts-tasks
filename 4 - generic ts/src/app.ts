// 1. Напиши функцию wrapInArray<T>, которая принимает значение любого типа и возвращает массив, содержащий это значение.
// wrapInArray(5) // [5]
// wrapInArray("hi") // ["hi"]

// function wrapInArray<T>(a: T) {
//     return [a]
     
// }

// console.log( wrapInArray<string>('hello'));
// console.log(wrapInArray<number>(10));

// 2. Напиши функцию printKey<T, K extends keyof T>, которая принимает объект и ключ, и выводит значение этого ключа.
// printKey({name: "Alex", age: 25}, "name") // Alex

// function printKey<T, K extends keyof T>(obj: T, str: K){
//     if(typeof str === 'string' && typeof obj ==='object'){
//         return obj[str]
//     }
// }

// interface Value{
//     name: string;
//     age: number;
// }

// console.log(printKey({name: "Alex", age: 25}, "name"));

// 3. Напиши функцию mergeObjects<T, U>, которая объединяет два объекта в один.
// mergeObjects({a: 1}, {b: 2}) // {a: 1, b: 2}

// function mergeObjects<T, U>(obj1: T, obj2: U){
//     return {...obj1,  ...obj2}
// }

// interface Value1{
//     a:number;
// }

// interface Value2{
//     b:number;
// }

// console.log(mergeObjects<Value1, Value2>({a: 1}, {b: 2}));

// 4. Напиши функцию doubleOrRepeat<T>, которая:
//  • Если T — число, возвращает число, умноженное на 2
//  • Если T — строка, возвращает строку, повторённую дважды
// doubleOrRepeat(5) // 10
// doubleOrRepeat("Hi") // "HiHi"

// function doubleOrRepeat<T>(a: T){
//     if (typeof a === 'number') return a * 2;
//     if( typeof a ==='string') return a.repeat(2)
// }

// console.log(doubleOrRepeat<number>(5));
// console.log(doubleOrRepeat<string>("Hi"));

// 5. Функция transformArray<T>:
//  • Если массив чисел — возводит каждый элемент в квадрат
//  • Если массив строк — переводит в верхний регистр
// transformArray([2, 3]) // [4, 9]
// transformArray(["hi", "go"]) // ["HI", "GO"]

// function transformArray<T>(arr: T) {
//     if (Array.isArray(arr)) {
//         return arr.map((el:number | string) => {
//             if(typeof el ==='number'){
//                 return el ** 2;
//             } else {
//                 return el.toUpperCase()
//             }
//         })
//     }
// }

// console.log(transformArray<number[]>([2, 3]));
// console.log(transformArray<string[]>(["hi", "go"]));

// 6. Функция maxOrLongest<T>:
//  • Если числа — возвращает максимальное
//  • Если строки — возвращает самую длинную
// maxOrLongest([3, 8, 5]) // 8
// maxOrLongest(["a", "hello", "hi"]) // "hello"

// function maxOrLongest<T>(arr: T){
//     if(Array.isArray(arr)){
//         let check: boolean = arr.every((el: string | number) => typeof el === 'string');
//         if(check === true){
//             return arr.reduce((acc: string, el:string) => el.length > acc.length? acc = el : acc , '')
//         } else {
//            return  arr.reduce((acc:number, el:number) => el > acc? el : acc, 0)
//         }
//     }
// }

// console.log(maxOrLongest<number[]>([3, 8, 5]));
// console.log(maxOrLongest<string[]>(["a", "hello", "hi"]));

// 7. Функция evenOrLength<T>:
//  • Если число — возвращает true, если оно чётное
//  • Если строка — возвращает её длину
// evenOrLength(4) // true
// evenOrLength("cat") // 3

// function evenOrLength<T>(a:T) {
//     if( typeof a === 'number') return a % 2=== 0?  true : false;
//     if( typeof a ==='string') return a.length;
// }

// console.log(evenOrLength<number>(4));
// console.log( evenOrLength<string>("cat"));

// 8. Функция reverseSmart<T>:
//  • Если числа — реверсирует массив
//  • Если строки — реверсирует буквы в строках массива
// reverseSmart([1, 2, 3]) // [3, 2, 1]
// reverseSmart(["hi", "ok"]) // ["ih", "ko"]

// function reverseSmart<T>(arr:T){
//     if(Array.isArray(arr)){
//         let check: boolean = arr.every((el: string| number) => typeof el === 'string');
//         if(check === true){
//             return arr.map((el: string) => el.split('').reverse().join(''))
//         } else {
//             return arr.reverse();
//         }
//     }
// }

// console.log(reverseSmart<number[]>([1, 2, 3]));
// console.log(reverseSmart<string[]>(["hi", "ok"]));

// 9. Функция diffOrLengthDiff<T> принимает два аргумента:
//  • Если числа — возвращает их разницу
//  • Если строки — возвращает разницу в длине
// diffOrLengthDiff(10, 4) // 6
// diffOrLengthDiff("cat", "mouse") // 2

// function diffOrLengthDiff<T>(a: T, b: T){
//     if(typeof a ==='string' && typeof b === 'string') return Math.abs(a.length - b.length)
//     if(typeof a === 'number' && typeof b === 'number') return Math.abs(a - b) ;  
// }

// console.log(diffOrLengthDiff<number>(10, 4));
// console.log(diffOrLengthDiff<string>("cat", "mouse"));











