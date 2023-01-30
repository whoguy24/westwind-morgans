import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { select } from 'redux-saga/effects';
import { serverStore } from '../reducers/server.reducer.js'

function* registerUser(action) {
  try {
    const server = yield select(serverStore)
    yield axios.post('api/user/register', action.payload);
    const response = yield axios({ method: 'GET', url: '/api/users' });
    yield put({ type: 'LOAD_USERS', payload: response.data });
    yield put({ 
      type: 'SET_SERVER', 
      payload: {
        result:201,
        userbar:server.loading_duration,
        loading:false, 
        loading_duration:server.loading_duration,
        toast_open:true,
        toast_autoHideDuration:server.toast_autoHideDuration, 
        toast_severity:"success", 
        toast_variant:server.toast_variant,
        toast_description:`Successfully registered new user: ${action.payload.username}`
      }
    })
  } catch (error) {
    const server = yield select(serverStore)
    console.log("Error with user registration:", error);
    yield put({ 
      type: 'SET_SERVER', 
      payload: {
        result:error.response.status,
        userbar:server.userbar,
        loading:false, 
        loading_duration:server.loading_duration,
        toast_open:true,
        toast_autoHideDuration:server.toast_autoHideDuration, 
        toast_severity:"error", 
        toast_variant:server.toast_variant,
        toast_description: "Could not register user with the details provided. Please try again."
      }
    })
  }
}

function* registrationSaga() {
  yield takeLatest('REGISTER', registerUser);
}

export default registrationSaga;
