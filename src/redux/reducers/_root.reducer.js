import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import users from './users.reducer';
import horses from './horses.reducer';
import horse from './horse.reducer';

const rootReducer = combineReducers({
  errors,
  user,
  users,
  horses,
  horse,
});

export default rootReducer;