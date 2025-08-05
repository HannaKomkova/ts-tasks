// 1. Напишите программу, которая проверяет, делится ли заданное число num на 3 и 5 одновременно.
// Если делится, выведите "Число делится на 3 и 5", иначе "Число не делится на 3 и 5".
// Входные: num = 15 → Результат: "Число делится на 3 и 5"
// Входные: num = 14 → Результат: "Число не делится на 3 и 5"

// let num: number = +prompt('enter number');

// if(num % 3 === 0 && num % 5 === 0){
//     console.log("Число делится на 3 и 5");
    
// } else {
//     console.log("Число не делится на 3 и 5");
// }

// 2. Создайте две переменные и присвойте им числовые значения. Выведите в консоль число, которое
// ближе к 10. Если оба числа находятся на одинаковом расстоянии от 10, выведите "Оба числа
// равноудалены от 10".
// Входные: num1 = 8, num2 = 20 → Результат: 8
// Входные: num1 = 9, num2 = 11 → Результат: "Оба числа равноудалены от 10"

// let num1:number = +prompt('enter number 1');
// let num2: number = +prompt('enter number 2');

// if( Math.abs(10-num1) > Math.abs(10-num2)) {
//     console.log(num2);
    
// } else if(Math.abs(10-num2) > Math.abs(10-num1)){
//     console.log(num1);
    
// } else {
//     console.log("Оба числа равноудалены от 10");
    
// }

// 3. Напишите программу, которая проверяет, является ли год високосным. Год является високосным,
// если он делится на 4, но не делится на 100, или если он делится на 400.
// Входные: year = 2024 → Результат: "2024 год является високосным"
// Входные: year = 1900 → Результат: "1900 год не является високосным"

// let year: number = +prompt('enter year');

// if( year % 4 === 0 && year % 100 !==0 || year % 400 ===0) {
//     console.log(`${year} год является високосным `);
    
// } else {
//     console.log(`${year} год не является високосным`);
    
// }

// 4. Создайте переменную строки. Напишите программу, которая определяет, содержит ли строка хотя
// бы одну цифру. Если да, выведите "Строка содержит цифры", иначе "Строка не содержит цифр".
// Входные: str = "Hello123" → Результат: "Строка содержит цифры"
// Входные: str = "Hello" → Результат: "Строка не содержит цифр

// let str:string = prompt('enter string');

// let bool: boolean = str.split('').some((el) => !isNaN(+el)? true : false);

// if(bool){
//     console.log("Строка содержит цифры");
    
// } else {
//     console.log("Строка не содержит цифр");
    
// }

// 1. Напишите программу, которая проверяет, является ли число num2 квадратом числа num1.
// Выведите сообщение в консоль, указывающее результат проверки.
// Входные: num1 = 3, num2 = 9 → Результат: "9 является квадратом 3"
// Входные: num1 = 4, num2 = 20 → Результат: "20 не является квадратом 4"

// let num1:number = +prompt('enter number 1');
// let num2:number = +prompt('enter number 2');

// if(num1**2 === num2){
//     console.log(`${num2} является квадратом ${num1}`);
    
// } else {
//     console.log(`${num2} не является квадратом ${num1}`);
    
// }

// 2. Создайте две переменные, представляющие собой двузначные числа. Напишите программу,
// которая сравнивает сумму цифр каждого числа и выводит в консоль большее из двух чисел.
// Входные: num1 = 23, num2 = 56 → Результат: "56 имеет большую сумму цифр"
// Входные: num1 = 34, num2 = 25 → Результат: "Оба числа имеют одинаковую сумму цифр"

// let num1:string = prompt('введите 1e двузначное число');
// let num2:string = prompt('введите 2e двузначное число');

// let sum1:number = num1.split('').reduce((acc, el) => {
//     return acc += +el;
// },0)

// let sum2:number = num2.split('').reduce((acc, el) => {
//     return acc += +el;
// },0)

// if(sum1 > sum2){
//     console.log(`${num1} имеет большую сумму цифр`);
    
// } else if(sum2 > sum1){
//     console.log(`${num2} имеет большую сумму цифр`);

// } else {
//     console.log("Оба числа имеют одинаковую сумму цифр");
    
// }

// 3. Напишите программу, которая принимает строку str и переставляет местами первый и последний
// символы строки. Выведите результат в консоль.
// Входные: str = "hello" → Результат: "oellh"
// Входные: str = "typescript" → Результат: “typescript"

// let str:string = prompt('enter string');

// const split:string[] = str.split('')

// let firstEl:string = split[0];
// let lastEl:string = split[split.length-1];
// let otherEl:string[]= split.slice(1, str.length-1)

// console.log(`${lastEl}${otherEl}${firstEl}`);

// 4. Напишите программу, которая принимает две строки str1 и str2 и проверяет, содержат ли они
// одинаковые символы (не обязательно в том же порядке). Выведите результат в консоль.
// Входные: str1 = "abc", str2 = "cba" → Результат: "Строки содержат одинаковые символы"
// Входные: str1 = "abc", str2 = "def" → Результат: "Строки не содержат одинаковые символы"

