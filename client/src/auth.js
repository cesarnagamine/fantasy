class Auth {
    constructor() {
        this.isUserLoggedIn = false;
    }

    login(cb) {
        this.isUserLoggedIn = true;
        cb();
    }

    logout(cb) {
        this.isUserLoggedIn = false;
        cb();
    }

    authObj = '';

    isAuthenticated() {
        return this.isUserLoggedIn;
    }

}

export default new Auth();
