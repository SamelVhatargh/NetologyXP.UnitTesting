var Order = require('./order');

class Client {
    constructor(birthdate) {
        this._pizzas = [];
        this._bonus = 0;
        this._birthdate = birthdate;
    }
    order(pizzas, promocode) {
        return new Order(pizzas, promocode);
    }
    get pizzas() {
        return this._pizzas;
    }
    set pizzas(pizzas) {
        this._pizzas = pizzas;
    }
    get birthday() {
        return this._birthdate;
    }
    get bonus() {
        return this._bonus;
    }
    set bonus(bonus) {
        this._bonus = bonus;
    }
}

module.exports = Client;