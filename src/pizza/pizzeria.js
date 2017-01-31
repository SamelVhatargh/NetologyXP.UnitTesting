var Pizza = require('./pizza');
var SystemDate = require('./systemdate');

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

        if (servedPizzas.length >= 2
            && SystemDate.now().getHours() >= 10 && SystemDate.now().getHours() <= 16) {
            sum = sum * 0.80;
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
