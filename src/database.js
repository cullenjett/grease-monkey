import faker from 'faker';

const users = [];
const userId = 1;
for (let i = 0; i < 100; i++) {
  users.push({
    id: (userId++).toString(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    activation_state: faker.address.stateAbbr()
  })
}

export default {
  users
}
