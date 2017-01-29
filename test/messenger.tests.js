'use strict';

var assert = require('assert');
var Messenger = require('../src/messenger');
var User = require('../src/user');
var Chat = require('../src/chat');


describe('When messenger sends messages', function () {
    describe('I send a message to friend', function () {
        it('Friend receives my message', function () {
            let khalid = new User('Khalid');
            let jaheira = new User('Jaheira');
            let friends = [khalid, jaheira];
            let I = new User('me', friends);
            let messenger = new Messenger(I);

            messenger.send(khalid, 'hello');

            assert.equal('hello', khalid.lastMessage);
        });
    });
    describe('I send a message to chat', function () {
        it('Every chat member receives my message', function () {
            let khalid = new User('Khalid');
            let jaheira = new User('Jaheira');
            let friends = [khalid, jaheira];
            let I = new User('me', friends);
            let chat = new Chat(friends);
            let messenger = new Messenger(I);

            messenger.send(chat, 'hello chat');

            assert.equal('hello chat', khalid.lastMessage);
            assert.equal('hello chat', jaheira.lastMessage);
        });
    });
    describe('Friend sends me a message', function () {
        it('I receive a message', function () {
            let I = new User('me');
            let jaheira = new User('jaheira', [I]);
            let messenger = new Messenger(jaheira);

            messenger.send(I, 'Yes, oh omnipresent authority figure?');

            assert.equal('Yes, oh omnipresent authority figure?', I.lastMessage);
        });
    });
    describe('Today is friends birthday', function () {
        it('I receive a message', function () {
            let jaheira = new User('jaheira', [], true);
            let I = new User('me', [jaheira]);

            let messenger = new Messenger(I);

            assert.equal('You should send some flowers to jaheira!', I.lastMessage);
        });
    });
});