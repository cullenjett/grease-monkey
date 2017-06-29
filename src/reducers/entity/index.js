import { combineReducers } from 'redux';

import createByIdReducer from './byId';
import createAllIdsReducer from './allIds';

const createEntityReducers = (entityName, pluralEntityName = entityName + 's') => {
  return combineReducers({
    byId: createByIdReducer(entityName, pluralEntityName),
    allIds: createAllIdsReducer(entityName, pluralEntityName)
  });
}

export default createEntityReducers;
