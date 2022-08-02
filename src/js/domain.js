export default Character;

export { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie };

class Character {
  constructor(name, type) {
    let characters = [
      "Bowerman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie"
    ];

    if (name.length < 2 || name.length > 10) {
      throw new Error("Имя персонажа должно содержать от 2 до 10 символов.");

    } else if (!characters.includes(type)) {
      throw new Error(
        "Неверно указан тип персонажа. Доступные типы: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie."
      );
    } else {
      this.name = name; // имя
      this.type = type; // тип
      this.health = 100; // уровень жизни
      this.level = 1; // уровень персонажа
    }
  }
}

class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);

    this.type = "Bowerman";
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);

    this.type = "Swordsman";
    this.attack = 40;
    this.defence = 10;
  }
}

class Magician extends Character {
  constructor(name, type) {
    super(name, type);

    this.type = "Magician";
    this.attack = 10;
    this.defence = 40;
  }
}

class Daemon extends Character {
  constructor(name, type) {
    super(name, type);

    this.type = "Daemon";
    this.attack = 25;
    this.defence = 25;
  }
}

class Undead extends Character {
  constructor(name, type) {
    super(name, type);

    this.type = "Undead";
    this.attack = 40;
    this.defence = 10;
  }
}

class Zombie extends Character {
  constructor(name, type) {
    super(name, type);

    this.type = "Zombie";
    this.attack = 10;
    this.defence = 40;
  }
}
