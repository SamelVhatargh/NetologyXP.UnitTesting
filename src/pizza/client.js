var Order = require('./order');

class Client {
    constructor() {
        this._pizzas = [];
    }
    order(pizzas) {
        return new Order(pizzas);
    }
    get pizzas() {
        return this._pizzas;
    }
    set pizzas(pizzas) {
        this._pizzas = pizzas;
    }
}

module.exports = Client;