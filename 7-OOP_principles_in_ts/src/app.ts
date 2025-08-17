// 1. Базовый класс хранит массив строк. Наследник добавляет метод filterLong(minLength) —
// возвращает строки длиной больше minLength.

// interface IBasic{
//     array:string[];
// }

// class Basic implements IBasic{
//     array = ['hello', 'array', 'apple', 'dog', 'cat', 'flower']
// }

// interface IFinal{
//     filterLong():string[]
// }

// class Final extends Basic implements IFinal{
//     filterLong(minLength){
//        return this.array.filter((el) => el.length >minLength)
//     }
// }

// const finalArray = new Final();
// console.log(finalArray.filterLong(4));

// 2. Создать базовый класс NumberArray, который хранит массив чисел и предоставляет метод
// getArray() для его получения. Создать класс-наследник FilteredNumberArray, который добавляет
// свойство threshold и метод sumAboveThreshold() — возвращает сумму чисел из массива родителя,
// больших порога.
// [1, 2, 3, 4, 5], порог 3 → sumAboveThreshold() = 9
// [10, 20, 30], порог 15 → sumAboveThreshold() = 50

// class NumberArray implements INUmberArray{
//     array = [1, 2, 3, 4, 5]
//     getArray(){
//         return this.array
//     }
// }

// interface INUmberArray{
//     array: number[];
//     getArray():number[]
// }

// interface IFilteredArray{
//     treshold:number;
//     sumAboveThreshold():number
// }

// class FilteredNumberArray extends NumberArray implements IFilteredArray{
//     treshold = 3;
//     sumAboveThreshold(){
//         return this.array.reduce((acc, el) => el> this.treshold? acc+=el : acc ,0)
//     }
// }

// const res = new FilteredNumberArray();
// console.log(res.sumAboveThreshold());


// 3. Базовый класс StringProcessor с методом process(), который возвращает строку в верхнем регистре.
// Наследник ReversedStringProcessor переопределяет process() и возвращает перевёрнутую строку
// в большом регистре.
// "hello" → "HELLO" (родитель)
// "hello" → “OLLEH" (наследник)

// interface IStringProcessor{
//     process():string;
// }

// class StringProcessor{
//     process(){
//         let str = prompt('enter string').toUpperCase();
//         return str;
//     }
// }

// interface IReverseString{
//     process():string
// }

// class ReversedStringProcessor extends StringProcessor implements IreverseString{
//      override process() {
//         return super.process().split('').reverse().join('')
//      }
// }

// const reverseString = new ReversedStringProcessor();
// console.log(reverseString.process());

// 4. Создать базовый класс ObjectFilter с методом filterKeys() — возвращает все ключи объекта,
// начинающиеся с буквы "a". Создать класс-наследник FilteredObjectLength с дополнительным
// методом filterLongKeys() — возвращает ключи из родителя, длина которых больше 3.
// { age: 20, amount: 50, name: "Bob" } → ["age", "amount"] (родитель)
// { age: 20, amount: 50, name: "Bob" } → ["amount"] (наследник)

// interface IObject{
//     age: number;
//     amount: number;
//     name:string;
// }
// interface IObjectFilter{
//     object: IObject;
//     filterKeys():string[]
// }


// class ObjectFilter{
//     object = { age: 20, amount: 50, name: "Bob" };
//     filterKeys(){
//        return Object.keys(this.object).filter((el) => el.split('')[0] === 'a'? el : null)
//     }
// }

// interface IFilteredObjectLength {
//     filterLongKeys():string[]
// }

// class FilteredObjectLength extends ObjectFilter implements IFilteredObjectLength{
//     filterLongKeys(){
//         let array = super.filterKeys();
//         return array.filter((el) => el.length > 3)
//     }
// }

// const filteredObjectLength  = new FilteredObjectLength();
// console.log(filteredObjectLength.filterLongKeys());

// 5. Базовый класс NumberFilter с методом filterEven() — возвращает только чётные числа. Наследник
// NumberFilterDivisible переопределяет метод и возвращает числа, делящиеся на заданное число n.
// [1, 2, 3, 4, 5], n=2 → [2, 4] (родитель)

// interface INumberFilter{
//     array:number[];
//     filterEven():number[]
// }

