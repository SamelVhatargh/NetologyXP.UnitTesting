'use strict';

var assert = require('assert');
var Messenger = require('../src/messenger');
var User = require('../src/user');
var Chat = require('../src/chat');

describe('Messenger should', function () {
    describe('send message to my friend', function () {
        it('if I send message to friend', function () {
            let khalid = new User('Khalid');
            let jaheira = new User('Jaheira');
            let friends = [khalid, jaheira];
            let I = new User('me', friends);
            let messenger = new Messenger(I);

            messenger.send(khalid, 'hello');

            assert.equal('hello', khalid.lastMessage);
        })
    });
    describe('send message to every member of chat', function () {
        it('if I send message to chat', function () {
            let khalid = new User('Khalid');
            let jaheira = new User('Jaheira');
            let friends = [khalid, jaheira];
            let I = new User('me', friends);
            let chat = new Chat(friends);
            let messenger = new Messenger(I);

            messenger.send(chat, 'hello chat');

            assert.equal('hello chat', khalid.lastMessage);
            assert.equal('hello chat', jaheira.lastMessage);
        })
    });
    describe('send message to me', function () {
        it('if my friend sens me a message', function () {
            let I = new User('me');
            let jaheira = new User('jaheira', [I]);
            let messenger = new Messenger(jaheira);

            messenger.send(I, 'Yes, oh omnipresent authority figure?');

            assert.equal('Yes, oh omnipresent authority figure?', I.lastMessage);
        })
    });
    describe('edit my last message', function () {
        it('if ask him to', function () {
            let khalid = new User('Khalid');
            let jaheira = new User('Jaheira');
            let friends = [khalid, jaheira];
            let I = new User('me', friends);
            let messenger = new Messenger(I);
            messenger.send(khalid, 'helo');

            messenger.editLastMessage('hello');

            assert.equal('hello', khalid.lastMessage);
        })
    });
    describe('not send message to unknown person', function () {
        it('if I send message to a person who is not in my contact list', function () {
            let khalid = new User('Khalid');
            let jaheira = new User('Jaheira');
            let sarevok = new User('Sarevok');
            let friends = [khalid, jaheira];
            let I = new User('me', friends);
            let messenger = new Messenger(I);

            messenger.send(sarevok, 'hello');

            assert.equal(false, sarevok.lastMessage);
        })
    });
});