import createEntityReducers from '../entity';

export default createEntityReducers('address');

export const getAllAddresses = (state) => {
  return state.allIds.map(id => state.byId[id]) || [];
};

export const selectAddress = (state, id) => {
  return state.byId[id] || {};
};

export const selectAddressesForUser = (state, userId) => {
  const allAddresses = state.allIds.map(id => state.byId[id]);
  return allAddresses.filter(address => address.relatedUser === +userId) || [];
};
