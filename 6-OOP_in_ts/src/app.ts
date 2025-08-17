// 1. Создайте класс Rectangle, который содержит свойства width и height, а также метод
// getArea(), который возвращает площадь прямоугольника (ширина * высота). Создайте
// экземпляр класса Rectangle и выведите его площадь.

// interface IRectangle {
//     width: number;
//     heigth: number;
//     getArea(): void;
// }

// class Rectangle implements IRectangle{
//     width: number;
//     heigth: number;

//     constructor ( width, heigth) {
//      this.width = width;
//      this.heigth = heigth;   
//     }

//     getArea(){
//         console.log(this.width * this.heigth);
        
//     }
// }

// const rectangle = new Rectangle(10, 20);
// rectangle.getArea();

// 2. Создайте класс Calculator, который содержит методы add() (сложение), subtract() (вычитание),
// multiply() (умножение) и divide() (деление). Создайте экземпляр класса Calculator и
// выполните несколько операций

// interface ICalculator{
//     num1: number;
//     num2: number;
//     add():number;
//     subtract(): number;
//     multiply(): number;
//     divide(): number;
// }

// class Calculator implements ICalculator {
//     num1:number;
//     num2: number;

//     constructor(num1:number, num2:number){
//         this.num1 = num1;
//         this.num2 = num2;
//     }
//     add(){
//          return this.num1 + this.num2
//     }

//     subtract(){
//         return this.num1 - this.num2
//     }

//     multiply(){
//         return this.num1 * this.num2
//     }

//     divide(){
//         return this.num1 / this.num2
//     }
// }

// const calculator = new Calculator(20, 5);

// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.divide());

// 3. Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод getArea()
// (вычисление площади круга). Создайте экземпляр класса CircleR и выведите площадь
// окружности. Площадь круга: π * r^2

// interface  ICircleR{
//     radius:number;
//     getArea():number;
// }

// class CircleR implements ICircleR{
//     radius: number;

//     constructor(radius:number){
//         this.radius = radius;
//     }
//     getArea(){
//         return (3.14 * (this.radius**2))
//     }
// }

// const circleR = new CircleR(4);
// console.log(circleR.getArea());

// 4. Создайте класс Product, который содержит объект product (продукт) с полями и price (цена
//     продукта), title (название продукта). Реализуйте метод displayProductInfo(), который выводит
//     массив продуктов, где цена > 20. Создайте экземпляр класса Product и вызовите метод
//     displayProductInfo().

// interface IProduct{
//     displayProductInfo():iList[];
//     list: iList[];
// }

// interface iList {
//     price:number;
//     title: string;
// }

// class Product implements IProduct{
//     list:iList[] = [
//         { price: 25,
//         title: 'Meat'},

//         { price: 5,
//         title: 'Apple'},

//         { price: 30,
//         title: 'Cheese'},

//         { price: 10,
//         title: 'Flour'},

//         { price: 40,
//         title: 'Wine'},
//     ]
    

//     displayProductInfo(){
//         return this.list.filter((el:iList) => el.price > 20);
//     }
// }

// const filteredProduct = new Product();
// console.log(filteredProduct.displayProductInfo());


// 5. Создайте класс Library, который содержит список книг. Каждая книга представляет собой
// объект с такими свойствами, как title, author, year, genre. Класс должен содержать следующие
// методы:
// addBook(book) — добавление книги в библиотеку.
// removeBookByTitle(title) — удаление книги по названию.
// getBooksByAuthor(author) — получение всех книг, написанных определенным автором.
// getBooksByYear(year) — получение всех книг, выпущенных в определенный год.
// getBooksByGenre(genre) — получение всех книг в определенном жанре.

// interface IBooks{
//     title: string;
//     author: string;
//     year: number;
//     genre: string;
// }

// interface ILibrary{
//     books: Array<IBooks>
//     addBook;
//     removeBookByTitle(title);
//     getBooksByAuthor(author);
//     getBooksByYear(year);
//     getBooksByGenre(genre);
// }

// class Library implements ILibrary{
//     books: IBooks[] = [
//         {
//             title: "Война и мир",
//             author: "Толстой",
//             year: 1867,
//             genre: 'Повесть'
//         },
//         {
//             title: "Преступление и наказание", 
//             author: "Достоевский",
//             year: 1866,
//             genre: 'Роман'
//         },
//         {
//             title: "Мастер и Маргарита",
//             author: "Булгаков",
//             year: 1940,
//             genre: 'Роман'
//         },
//         {
//             title: "Анна Каренина",
//             author: "Толстой", 
//             year: 1878,
//             genre: 'Роман'
//         },
//         {
//             title: "Братья Карамазовы",
//             author: "Достоевский",
//             year: 1880,
//             genre: 'Повесть'
//         },
//         {
//             title: "Тихий Дон",
//             author: "Шолохов",
//             year: 1932,
//             genre: 'Эпопея'
//         }
//     ]

