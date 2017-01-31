class Order {
    constructor(pizzas) {
        this._pizzas = pizzas;
    }
    get pizzas() {
        return this._pizzas;
    }
}

module.exports = Order;