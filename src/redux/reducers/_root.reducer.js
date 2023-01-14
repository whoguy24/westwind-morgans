import { combineReducers } from 'redux';
import error from './error.reducer';
import user from './user.reducer';
import users from './users.reducer';
import horses from './horses.reducer';
import horse from './horse.reducer';

const rootReducer = combineReducers({
  error,
  user,
  users,
  horses,
  horse,
});

export default rootReducer;