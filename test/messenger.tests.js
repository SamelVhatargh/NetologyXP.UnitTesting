'use strict';

var assert = require('assert');
var Messenger = require('../src/messenger');
var User = require('../src/user');


describe('When messenger sends messages', function () {
    describe('I send a message to friend', function () {
        it('Friend receives my message', function () {
            let khalid = new User('Khalid');
            let jaheira = new User('Jaheira');
            let friends = [khalid, jaheira];
            let I = new User('me', friends);
            let messenger = new Messenger(I);

            messenger.send('Khalid', 'hello');

            assert('hello', khalid.lastMessage);
        });
    });

});