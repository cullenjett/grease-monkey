import createEntityReducers from '../entity';

export default createEntityReducers('user');

export const selectAllUsers = (state) => {
  return state.allIds.map(id => state.byId[id]) || [];
};

export const selectUser = (state, id) => {
  return state.byId[id] || {};
};
