// 1. Базовый класс хранит массив строк. Наследник добавляет метод filterLong(minLength) —
// возвращает строки длиной больше minLength.
class TextFilter {
    filterWords(text) {
        return text.split(' ').filter((el) => el.split('')[0] === el.split('')[0].toUpperCase() ? el : null);
    }
}
class LongWordFilter extends TextFilter {
    filterWords(text) {
        return super.filterWords(text).filter((el) => el.length > 5);
    }
}
const longWordFilter = new LongWordFilter();
console.log(longWordFilter.filterWords("Hello World from TypeScript"));
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
