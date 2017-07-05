import DATABASE from './database';

let {
  users,
  addresses,
  vehicles
} = DATABASE;

const DELAY = 500;

class UsersApi {
  all() {
    return delay().then(() => {
      return users;
    });
  }

  find(id) {
    return delay(300).then(() => {
      return users.find(u => u.id === id);
    });
  }

  create(user) {
    return delay().then(() => {
      users = [
        ...users,
        user
      ];

      return user;
    });
  }

  update(user) {
    return delay().then(() => {
      users = users.map(u => {
        if (u.id === user.id) {
          return user;
        } else {
          return u;
        }
      });

      return user;
    });
  }
}

class AddressesApi {
  all() {
    return delay().then(() => {
      return addresses;
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
