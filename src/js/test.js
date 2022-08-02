import Character from "./domain.js";

import {
  Bowerman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie
} from "./domain.js";

test("соблюдение длины имени персонажа (от 2 до 10 символов) - менее 2 символов", () => {

	const input1 = "W";
	const input2 = "Bowerman";

  expect(() => {
    new Character(input1, input2);
  }).toThrowError(new Error("Имя персонажа должно содержать от 2 до 10 символов."));
});

test("соблюдение длины имени персонажа (от 2 до 10 символов) - менее 2 символов", () => {

	const input1 = "WertuWertu6";
	const input2 = "Bowerman";

  expect(() => {
    new Character(input1, input2);
  }).toThrowError(new Error("Имя персонажа должно содержать от 2 до 10 символов."));
});

test("соблюдение типа персонажа", () => {

	const input1 = "WertuWertu";
	const input2 = "Bowerman6";

 	expect(() => {
    new Character(input1, input2);
  	}).toThrowError(new Error("Неверно указан тип персонажа. Доступные типы: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie."));
});

test("правильность заполнения объекта класса Character", () => {

	const input1 = "WertuWertu";
	const input2 = "Bowerman";

	const expected = {
		name: "WertuWertu",
		type: "Bowerman",
		health: 100,
		level: 1,
	}
	const received = new Character (input1, input2);

	expect(received).toEqual(expected);
});

test("правильность заполнения объекта класса Bowerman", () => {

	const input1 = "WertuWertu";
	const input2 = "Bowerman";

	const expected = {
		name: "WertuWertu",
		type: "Bowerman",
		health: 100,
		level: 1,
		attack: 25,
		defence: 25,
	}
	const received = new Bowerman (input1, input2);

	expect(received).toEqual(expected);
});

test("правильность заполнения объекта класса Swordsman", () => {

	const input1 = "WertuWertu";
	const input2 = "Swordsman";

	const expected = {
		name: "WertuWertu",
		type: "Swordsman",
		health: 100,
		level: 1,
		attack: 40,
		defence: 10,
	}
	const received = new Swordsman (input1, input2);

	expect(received).toEqual(expected);
});

test("правильность заполнения объекта класса Magician", () => {

	const input1 = "WertuWertu";
	const input2 = "Magician";

	const expected = {
		name: "WertuWertu",
		type: "Magician",
		health: 100,
		level: 1,
		attack: 10,
		defence: 40,
	}
	const received = new Magician (input1, input2);

	expect(received).toEqual(expected);
});

test("правильность заполнения объекта класса Daemon", () => {

	const input1 = "WertuWertu";
	const input2 = "Daemon";

	const expected = {
		name: "WertuWertu",
		type: "Daemon",
		health: 100,
		level: 1,
		attack: 10,
		defence: 40,
	}
	const received = new Daemon (input1, input2);

	expect(received).toEqual(expected);
});

test("правильность заполнения объекта класса Undead", () => {

	const input1 = "WertuWertu";
	const input2 = "Undead";

	const expected = {
		name: "WertuWertu",
		type: "Undead",
		health: 100,
		level: 1,
		attack: 10,
		defence: 40,
	}
	const received = new Undead (input1, input2);

	expect(received).toEqual(expected);
});

test("правильность заполнения объекта класса Zombie", () => {

	const input1 = "WertuWertu";
	const input2 = "Zombie";

	const expected = {
		name: "WertuWertu",
		type: "Zombie",
		health: 100,
		level: 1,
		attack: 10,
		defence: 40,
	}
	const received = new Zombie (input1, input2);

	expect(received).toEqual(expected);
});