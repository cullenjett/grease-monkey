import DATABASE from './database';

const DELAY = 500;

class UserApi {
  all() {
    return delay().then(() => {
      return DATABASE.users;
    });
  }
}

class Api {
  constructor() {
    this.users = new UserApi();
  }
}

export default new Api();

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms || DELAY);
  });
}
