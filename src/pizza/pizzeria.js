var Pizza = require('./pizza');

class Pizzeria {
    serve(order, client) {
        let servedPizzas = order.pizzas;

        if (client.birthday && order.date.getDate() === client.birthday.getDate()
            && order.date.getMonth() === client.birthday.getMonth()) {
            servedPizzas.push(new Pizza('special'));
        }

        client.pizzas = servedPizzas;
    }
}

module.exports = Pizzeria;
