'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  checkAlive() {
    if (this.health <= 0) {
      const idx = Animal.alive.indexOf(this);

      if (idx !== -1) {
        Animal.alive.splice(idx, 1);
      }
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= 50;
      target.checkAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
