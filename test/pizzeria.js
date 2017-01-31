'use strict';

var assert = require('assert');
var Client = require('../src/pizza/client');
var Pizzeria = require('../src/pizza/pizzeria');
var Pizza = require('../src/pizza/pizza');
var SystemDate = require('../src/pizza/systemdate');


describe('Pizzeria should', function () {
    describe('give me pizza', function(){
        it('if I order pizza', function() {
            let me = new Client();
            let pizzas = [new Pizza('peperoni')];
            let pizzeria = new Pizzeria({'peperoni': 500});

            let order = me.order(pizzas);
            pizzeria.serve(order, me);

            assert.equal(pizzas, me.pizzas);
        });
    });
    describe('give me special pizza', function(){
        it('if I order pizza at birthday', function() {
            (new SystemDate()).set(new Date(2016, 3, 3));
            let me = new Client(new Date(1943, 3, 3));
            let pizzas = [new Pizza('peperoni')];
            let pizzeria = new Pizzeria({'peperoni': 500});

            let order = me.order(pizzas);
            pizzeria.serve(order, me);

            assert.equal('special', me.pizzas[me.pizzas.length - 1].name);
        });
    });
    describe('give me 100$ discount', function(){
        it('if I order pizza with ABCD promocode', function() {
            let me = new Client(null, '');
            let pizzas = [new Pizza('peperoni')];
            let pizzeria = new Pizzeria({'peperoni': 500});

            let order = me.order(pizzas, 'ABCD');
            pizzeria.serve(order, me);

            assert.equal(400, order.price);
        });
    });
});