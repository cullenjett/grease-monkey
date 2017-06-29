const createByIdReducer = (entityName, pluralEntityName) => (state = {}, action) => {
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
    case `FETCH_${pluralEntityName.toUpperCase()}_SUCCESS`:
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