//     addBook(book){
//         return this.books.push(book)
//     }

//     removeBookByTitle(title){
//         return this.books.filter((el) => el.title !==  title)
//     }

//     getBooksByAuthor(author){
//         return this.books.filter((el) => el.author === author)
//     }

//     getBooksByYear(year){
//         return this.books.filter((el) => el.year === year)
//     }

//     getBooksByGenre(genre){
//         return this.books.filter((el) => el.genre === genre)
//     }
// }


// const library = new Library();
// console.log(library.addBook( {title: "Анна Каренина",
//     author: "Толстой", 
//     year: 1878,
//     genre: 'Роман'}));

//  console.log(library.removeBookByTitle('Тихий Дон'));
//  console.log(library.getBooksByAuthor('Достоевский'));
//  console.log(library.getBooksByYear(1866));
//  console.log(library.getBooksByGenre('Роман'));


// 6. Создайте класс NumberStats, который будет работать с массивом чисел. Класс должен
// содержать только метод:
// getMode() — находит и возвращает моду массива чисел (самое часто встречающееся число).

// interface INumberStats{
//     getMode(arr:number[]):number;
// }

// class NumberStats implements INumberStats{
//     getMode(arr:number[]):number{
//         let obj = {};
//         arr.forEach((el:number) => {
//             if(!obj.hasOwnProperty(el)){
//                 obj[el] = 1
//             } else {
//                 obj[el] +=1;
//             }
//         })
//         let max = Object.values(obj).reduce((acc:number, el:number) => el>acc? acc = el : acc ,0);
//         let res = 0;
//         for (let key in obj){
//             obj[key] === max? res = +key : res;
//         }
//         return res;
//     }
// }
 
// const numberStats = new NumberStats();
// console.log(numberStats.getMode([1, 2, 3, 4, 5, 6, 3, 3, 3, 2]));


// 7. Создайте класс NumberOperations, который должен включать сам массив и методы для
// работы с массивом чисел:
// getMax() — возвращает максимальное число из массива.
// getMin() — возвращает минимальное число из массива.
// getSum() — вычисляет сумму всех чисел в массиве.
// getAverage() — вычисляет среднее значение чисел в массиве.
// getAboveAverage() — возвращает массив чисел, которые выше среднего значения.
// sortAscending() — сортирует массив по возрастанию.
// sortDescending() — сортирует массив по убыванию.

// interface INumberOperations{
//     array:number[];
//     getMax():number;
//     getMin():number;
//     getSum():number;
//     getAverage():number;
//     getAboveAverage():number[];
//     sortAscending():number[];
//     sortDescending():number[];
// }

// class NumberOperations implements INumberOperations {
//     array = [1, 332, 4, 655, 74, 81, 9, 123, 100];
//     getMax(){
//         return this.array.reduce((acc:number, el:number) => el>acc? acc = el : acc, 0)
//     }
//     getMin(){
//         return this.array.reduce((acc:number, el:number) => el<acc? acc = el : acc, +Infinity)
//     }
//     getSum(){
//         return this.array.reduce((acc:number, el:number) => acc+=el ,0)
//     }
//     getAverage(){
//         let sumOfAllElem:number = this.array.reduce((acc:number, el:number) => acc+=el ,0)
//         return sumOfAllElem/this.array.length;
//     }
//     getAboveAverage(){
//         let sumOfAllElem:number = this.array.reduce((acc:number, el:number) => acc+=el ,0)
//         let average:number = sumOfAllElem/this.array.length;
//         return this.array.filter((el) => el > average)
//     }
//     sortAscending(){
//         return this.array.sort((function(a:number, b:number){
//             return a - b
//         }))
//     }
//     sortDescending(){
//         return this.array.sort((function(a:number, b:number){
//             return b - a
//         }))
//     }
// }
 
// const res = new NumberOperations();
// console.log(res.getMax());
// console.log(res.getMin());
// console.log(res.getSum());
// console.log(res.getAverage());
// console.log(res.getAboveAverage());
// console.log(res.sortAscending());
// console.log(res.sortDescending());


// 8. Создайте класс Sentence, который работает с предложением. Класс должен содержать один
// метод:
// getLongestWord() — находит и возвращает самое длинное слово в предложении.

