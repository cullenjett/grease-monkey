import createEntityReducers from '../entity';

export default createEntityReducers('address', 'addresses');

export const getAllAddresses = (state) => {
  return state.allIds.map(id => state.byId[id]) || [];
};

export const getAddress = (state, id) => {
  return state.byId[id] || {};
};

export const getAddressesForUser = (state, userId) => {
  const allAddresses = state.allIds.map(id => state.byId[id]);
  return allAddresses.filter(address => address.relatedUser === +userId) || [];
};
