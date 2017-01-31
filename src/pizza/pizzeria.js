class Pizzeria {
    serve(order, client) {
        client.pizzas = order.pizzas;
    }
}

module.exports = Pizzeria;
