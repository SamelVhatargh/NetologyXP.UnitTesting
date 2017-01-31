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
    let me;
    let pizzas;
    let pizzeria;

    beforeEach(function () {
        me = factory.createClient();
        pizzas = factory.createPizzasForOrder();
        pizzeria = factory.createPizzeria();
    });

    describe('give me pizza', function(){
        it('if I order pizza', function() {

            let order = me.order(pizzas);
            pizzeria.serve(order, me);

            assert.equal('peperoni', me.pizzas[me.pizzas.length - 1].name);

            me.pizzas = [];
        });
    });
    describe('give me special pizza', function(){
        it('if I order pizza at birthday', function() {
            (new SystemDate()).set(new Date(2016, 3, 3));

            let order = me.order(pizzas);
            pizzeria.serve(order, me);

            assert.equal('special', me.pizzas[me.pizzas.length - 1].name);
        });
    });
    describe('give me 100$ discount', function(){
        it('if I order pizza with ABCD promocode', function() {

            let order = me.order(pizzas, 'ABCD');
            pizzeria.serve(order, me);

            assert.equal(400, order.price);
        });
    });
    describe('give me 20% discount', function(){
        let testCases = [
            {pizzaCount: 2},
            {pizzaCount: 3},
            {pizzaCount: 4},
        ];
        testCases.forEach(function (testCase) {
            it('if I order ' + testCase.pizzaCount + ' pizzas between 10 and 16 hours', function() {
                let pizzas = [];
                for (let i = 1; i <= testCase.pizzaCount; i++) {
                    pizzas.push(new Pizza('peperoni'));
                }
                (new SystemDate()).set(new Date(2016, 3, 3, 11));

                let order = me.order(pizzas);
                pizzeria.serve(order, me);

                assert.equal((500 * testCase.pizzaCount) * (1 - 0.20), order.price);
            });
        });

    });
    describe('give me 5% in bonus', function(){
        it('if I order pizza', function() {

            let order = me.order(pizzas);
            pizzeria.serve(order, me);

            assert.equal(500 * 0.05, me.bonus);
        });
    });
});