import { combineReducers } from 'redux';

import users from './users';
import vehicles from './vehicles';
import addresses from './addresses';

const rootReducer = combineReducers({
  users,
  vehicles,
  addresses
});

export default rootReducer;

export * from './addresses';
export * from './users';
export * from './vehicles';
