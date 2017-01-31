var SystemDate = require('./systemdate');

class Order {
    constructor(pizzas) {
        this._pizzas = pizzas;
        this._date = SystemDate.now();
    }
    get pizzas() {
        return this._pizzas;
    }
    get date() {
        return this._date;
    }
}

module.exports = Order;