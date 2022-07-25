import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import users from './users.reducer';

const rootReducer = combineReducers({
  errors,
  user,
  users,
});

export default rootReducer;