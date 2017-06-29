import { combineReducers } from 'redux';

import createByIdReducer from './byId';
import createAllIdsReducer from './allIds';

const createEntityReducers = (entityName) => {
  return combineReducers({
    byId: createByIdReducer(entityName),
    allIds: createAllIdsReducer(entityName)
  });
}

export default createEntityReducers;
