import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUsers(action) {
    try {
      const response = yield axios({ method: 'GET', url: '/api/users' });
      yield put({ type: 'LOAD_USERS', payload: response.data });
      yield put({ 
        type: 'SET_SERVER', 
        payload: {
          action:"FETCH_USERS",
          loading:true, 
          userbar:true,
          duration:1000,
          result:200,
          toast_open:false,
          toast_autoHideDuration:6000, 
          toast_severity:"success", 
          toast_variant:"filled",
          toast_description:"Successfully loaded users."
        }
      })
    } catch(error) {
      console.error('ERROR:', error)
      yield put({ 
        type: 'SET_SERVER', 
        payload: {
          action:"FETCH_USERS",
          loading:true, 
          userbar:true,
          duration:1000,
          result:500,
          toast_open:false,
          toast_autoHideDuration:6000, 
          toast_severity:"error", 
          toast_variant:"filled",
          toast_description:"There was a problem loading users. Please log out and try again."
        }
      })
    }
  }

function* usersSaga() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

export default usersSaga;