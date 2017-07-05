import pluralize from 'pluralize';

import api from '../api';

export const updateEntity = (entityName, entity) => ({
  type: `UPDATE_${entityName.toUpperCase()}`,
  entity
});

export const createEntity = (entityName, entity) => ({
  type: `CREATE_${entityName.toUpperCase()}`,
  entity
});

export const fetchEntity = (entityName, id) => (dispatch) => {
  const pluralEntityName = pluralize(entityName, 2);

  return api[pluralEntityName].find(id).then(entity => {
    dispatch({
      type: `FETCH_${entityName.toUpperCase()}_SUCCESS`,
      entity
    });
  });
};

export const fetchEntities = (entityName) => (dispatch) => {
  const pluralEntityName = pluralize(entityName, 2);

  return api[pluralEntityName].all().then(response => {
    dispatch({
      type: `FETCH_${pluralEntityName.toUpperCase()}_SUCCESS`,
      response
    });
  });
};
