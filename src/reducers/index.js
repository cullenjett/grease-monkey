import { combineReducers } from 'redux';

import users from './users';
import vehicles from './vehicles';

const rootReducer = combineReducers({
  users,
  vehicles
});

export default rootReducer;
