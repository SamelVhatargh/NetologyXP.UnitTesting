class Messenger {
    constructor(currentUser) {
        this._user = currentUser;
    }
    send(receiver, message) {
        receiver.lastMessage = message;
    }
}

module.exports = Messenger;