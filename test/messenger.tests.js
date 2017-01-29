'use strict';

var assert = require('assert');
var Messenger = require('../src/messenger');
var User = require('../src/user');


describe('When messenger sends messages', function () {
    describe('I send message to a friend', function () {
        it('Friend receives my message', function () {
            let I = new User('me');
            let khalid = new User('Khalid');
            let jaheira = new User('Jaheira');
            let messenger = new Messenger(I, [khalid, jaheira]);

            messenger.send('Khalid', 'hello');

            assert('hello', khalid.lastMessage);
        });
    });

});