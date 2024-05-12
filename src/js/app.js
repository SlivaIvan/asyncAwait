import json from './parser';
import read from './raeder';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static load() {
    return (async () => {
      // eslint-disable-next-line no-useless-catch
      try {
        const resolveRead = await read();
        const resolveJson = await json(resolveRead);
        const saving = JSON.parse(resolveJson);
        const savingObject = new GameSaving(saving.id, saving.created, saving.userInfo);
        return savingObject;
      } catch (error) {
        throw error;
      }
    })();
  }
}
