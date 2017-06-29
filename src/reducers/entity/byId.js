const createByIdReducer = (entityName) => (state = {}, action) => {
  switch (action.type) {
    case `CREATE_${entityName.toUpperCase()}`:
      return {
        ...state,
        [action.user.id]: action.user
      }
    case `UPDATE_${entityName.toUpperCase()}`:
      return {
        ...state,
        [action.user.id]: action.user
      }
    case `FETCH_${entityName.toUpperCase()}S_SUCCESS`:
      return {
        ...state,
        ...action.response.reduce((acc, user) => {
            acc[user.id] = user;
            return acc;
          }, {})
      }
    default:
      return state;
  }
};

export default createByIdReducer;
