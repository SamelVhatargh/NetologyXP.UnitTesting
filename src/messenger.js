class Messenger {
    constructor(currentUser) {
        this._user = currentUser;
    }
    send(userName, message) {
        let user = this._getUserFromFriends(userName);
        user.lastMessage = message;
    }

    _getUserFromFriends(name) {
        for (let i = 0; i < this._user.contacts.length; i++) {
            if (this._user.contacts[i].name === name) {
                return this._user.contacts[i];
            }
        }
    }
}

module.exports = Messenger;