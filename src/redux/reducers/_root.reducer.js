import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import users from './users.reducer';
import stallions from './stallions.reducer';

const rootReducer = combineReducers({
  errors,
  user,
  users,
  stallions,
});

export default rootReducer;