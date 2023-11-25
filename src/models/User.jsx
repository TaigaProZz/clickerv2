class User {
  constructor(name, damagePerSec, damagePerClicks, coins) {
    this.name = name;
    this.damagePerSec = damagePerSec;
    this.damagePerClicks = damagePerClicks;
    this.coins = coins;
  }

  getName() {
    return this.name;
  }

  getdamagePerSec() {
    return this.damagePerSec;
  }

  getDamagePerClicks() {
    return this.damagePerClicks;
  }

  getCoins() {
    return this.coins;
  }
}

export default User;