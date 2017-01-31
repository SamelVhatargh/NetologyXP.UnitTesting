'use strict';
let setDate;

class SystemDate {
    constructor() {
        this._defaultDate = new Date();
        setDate = this._defaultDate;
    }

    set(customDate) {
        setDate = customDate;
    }

    reset() {
        setDate = new Date();
    }

    static now() {
        if (setDate !== this._defaultDate) {
            return setDate;
        }
        return new Date();
    }
}

module.exports = SystemDate;