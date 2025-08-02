// Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.

// const array: number[] = [1, 2, 3, 4, 5];

// let finalSum = array.reduce((acc, el) => {
//    if(el % 2 !== 0) {
//     return acc +=el;
//    } else {
//     return acc;
//    }
// },0)

// console.log(finalSum);


// Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'.

// const arr:string[] = ['cat', 'dog', 'apple', 'blue', 'bird'];

// let finalArr = arr.filter((el) => {
//     return el.includes('a');
// })

// console.log(finalArr);

// На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива

// let arr:string[] = [];

// for (let i:number = 0; i < 10; i++) {
//     arr.push(prompt('enter number'))
    
// }

// let sum: number = 0
// for (let i:number = 0; i < arr.length; i++) {
//     sum += + arr[i];
    
// }

// console.log(sum);

// let sum:number = 0;
// for (let el of arr) {
//     sum+= +el;
// }

// console.log(sum);

// let i: number = 0;
// let sum: number = 0;
// while (i === arr.length-1) {
//     sum+= +arr[i];
//     i++;
// }

// console.log(sum);

// let sum:number = 0;
// let i:number = 0;

// do {
//     sum+= +arr[i];
//     i++;
// } while (i < arr.length);

// console.log(sum);

// let sum:number = 0;
// arr.forEach((el) => sum+= +el );
// console.log(sum);


// let sum = arr.reduce((acc, el) => {
//    return acc+= +el;
// }, 0)

// console.log(sum);

// for, for of, while, do while, forEach

// 4. Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.

// let arr:string[] = [];

// for (let i:number = 0; i < 4; i++) {
//     arr.push(prompt('enter string'))
    
// }

// let bool:boolean = arr.some((el) => el.length > 5? true : false );

// console.log(bool);

// 5. Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2.

// let arr:number[] = [99, 2234, 4543, 622, 743, 33];

// let finalArr:number[] = arr.filter((el) => {
//     if(el%3 === 0 && el%2 !== 0){
//         return el;
//     }
// })

// console.log(finalArr);

// 6. Создайте массив строк и объедините все элементы в одну строку без пробелов.

// let arr:string[] = ['hello', 'my', 'darling'];
// let finalStr:string ='';

// arr.forEach((el) => finalStr+=el)

// console.log(finalStr);

// 7. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел. 

// let a:number = +prompt('enter number');
// let b:number = +prompt('enter number');
// let c:number = +prompt('enter number');
// let d:number= +prompt('enter number');
// let e:number = +prompt('enter number');
// let finalArr:number[] = [];
// finalArr.push(a);
// finalArr.push(b);
// finalArr.push(c);
// finalArr.push(d);
// finalArr.push(e);
// console.log(finalArr);

// 8. Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром

// let arr:string[] = ['anna', 'dog', 'mama', 'dad'];

// let bool:boolean = arr.some((el) => el.split('').reverse().join('') === el? true : false);
// console.log(bool);

// 9. Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения.

// let arr: (string | number)[] = ['dog', 'cat', 1, 5, 7, 3, 5, 'dog', 'flower', 'flower'];
// let finalArr:(string | number)[] = [];

// arr.forEach((el) =>{
//     if(!finalArr.includes(el) ){
//         finalArr.push(el)
//     } 
// })

// console.log(finalArr);

// 10. Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.

// let arr:string[] = ['dog', 'cat', 'apple', 'flower'];
// let pattern:string[] = ['a', 'e', 'i', 'o', 'u']

// let finalArr:string[][] = [];

// arr.forEach((el) => {
//     let filteredEl:string[] = el.split('').filter((letter) => {
//         if(pattern.includes(letter)){
//             return letter;
//         } 
//     })
//     finalArr.push(filteredEl)
// })

// console.log(finalArr);

// 11. На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты

// let arr:string[] = [];

// for (let i:number = 0; i < 4; i++) {
//     arr.push(prompt('enter string'))
    
// }

// let reg:RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// let bool:boolean = arr.every((el) => reg.test(el)? true : false);

// console.log(bool);

//12. Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива

// let arr:number[] = [1, 2, 4, 456, 23, 21];

// let sum: number = arr.reduce((acc, el, index) => {
//     if(index % 2 !==0){
//         return acc+= el;
//     } else {
//         return acc;
//     }
// }, 0)

// console.log(sum);

// 13. На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]

// let arr:number[] = [];

// for (let i:number = 0; i < 4; i++) {
//     arr.push(+prompt('enter number'))
    
// }

// let finalArr:string[] = arr.map((el) => {
//     if(el % 2 === 0){
//         return 'чет'
//     } else {
//         return 'нечет'
//     }
// })

// console.log(finalArr);
















