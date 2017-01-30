'use strict';

var assert = require('assert');
var Messenger = require('../src/messenger');
var User = require('../src/user');
var Chat = require('../src/chat');

describe('Messenger tests', function () {
    it('Send message - to friend - friend receives message', function () {
        let khalid = new User('Khalid');
        let jaheira = new User('Jaheira');
        let friends = [khalid, jaheira];
        let I = new User('me', friends);
        let messenger = new Messenger(I);

        messenger.send(khalid, 'hello');

        assert.equal('hello', khalid.lastMessage);
    });

    it('Send message - to person who is not in my friends list - message is not sent', function () {
        let khalid = new User('Khalid');
        let jaheira = new User('Jaheira');
        let sarevok = new User('Sarevok');
        let friends = [khalid, jaheira];
        let I = new User('me', friends);
        let messenger = new Messenger(I);

        messenger.send(sarevok, 'hello');

        assert.equal(false, sarevok.lastMessage);
    });

    it('Send message - to chat - every chat member receives message', function () {
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

    it('Edit message - I edit previously sent message - friend see changed message', function () {
        let khalid = new User('Khalid');
        let jaheira = new User('Jaheira');
        let friends = [khalid, jaheira];
        let I = new User('me', friends);
        let messenger = new Messenger(I);
        messenger.send(khalid, 'helo');

        messenger.editLastMessage('hello');

        assert.equal('hello', khalid.lastMessage);
    });
    it('Send reminder - today is my friend birthday - I receive a reminder', function () {
        let jaheira = new User('jaheira', [], true);
        let I = new User('me', [jaheira]);

        let messenger = new Messenger(I);

        assert.equal('You should send some flowers to jaheira!', I.lastMessage);
    });
});
