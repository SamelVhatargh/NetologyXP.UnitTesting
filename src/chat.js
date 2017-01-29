class Chat {
    constructor(contacts) {
        this._contacts = contacts || [];
        this._message = false;
    }
    set lastMessage(message) {
        for (let i = 0; i < this._contacts.length; i++) {
            this._contacts[i].lastMessage = message;
        }
    }
}

module.exports = Chat;