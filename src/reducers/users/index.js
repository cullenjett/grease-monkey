import createEntityReducers from '../entity';

export default createEntityReducers('user');

export const getAllUsers = (state) => {
  return state.allIds.map(id => state.byId[id]) || [];
};

export const getUser = (state, id) => {
  return state.byId[id] || {};
};
