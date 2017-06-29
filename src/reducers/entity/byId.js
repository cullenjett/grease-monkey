const createByIdReducer = (entityName, pluralEntityName) => (state = {}, action) => {
  switch (action.type) {
    case `CREATE_${entityName.toUpperCase()}`:
      return {
        ...state,
        [action.entity.id]: action.entity
      }
    case `UPDATE_${entityName.toUpperCase()}`:
      return {
        ...state,
        [action.entity.id]: action.entity
      }
    case `FETCH_${pluralEntityName.toUpperCase()}_SUCCESS`:
      return {
        ...state,
        ...action.response.reduce((acc, entity) => {
            acc[entity.id] = entity;
            return acc;
          }, {})
      }
    default:
      return state;
  }
};

export default createByIdReducer;