// class NumberFilter implements INumberFilter{
//     array = [1, 2, 3, 4, 5];
//     filterEven(){
//        return this.array.filter((el) => el%2 === 0)
//     }
// }

// interface INumberFilterDivisible {
//     filterEven():number[]
//     n:number;
// }

// class NumberFilterDivisible extends NumberFilter implements INumberFilterDivisible{
//     n = +prompt('enter n')
//     override filterEven(){
//         return super.filterEven().filter((el) => el % this.n === 0)
//     }
// }

// const  numberFilterDivisible = new  NumberFilterDivisible();
// console.log(numberFilterDivisible.filterEven());

// 6. Базовый класс хранит текст. Наследник добавляет метод getWordsStartingWith(letter) —
// возвращает слова, начинающиеся с указанной буквы.

// interface IPromptText{
//     text:string;
// }

// class PromptText {
//     text =  prompt('enter text')
// }

// interface IFIlteredText{
//     getWordsStartingWith():string[]
// }

// class FilteredText extends PromptText implements IFIlteredText{
//     getWordsStartingWith(letter:string) {
//        return this.text.split(' ').filter((el) => el.split('')[0] === letter? el : null)
//     }
// }

// const filteredText = new FilteredText();
// console.log(filteredText.getWordsStartingWith('a'));

// 7. Базовый класс TextFilter с методом filterWords(text) — возвращает все слова, начинающиеся с
// заглавной буквы. Наследник LongWordFilter переопределяет метод и возвращает только слова
// длиной больше 5.
// "Hello World from TypeScript" → ["Hello", "World", "TypeScript"] (родитель)
// "Hello World from TypeScript" → ["TypeScript"] (наследник)

// interface ITextFilter{
//     filterWords(text:string):string[]
// }

// class TextFilter implements ITextFilter{
//     filterWords(text){
//         return text.split(' ').filter((el) => el.split('')[0] === el.split('')[0].toUpperCase()? el : null)
//     }
// }

// class LongWordFilter extends TextFilter implements ITextFilter{
//     override filterWords(text){
//         return super.filterWords(text).filter((el) => el.length > 5)
//     }
// }

// const longWordFilter = new LongWordFilter();
// console.log(longWordFilter.filterWords("Hello World from TypeScript"));

// 8. Базовый класс ArrayUpper с методом toUpperCaseArray() — возвращает все строки в верхнем
// регистре. Наследник FilteredArrayUpper переопределяет метод и возвращает только строки
// длиной больше 3.
// [“a”, “ab”, “abc”, “abcd”] → [“A”, “AB”, “ABC”, “ABCD”] (родитель)
// [“a”, “ab”, “abc”, “abcd”] → [“ABCD”] (наследник)

// interface IArrayUpper {
//     array:string[];
//     toUpperCaseArray():string[]
// }

// class ArrayUpper implements IArrayUpper{
//     array = ['a', 'ab', 'abc', 'abcd'];
//     toUpperCaseArray(){
//         return this.array.map((el) => el.toUpperCase())
//     }
// }

// interface IFilteredArray {
//     toUpperCaseArray():string[]
// }

// class FilteredArrayUpper extends ArrayUpper implements IFilteredArray {
//     override toUpperCaseArray() {
//         return super.toUpperCaseArray().filter((el) => el.length > 3)
//     }
// }

// const filteredArray = new FilteredArrayUpper();
// console.log(filteredArray.toUpperCaseArray());


// 9. Базовый класс Multiplier с методом multiplyByTwo() — умножает все числа массива на 2. Наследник
// CustomMultiplier переопределяет метод и возвращает все четные элементы массива.

// interface IMultiplayer {
//     array:number[];
//     multiplyByTwo():number[];
// }

// class Multiplier implements IMultiplayer{
//     array = [1, 2, 3, 4, 5, 6, 7, 8]
//     multiplyByTwo(){
//         return this.array.map((el) => el * 2)
//     }
// }

// interface ICustomMultiplier {
//     multiplyByTwo():number[]
// }

// class CustomMultiplier extends Multiplier implements ICustomMultiplier {
//     override multiplyByTwo(){
//         return super.multiplyByTwo().filter((el) => el % 2 === 0)
//     }
// }

// const res = new CustomMultiplier();
// console.log(res.multiplyByTwo());
