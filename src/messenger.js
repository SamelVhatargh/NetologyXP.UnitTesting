class Messenger {
    constructor(currentUser, friends) {
        this._user = currentUser;
        this._friends = friends;
    }
    send(userName, message) {
        let user = this._getUserFromFriends(userName);
        user.lastMessage = message;
    }

    _getUserFromFriends(name) {
        for (let i = 0; i < this._friends.length; i++) {
            if (this._friends[i].name === name) {
                return this._friends[i];
            }
        }
    }
}

module.exports = Messenger;