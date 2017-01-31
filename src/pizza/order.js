var SystemDate = require('./systemdate');

class Order {
    constructor(pizzas, promocode) {
        this._pizzas = pizzas;
        this._promocode = promocode;
        this._date = SystemDate.now();
    }
    get pizzas() {
        return this._pizzas;
    }
    get date() {
        return this._date;
    }
    get promocode() {
        return this._promocode
    }
    get price() {
        return this._price;
    }
    set price(price) {
        this._price = price;
    }
}

module.exports = Order;