// 1. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10

// interface Obj{
//     id : number;
//     title : string;
//     count: number;
//     price: number;
// }

// const obj: Obj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
//    ];

// let res: Obj[] = obj.filter((el:Obj) => {
//     if(el.count > 10){
//         return el;
//     }
// })

// console.log(res);

// 2. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары в обратном порядке

// interface Obj{
//     id : number;
//     title : string;
//     count: number;
//     price: number;
// }

// const obj: Obj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
//    ];

// const newArr: Obj[] = obj.reverse();

// console.log(newArr);

// 3. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести только те товары из положения, количество которых внутри массива
// кратно 3

// interface Obj{
//         id : number;
//         title : string;
//         count: number;
//         price: number;
//     }
    
//     const obj: Obj[] = [
//         { id: 1, title: 'Часы', count: 10, price: 500 },
//         { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//         { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//         { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//         { id: 5, title: 'Планшет', count: 22, price: 2100 },
//        ];
    

//   const newArr: Obj[] = obj.filter((el:Obj) => {
//     if(el.count % 3 === 0){
//         return el;
//     }
//   })     

//   console.log(newArr);

// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести итоговую стоимость на складе.
// Итоговая стоимость = количество * цена + ...
  
// interface Obj{
//             id : number;
//             title : string;
//             count: number;
//             price: number;
//         }
        
//         const obj: Obj[] = [
//             { id: 1, title: 'Часы', count: 10, price: 500 },
//             { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//             { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//             { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//             { id: 5, title: 'Планшет', count: 22, price: 2100 },
//            ];

// let sum:number = obj.reduce((acc:number, el:Obj) => {
//     return acc += el.count * el.price;
// }, 0) 

// console.log(sum);

// 5. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом

// interface Obj{
//                 id : number;
//                 title : string;
//                 count: number;
//                 price: number;
//             }
            
//  const obj: Obj[] = [
//          { id: 1, title: 'Часы', count: 10, price: 500 },
//          { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//         { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//          { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//          { id: 5, title: 'Планшет', count: 22, price: 2100 },
//                ];

// const max:Obj = obj.reduce((acc:Obj, el:Obj) =>  el.price > acc.price? el : acc )

// console.log(max);


// 6. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов


// interface Obj{
//                     id : number;
//                     title : string;
//                     count: number;
//                     price: number;
//                 }
                
//      const obj: Obj[] = [
//              { id: 1, title: 'Часы', count: 10, price: 500 },
//              { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//             { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//              { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//              { id: 5, title: 'Планшет', count: 22, price: 2100 },
//                    ];

// const res: number = obj.reduce((acc:number, el: Obj) => {
//     return acc+= el.price
// }, 0)

// console.log(res/obj.length);

// 7. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением

// interface Obj{
//         id : number;
//         title : string;
//          count: number;
//          price: number;
//            }
                    
//   const obj: Obj[] = [
//       { id: 1, title: 'Часы', count: 10, price: 500 },
//       { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//      { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//       { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//       { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ];

// const res: Obj = obj.reduce((acc:Obj,el: Obj) => el.price * el.count > acc.price * acc.count? el : acc)

// console.log(res);

// 8. У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту

// const arr:string[] = [
//     "nikita_123@mail.ru",
//     "hanna_123@mail.ru",
//     "artem_123@mail.ru",
//     "sergey_123@mail.ru",
//     "nikita_123@mail.ru",
//     "artem_123@mail.ru",
//     "darya_123@mail.ru",
//   ];

// let pattern = /[a-zA-Z0-9\.\_\%\+\-]+@[a-zA-Z]+\.[a-zA-Z]{2,5}$/ ;

// let checkArr = (arr:string[]):void |string []=> {
//     let finalArr:(string| number)[] = []
//     try {
//         for (let i:number = 0; i < arr.length; i++) {
            
//             if(typeof arr[i] !== 'string') throw new Error(" Здесь не почта, а число");
//             if(!pattern.test(arr[i])) throw new Error(" Почта не корректная");

//             if(!finalArr.includes(arr[i])){
//                 finalArr.push(arr[i])
//             }

           
          
            
//         }

//         console.log(finalArr);
//     } catch (error) {
//         console.log(error); 
//     }
//     }

//     checkArr(arr);

// 9. Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}

// interface Obj{
//     name: string;
//     value: number;
// }

// const arr: Obj[] = [{name: 'width', value: 10}, {name: 'height', value: 20}] 

// let newObj = {};
// let makeNewObj = (arr: Obj[]): void => {

//    return  arr.forEach((el:Obj) => {
//         if(!newObj.hasOwnProperty(el.name)){
//             newObj[el.name] = el.value;
//         }
//     })
// }

// makeNewObj(arr)
// console.log(newObj);


// 10. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
// вернет 5. Использовать каррирование


function f(a:number, b?:number):number |Function{
    if(b){
            return a+b ;
    } else {
         return function(b:number):number{
            return a+b;
        }
    }
}

console.log(f(2, 3));
console.log((f(2) as Function)(3));








