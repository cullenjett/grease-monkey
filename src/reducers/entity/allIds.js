import pluralize from 'pluralize';

const createAllIdsReducer = (entityName) => (state = [], action) => {
  const pluralEntityName = pluralize(entityName, 2);

  switch (action.type) {
    case `CREATE_${entityName.toUpperCase()}`:
      return [
        ...state,
        action.entity.id
      ]
    case `UPDATE_${entityName.toUpperCase()}`:
      return [...state]
    case `FETCH_${entityName.toUpperCase()}_SUCCESS`:
      return [...new Set([
        ...state,
        action.entity.id
      ])]
    case `FETCH_${pluralEntityName.toUpperCase()}_SUCCESS`:
      return [...new Set([
        ...state,
        ...action.response.map(entity => entity.id)
      ])]
    default:
      return state;
  }
};

export default createAllIdsReducer;
