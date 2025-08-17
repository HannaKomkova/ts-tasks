// 1. Создайте класс Rectangle, который содержит свойства width и height, а также метод
// getArea(), который возвращает площадь прямоугольника (ширина * высота). Создайте
// экземпляр класса Rectangle и выведите его площадь.
class ShoppingCart {
    listItem = [
        { price: 25,
            name: 'Meat',
            quantity: 2 },
        { price: 5,
            name: 'Apple',
            quantity: 5 },
        { price: 30,
            name: 'Cheese',
            quantity: 3 },
        { price: 10,
            name: 'Flour',
            quantity: 1 },
        { price: 40,
            name: 'Wine',
            quantity: 2 },
    ];
    addItem(item) {
        this.listItem.push(item);
        console.log(this.listItem);
    }
    removeItem(itemName) {
        this.listItem = this.listItem.filter((el) => el.name !== itemName);
        console.log(this.listItem);
    }
    updateItemQuantity(itemName, newQuantity) {
        this.listItem.forEach((el) => el.name === itemName ? el.quantity = newQuantity : null);
        console.log(this.listItem);
    }
    getTotalPrice() {
        return this.listItem.reduce((acc, el) => acc += (el.price * el.quantity), 0);
    }
    getItemsAbovePrice(minPrice) {
        let listWithMinPrice = this.listItem.filter((el) => el.price > minPrice);
        return listWithMinPrice;
    }
}
const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ price: 10, name: 'Coffee', quantity: 4 });
shoppingCart.removeItem('Flour');
shoppingCart.updateItemQuantity('Meat', 6);
console.log(shoppingCart.getTotalPrice());
console.log(shoppingCart.getItemsAbovePrice(25));