// let str1:string = prompt('enter string 1');
// let str2:string = prompt('enter string 2');

// let arr1:string[] = str1.split('');
// let arr2:string[] = str2.split('');


// let bool:boolean = arr2.some((el) => arr1.includes(el)? true : false);
// if(bool){
//     console.log("Строки содержат одинаковые символы");
    
// } else{
//     console.log("Строки не содержат одинаковые символы");
    
// }

// 1. Создайте две переменные num1 и num2. Напишите программу, которая проверяет, является ли
// сумма этих чисел четной. Если да, выведите "Сумма четная", иначе "Сумма нечетная".
// Входные: num1 = 4, num2 = 6 → Результат: "Сумма четная"
// Входные: num1 = 7, num2 = 5 → Результат: "Сумма нечетная"

// let num1:number = +prompt('enter number 1');
// let num2:number = +prompt('enter number 2');

// if((num1+num2)% 2 === 0 ){
//     console.log("Сумма четная");
    
// } else {
//     console.log("Сумма нечетная");   
// }

// 2. Напишите программу, которая находит наибольший общий делитель (НОД) двух чисел num1 и
// num2.
// Входные: num1 = 15, num2 = 25 → Результат: "НОД: 5"
// Входные: num1 = 14, num2 = 28 → Результат: "НОД: 14"

// let num1:number = +prompt('enter number 1');
// let num2:number = +prompt('enter number 2');

// let minNum = 0;
// num1>num2? minNum = num2 : minNum = num1;

// let res = 0;
// for (let i = minNum; i > 0; i--) {
//     if(num1 % i === 0 && num2 % i === 0){
//         res = i;
//         break;
//     }
// }
// console.log(res);

// 3. Напишите программу, которая проверяет, начинается ли строка str с гласной буквы. Гласными
// считаются: a, e, i, o, u. Выведите результат в консоль.
// Входные: str = "apple" → Результат: "Строка начинается с гласной"
// Входные: str = "banana" → Результат: "Строка не начинается с гласной"

// let str: string = prompt('enter string');
// let pattern:string[] = ['a', 'e', 'i', 'o', 'u'];

// if(pattern.includes(str[0])) {
//     console.log("Строка начинается с гласной");
    
// } else {
//     console.log("Строка не начинается с гласной");
    
// }

// 4. Напишите программу, которая проверяет, можно ли строку str разделить на две части таким
// образом, чтобы количество уникальных символов в обеих частях было одинаковым. Если
// возможно, выведите "Можно", иначе "Нельзя".
// Входные: str = "aabbcc" → Результат: "Можно"
// Входные: str = "abcabc" → Результат: "Нельзя"

// let str:string = prompt('enter string');

// let arr1:string[] = str.slice(0, (str.length)/2).split('');
// let arr2:string[]= str.slice(str.length/2, str.length).split('');

// let finalArr1:string[] = arr1.filter((el) => !arr2.includes(el))
// let finalArr2:string[] = arr2.filter((el) => !arr1.includes(el))


// if(finalArr1.length === finalArr2.length && finalArr1.length !== 0 ){
//     console.log('Можно')
// } else {
//     console.log('Нельзя')
// }


// 1. Напишите программу, которая проверяет, можно ли заданное число num представить в виде
// произведения двух последовательных целых чисел. Если возможно, выведите эти числа, иначе
// выведите "Невозможно".
// Входные: num = 20 → Результат: "4 * 5 = 20"
// Входные: num = 30 → Результат: "Невозможно"
// Входные: num = 42 → Результат: "6 * 7 = 42"

// let num:number = +prompt('enter number');

// for (let i = 1; i < num; i++) {
//     if(i* (i+1) === num){
//         console.log(`${i}*${i+1} = ${num}`);
//         break
//     } else {
//         console.log('Невозможно');
        
//     }
// }

// 2. Напишите программу, которая проверяет, можно ли из символов строки str составить палиндром,
// переставив их. Если возможно, выведите "Можно", иначе "Нельзя".
// Входные: str = "civic" → Результат: "Можно"
// Входные: str = "ivicc" → Результат: "Можно"
// Входные: str = "hello" → Результат: "Нельзя"

// let str:string = prompt('enter string');

// let obj:object = {};

// str.split('').forEach((el) => {
//     if(!obj.hasOwnProperty(el)) {
//         obj[el] = 1
//     } else {
//         obj[el] += 1;
//     }
// })

// let arr:number[] = Object.values(obj); 
// let newArr:number[] = arr.filter((el) => el% 2 !==0);
// if(newArr.length <=1 ){
//     console.log("Можно");
    
// } else {
//     console.log("Нельзя");
   
// }


// 3. Напишите программу, которая проверяет, можно ли число num разделить на две части так, чтобы
// сумма цифр в этих частях была одинаковой. Если возможно, выведите "Можно", иначе "Нельзя".
// Входные: num = 123321 → Результат: "Можно"
// Входные: num = 123456 → Результат: "Нельзя"
// Входные: num = 1221 → Результат: "Можно"

