import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUsers(action) {
    try {
      const response = yield axios({ method: 'GET', url: '/api/users' });
      yield put({ type: 'LOAD_USERS', payload: response.data });
      yield put({ 
        type: 'SET_SERVER', 
        payload: {
          loading:true, 
          duration:3000,
          result:200,
          toast_open:false,
          toast_autoHideDuration:6000, 
          toast_severity:"success", 
          toast_variant:"filled",
          toast_description:"Loading successful."
        }
      })
    } catch(error) {
      console.error('ERROR:', error)
    }
  }

function* usersSaga() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

export default usersSaga;