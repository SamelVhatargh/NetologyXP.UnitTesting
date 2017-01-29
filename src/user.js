class User {
    constructor(name, contacts) {
        this._name = name;
        this._contacts = contacts || [];
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
}

module.exports = User;