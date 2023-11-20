class User {
    constructor(name, clicksPerSec, coins) {
        this.name = name;
        this.clicksPerSec = clicksPerSec;
        this.coins = coins;
    }

    getName() {
        return this.name;
    }

    getClicksPerSec() {
        return this.clicksPerSec;
    }

    getCoins() {
        return this.coins;
    }

}

export default User;