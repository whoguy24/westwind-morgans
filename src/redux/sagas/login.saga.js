import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { select } from 'redux-saga/effects';
import { serverStore } from '../reducers/server.reducer.js'

function* loginUser(action) {
  try {
    const config = { headers: { 'Content-Type': 'application/json' }, withCredentials: true };
    const server = yield select(serverStore)
    if (action.payload.username && action.payload.password) {
      console.log(action.payload)
      yield axios.post('api/user/login', action.payload, config);
      yield put({ type: 'FETCH_USER' });
      yield put({ 
        type: 'SET_SERVER', 
        payload: {
          result:200,
          userbar:true,
          loading:false, 
          loading_duration:server.loading_duration,
          toast_open:false,
          toast_autoHideDuration:server.toast_autoHideDuration, 
          toast_severity:"success", 
          toast_variant:server.toast_variant,
          toast_description:`Login successful: ${action.payload.username}`
        }
      })
    }
  } catch (error) {
    console.log("Error with user login:", error);
    const server = yield select(serverStore)
    yield put({ 
      type: 'SET_SERVER', 
      payload: {
        result:error.response.status,
        userbar:false,
        loading:false, 
        loading_duration:server.loading_duration,
        toast_open:true,
        toast_autoHideDuration:server.toast_autoHideDuration, 
        toast_severity:"error", 
        toast_variant:server.toast_variant,
        ...( error.response.status === 401 ? 
          { toast_description: "Invalid username and password combination. Please try again." } 
          : 
          { toast_description: "There was a problem communicating with the server. Please try again." }
        )
      }
    })
  }
}

function* logoutUser(action) {
  try {
    const config = { headers: { 'Content-Type': 'application/json' }, withCredentials: true };
    const server = yield select(serverStore)
    yield axios.post('api/user/logout', config);
    yield put({ type: 'UNSET_USER' });
    yield put({ 
      type: 'SET_SERVER', 
      payload: {
        result:200,
        userbar:false,
        loading:false, 
        loading_duration:server.loading_duration,
        toast_open:true,
        toast_autoHideDuration:server.toast_autoHideDuration, 
        toast_severity:"success", 
        toast_variant:server.toast_variant,
        toast_description:"Logout successful."
      }
    })
  } catch (error) {
    console.log("Error with user logout:", error);
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
        toast_description:"There was a problem logging out. Please try again."
      }
    })
  }
}

function* loginSaga() {
  yield takeLatest('LOGIN', loginUser);
  yield takeLatest('LOGOUT', logoutUser);
}

export default loginSaga;
