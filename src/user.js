class User {
    constructor(name, contacts, todayIsBirthday) {
        this._name = name;
        this._contacts = contacts || [];
        this._isBirthday = todayIsBirthday || false;
        this._message = false;
    }
    get name(){
        return this._name;
    }
    set lastMessage(message) {
        this._message = message;
    }
    get lastMessage() {
        return this._message;
    }
    get contacts() {
        return this._contacts;
    }
    get isBirthday() {
        return this._isBirthday;
    }
    canReceiveMessagesFrom(user) {
        for (var i = 0; i < user.contacts.length; i++) {
            if (user.contacts[i] === this) {
                return true;
            }
        }
        return false;
    }
}

module.exports = User;