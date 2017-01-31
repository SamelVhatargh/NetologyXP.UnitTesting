'use strict';

var assert = require('assert');
var Client = require('../src/pizza/client');
var Pizzeria = require('../src/pizza/pizzeria');
var Pizza = require('../src/pizza/pizza');
var SystemDate = require('../src/pizza/systemdate');

class PizzeriaTestsFactory {
    createClient() {
        return new Client(new Date(1943, 3, 3));
    }
    createPizzasForOrder() {
        return [new Pizza('peperoni')];
    }
    createPizzeria() {
        return new Pizzeria({'peperoni': 500});
    }
}


describe('Pizzeria should', function () {
    let factory =  new PizzeriaTestsFactory();
    let me = factory.createClient();
    let pizzeria = factory.createPizzeria();

    describe('give me pizza', function(){
        it('if I order pizza', function() {
            let pizzas = factory.createPizzasForOrder();

            let order = me.order(pizzas);
            pizzeria.serve(order, me);

            assert.equal('peperoni', me.pizzas[me.pizzas.length - 1].name);

            me.pizzas = [];
        });
    });
    describe('give me special pizza', function(){
        it('if I order pizza at birthday', function() {
            (new SystemDate()).set(new Date(2016, 3, 3));
            let pizzas = factory.createPizzasForOrder();

            let order = me.order(pizzas);
            pizzeria.serve(order, me);

            assert.equal('special', me.pizzas[me.pizzas.length - 1].name);
        });
    });
    describe('give me 100$ discount', function(){
        it('if I order pizza with ABCD promocode', function() {
            let pizzas = factory.createPizzasForOrder();

            let order = me.order(pizzas, 'ABCD');
            pizzeria.serve(order, me);

            assert.equal(400, order.price);
        });
    });
    describe('give me 20% discount', function(){
        it('if I order 2 pizzas between 10 and 16 hours', function() {
            let pizzas = [new Pizza('peperoni'), new Pizza('peperoni')];
            (new SystemDate()).set(new Date(2016, 3, 3, 11));

            let order = me.order(pizzas);
            pizzeria.serve(order, me);

            assert.equal((500 + 500) * (1 - 0.20), order.price);
        });
    });
});