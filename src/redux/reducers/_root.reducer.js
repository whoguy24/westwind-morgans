import { combineReducers } from 'redux';
import server from './server.reducer';
import user from './user.reducer';
import users from './users.reducer';
import horses from './horses.reducer';
import horse from './horse.reducer';

const rootReducer = combineReducers({
  server,
  user,
  users,
  horses,
  horse,
});

export default rootReducer;