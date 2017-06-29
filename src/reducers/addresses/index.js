const initialState = {
  byId: {},
  allIds: []
};

const addresses = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_ADDRESS':
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
    case 'UPDATE_ADDRESS':
      return {
        byId: {
          ...state.byId,
          [action.user.id]: action.user
        },
        allIds: [...state.allIds]
      }
    case 'FETCH_ADDRESSES_SUCCESS':
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

export default addresses;

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
