class User {
    constructor(name) {
        this._name = name;
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

}

module.exports = User;