'use strict';

var assert = require('assert');
var Client = require('../src/pizza/client');
var Pizzeria = require('../src/pizza/pizzeria');
var Pizza = require('../src/pizza/pizza');


describe('Pizzeria should', function () {
    describe('give me pizza', function(){
        it('if I order pizza', function() {
            let me = new Client();
            let pizzas = [new Pizza('peperoni')];
            let pizzeria = new Pizzeria();

            let order = me.order(pizzas);
            pizzeria.serve(order, me);

            assert.equal(pizzas, me.pizzas);
        });
    });
});