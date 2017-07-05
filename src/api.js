import DATABASE from './database';

const DELAY = 500;

class UsersApi {
  all() {
    return delay().then(() => {
      return DATABASE.users;
    });
  }

  find(id) {
    return delay(300).then(() => {
      return DATABASE.users.find(u => u.id === id);
    });
  }
}

class AddressesApi {
  all() {
    return delay().then(() => {
      return DATABASE.addresses;
    });
  }
}

class Api {
  constructor() {
    this.users = new UsersApi();
    this.addresses = new AddressesApi();
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
