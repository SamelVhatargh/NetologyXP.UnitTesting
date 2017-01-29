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
        receiver.lastMessage = message;
    }
}

module.exports = Messenger;