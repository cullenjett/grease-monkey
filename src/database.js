import faker from 'faker';

const users = [];
for (let i = 0; i < 100; i++) {
  users.push({
    id: faker.random.uuid(),
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
