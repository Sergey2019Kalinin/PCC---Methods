import Character from "./domain.js";

import {
  Bowerman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie
} from "./domain.js";

export default Character;

export { readGameSaving, writeGameSaving, Game, GameSavingData };

class Game {
  start() {
    console.log("game started");
  }
}

class GameSavingData {}

function readGameSaving() {}

function writeGameSaving() {}
