import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((buffer) => json(buffer)
        .then((string) => new GameSaving(JSON.parse(string))));
  }
}
