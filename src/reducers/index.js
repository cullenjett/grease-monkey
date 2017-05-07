import { combineReducers } from 'redux';

import users from './users/index';

const rootReducer = combineReducers({
  users
});

export default rootReducer;
