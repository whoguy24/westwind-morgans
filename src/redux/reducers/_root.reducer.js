import { combineReducers } from 'redux';
import server from './server.reducer';
import user from './user.reducer';
import users from './users.reducer';
import horses from './horses.reducer';
import horse from './horse.reducer';
import snackbar from './snackbar.reducer';

const rootReducer = combineReducers({
  server,
  user,
  users,
  horses,
  horse,
  snackbar,
});

export default rootReducer;