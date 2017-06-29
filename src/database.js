import faker from 'faker';

const users = [];
let userId = 100;
for (let i = 0; i < 100; i++) {
  users.push({
    id: (userId++).toString(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    activation_state: faker.address.stateAbbr(),
    primaryAddress: {
      id: randomNumberInRange(300, 399),
      ...faker.helpers.userCard().address
    }
  });
}

const vehicles = [];
let vehicleId = 200;
for (let i = 0; i < 100; i++) {
  vehicles.push({
    id: (vehicleId++).toString(),
    year: randomNumberInRange(2000, 2017),
    make: pickRandomFrom(['Toyota', 'Volkswagen', 'BMW', 'Mazda', 'Ford']),
    model: pickRandomFrom(['Prius', 'Golf', '335i', 'CX-5', 'Focus']),
    color: pickRandomFrom(['Red', 'White', 'Blue', 'Silver', 'Black']),
    relatedUser: randomNumberInRange(100, 199)
  });
}

const addresses = [];
let addressId = 300;
for (let i = 0; i < 100; i++) {
  addresses.push({
    id: (addressId++).toString(),
    street_1: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    zip: faker.address.zipCode(),
    relatedUser: randomNumberInRange(0, 100)
  });
}

export default {
  users,
  vehicles,
  addresses
};

function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandomFrom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
