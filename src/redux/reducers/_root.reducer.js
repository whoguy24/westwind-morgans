import { combineReducers } from 'redux';
import user from './user.reducer';
import errors from './errors.reducer';

const rootReducer = combineReducers({
  errors,
  user,
});

export default rootReducer;