// interface iSentence{
//     getLongestWord(sentence:string):string
// }

// class Sentence implements iSentence{
//     getLongestWord(sentence:string):string{
//         return sentence.split(' ').reduce((max:string, el:string) => el.length> max.length? max = el :max, '')
//     }
// }

// const sentence = new Sentence()
// console.log(sentence.getLongestWord('Не следует, однако, забывать о том, что новая модель организационной деятельности требует от нас системного анализа модели развития.'));

// 9. Создайте класс ListFilter, который работает с массивом чисел. Класс должен содержать один
// метод:
// getEvenNumbers() — возвращает все четные числа из массива.

// interface iListFilter{
//     getEvenNumbers(arr:number[]):number[]
// }

// class ListFilter implements iListFilter{
//     getEvenNumbers(arr:number[]):number[]{
//         return arr.filter((el:number) => el % 2 === 0)
//     }
// }

// const listFilter = new ListFilter();
// console.log(listFilter.getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 10. Создайте класс ArrayMerger, который сливает два отсортированных массива в один
// отсортированный массив используя метод: mergeSortedArrays()
// Входные данные: [1, 3, 5], [2, 4, 6]
// Выходные данные: [1, 2, 3, 4, 5, 6]

// interface iArray{
//     mergeSortedArrays(arr1:number[], arr2:number[]):number[]
// }

// class ArrayMerger implements iArray{
//     mergeSortedArrays(arr1:number[], arr2:number[]){
//         let array:number[] = [...arr1, ...arr2];
//         return array.sort(function(a:number,b:number){
//             return a - b;
//         })
//     }
// }

// const arrayMerger = new ArrayMerger();
// console.log(arrayMerger.mergeSortedArrays([1, 3, 5], [2, 4, 6]));

// 12. Создайте класс ShoppingCart, который будет содержать список товаров. Каждый товар — это
// объект с такими полями, как name, price и quantity. Класс должен содержать следующие
// методы:
// addItem(item) — добавление товара в корзину.
// removeItem(itemName) — удаление товара из корзины по названию.
// updateItemQuantity(itemName, newQuantity) — обновление количества товара в корзине.
// getTotalPrice() — вычисление общей суммы корзины.
// getItemsAbovePrice(minPrice) — возвращает список товаров, цена которых выше заданного
// порога

// interface iShoppingCart{
//     listItem:iItem[];
//     addItem(item:iItem):void;
//     removeItem(itemName:string):void;
//     updateItemQuantity(itemName:string, newQuantity:number):void;
//     getTotalPrice():number;
//     getItemsAbovePrice(minPrice:number):iItem[];

// }

// interface iItem {
//     price: number;
//     name:string;
//     quantity:number;
// }

// class ShoppingCart implements iShoppingCart{
//     listItem:iItem[] = [
//                 { price: 25,
//                 name: 'Meat',
//                 quantity: 2},
        
//                 { price: 5,
//                 name: 'Apple',
//                 quantity: 5},
        
//                 { price: 30,
//                 name: 'Cheese',
//                 quantity: 3},
        
//                 { price: 10,
//                 name: 'Flour',
//                 quantity: 1},
        
//                 { price: 40,
//                 name: 'Wine',
//                 quantity: 2},
//             ]

//      addItem(item:iItem):void{
//         this.listItem.push(item)
//         console.log(this.listItem);
        
//      }
//      removeItem(itemName:string):void{
//         this.listItem = this.listItem.filter((el:iItem) => el.name !== itemName)
//         console.log(this.listItem);
        
//      }
//      updateItemQuantity(itemName:string, newQuantity:number):void{
//         this.listItem.forEach((el:iItem) => el.name === itemName? el.quantity = newQuantity : null);
//         console.log(this.listItem);
        
//      }
//      getTotalPrice():number{
//         return this.listItem.reduce((acc:number, el:iItem) => acc+= (el.price * el.quantity) , 0)
//      }
//      getItemsAbovePrice(minPrice:number):iItem[]{
//         let listWithMinPrice:iItem[] = this.listItem.filter((el:iItem) => el.price > minPrice);
//         return listWithMinPrice
//      }
// }

// const shoppingCart = new ShoppingCart();
// shoppingCart.addItem({ price: 10,  name: 'Coffee',  quantity: 4});
// shoppingCart.removeItem('Flour');
// shoppingCart.updateItemQuantity('Meat', 6);
// console.log(shoppingCart.getTotalPrice());
// console.log(shoppingCart.getItemsAbovePrice(25));








