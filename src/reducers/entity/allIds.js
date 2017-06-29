const createAllIdsReducer = (entityName, pluralEntityName) => (state = [], action) => {
  switch (action.type) {
    case `CREATE_${entityName.toUpperCase()}`:
      return [
        ...state,
        action.user.id
      ]
    case `UPDATE_${entityName.toUpperCase()}`:
      return [...state]
    case `FETCH_${pluralEntityName.toUpperCase()}_SUCCESS`:
      return [...new Set([
        ...state,
        ...action.response.map(user => user.id)
      ])]
    default:
      return state;
  }
};

export default createAllIdsReducer;
