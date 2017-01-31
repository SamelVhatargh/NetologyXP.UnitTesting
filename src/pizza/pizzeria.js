var Pizza = require('./pizza');

class Pizzeria {
    constructor(prices) {
        this._prices = prices;
    }
    serve(order, client) {
        let servedPizzas = order.pizzas;

        let sum = 0;
        for (let i = 0; i < servedPizzas.length; i++) {
            sum += this._prices[servedPizzas[i].name];
        }

        if (order.promocode === 'ABCD') {
            sum -= 100;
        }

        order.price = sum;

        if (client.birthday && order.date.getDate() === client.birthday.getDate()
            && order.date.getMonth() === client.birthday.getMonth()) {
            servedPizzas.push(new Pizza('special'));
        }

        client.pizzas = servedPizzas;
    }
}

module.exports = Pizzeria;
