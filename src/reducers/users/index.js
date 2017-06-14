const initialState = {
  byId: {},
  allIds: []
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        byId: {
          ...state.byId,
          [action.user.id]: action.user
        },
        allIds: [
          ...state.allIds,
          action.user.id
        ]
      }
    case 'UPDATE_USER':
      return {
        byId: {
          ...state.byId,
          [action.user.id]: action.user
        },
        allIds: [...state.allIds]
      }
    case 'FETCH_USERS_SUCCESS':
      return {
        byId: {
          ...state.byId,
          ...action.response.reduce((acc, user) => {
              acc[user.id] = user;
              return acc;
            }, {})
        },
        allIds: [...new Set([
          ...state.allIds,
          ...action.response.map(user => user.id)
        ])]
      }
    default:
      return state;
  }
};

export default users;

export const getAllUsers = (state) => {
  return state.allIds.map(id => state.byId[id]);
};

export const getUser = (state, id) => {
  return state.byId[id];
};
