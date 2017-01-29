class Messenger {
    constructor(currentUser) {
        this._user = currentUser;
        for (let i = 0; i < this._user.contacts.length; i++) {
            if (this._user.contacts[i].isBirthday) {
                this._user.lastMessage = 'You should send some flowers to ' + this._user.contacts[i].name + '!';
            }
        }
    }
    send(receiver, message) {
        this._lastReceiver = receiver;
        if (this._lastReceiver.canReceiveMessagesFrom(this._user)) {
            this._lastReceiver.lastMessage = message;
        }
    }
    editLastMessage(message) {
        this._lastReceiver.lastMessage = message;
    }
}

module.exports = Messenger;