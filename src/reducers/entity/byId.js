import pluralize from 'pluralize';

const createByIdReducer = (entityName) => (state = {}, action) => {
  const pluralEntityName = pluralize(entityName, 2);

  switch (action.type) {
    case `CREATE_${entityName.toUpperCase()}`:
      return {
        ...state,
        [action.entity.id]: action.entity
      }
    case `UPDATE_${entityName.toUpperCase()}`:
    case `FETCH_${entityName.toUpperCase()}_SUCCESS`:
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