// let promptNum:string = prompt('enter number');

// let num1:string[] = promptNum.split('').slice(0, (promptNum.length)/2);
// let sum1:number = 0;
// for (let i = 0; i < num1.length; i++) {
//     sum1 += +num1[i]
// }

// let num2:string[] = promptNum.split('').slice((promptNum.length)/2, promptNum.length)
// let sum2:number = 0;
// for (let i = 0; i < num2.length; i++) {
//     sum2 += +num2[i]
// }

// if(sum1 === sum2 ){
//     console.log('Можно');
    
// } else {
//     console.log('Нельзя');
    
// }

// Задачи из телеги

// 1. Преобразовать все строки в верхний регистр
// Необходимо 3 решения: for, for of, map
// const words = ['hello', 'world'];
// // Ожидается: ['HELLO', 'WORLD']

// const words:string[] = ['hello', 'world'];

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].toUpperCase()
    
// }

// console.log(words);

// let finalArr:string[] = []
// for (let element of words) {
//     finalArr.push(element.toUpperCase())
// }

// console.log(finalArr)

// let finalArr:string[] = words.map((el) => el.toUpperCase());
// console.log(finalArr);

// 2.Найти строку с максимальной длиной
// Необходимо 3 решения: for, forEach, reduce
// const words = ['pen', 'notebook', 'book', 'dictionary'];
// // Ожидается: 'dictionary'

// const words:string[] = ['pen', 'notebook', 'book', 'dictionary'];

// let max:string = '';

// for (let i = 0; i < words.length; i++) {
//     if(words[i].length > max.length) {
//         max = words[i];
//     } 
// }

// console.log(max);

// let max:string = '';

// words.forEach((el) => {
//     if(el.length > max.length){
//         max = el;
//     }
// })

// console.log(max);

// let res:string = words.reduce((max, el) => {
//     if(el.length > max.length){
//         return max = el;
//     } else {
//         return max;
//     }
// },'')

// console.log(res);


// 3.Подсчитать количество строк, содержащих букву “e”
// Необходимо 3 решения: for, while, и через filter и length
// const words = ['tree', 'bush', 'flower', 'grass'];
// // Ожидается: 2

// const words:string[] = ['tree', 'bush', 'flower', 'grass'];
// let count:number = 0;

// for (let i = 0; i < words.length; i++) {
//     if(words[i].includes('e')){
//         count +=1
//     }  
// }
// console.log(count);

// let count:number = 0;
// let i:number = 0;
// while (i< words.length) {
//     if(words[i].includes('e')){
//         count +=1
//     }
//     i++
// }

// console.log(count);

// let finalArr:string[] = words.filter((el) => el.includes('e'))
// console.log(finalArr.length);

// 4.Проверить, содержит ли массив хотя бы один палиндром
// Необходимо 6 решений: for, for of, while, do while, forEach, some
// const words = ['hello', 'level', 'world'];
// // Ожидается: true

// const words:string[] = ['hello', 'level', 'world'];

// for (let i = 0; i < words.length; i++) {
//     if(words[i].split('').reverse().join('') === words[i]){
//         console.log(true);
//         break
//     } 
// }

// for (let el of words){
//     if(el.split('').reverse().join('') === el){
//         console.log(true);
//         break
//     }
// }

// let i:number = 0;
// while (i < words.length) {
//     if(words[i].split('').reverse().join('') === words[i]){
//                 console.log(true);
//                 break
//             } 
//     i++        
// }

// let i:number = 0;
// do {
//     if(words[i].split('').reverse().join('') === words[i]){
//                         console.log(true);
//                         break
//                     } 
//      i++        
// } while (i < words.length);

// words.forEach((el) => el.split('').reverse().join('') === el? console.log(true) : console.log(false)) ;

// let res:boolean = words.some((el) => el.split('').reverse().join('') === el);
// console.log(res);


// 5.Найти сумму квадратов только положительных чисел
// Необходимо 5 решений: for, for of, while, do while, forEach
// const nums = [-3, 2, -1, 4];
// // Ожидается: 2² + 4² = 4 + 16 = 20

const nums:number[] = [-3, 2, -1, 4];

// let sum:number = 0;

// for (let index = 0; index < nums.length; index++) {
//    if(nums[index] > 0){
//     sum +=nums[index] ** 2
//    }
// }

// console.log(sum);

// let sum:number = 0;

// for ( let el of nums) {
//     if(el > 0) {
//         sum+= el **2;
//     }
// }

// console.log(sum);

// let i:number = 0;
// let sum:number = 0;

// while (i < nums.length) {
//     if(nums[i] > 0) {
//         sum += nums[i] **2;
//     }
//     i++;
// }

// console.log(sum);

// let i:number = 0;
// let sum:number = 0;

// do {
//     if(nums[i] > 0 ){
//         sum +=  nums[i] **2;
//     }
//     i++
// } while (i < nums.length);

// console.log(sum);

let sum:number = 0;
nums.forEach((el) => {
    if( el > 0){
        sum += el ** 2;
    }
})

console.log(sum);























