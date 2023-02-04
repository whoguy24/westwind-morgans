import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { select } from 'redux-saga/effects';
import { serverStore } from '../reducers/server.reducer.js'

function* fetchUser() {
  try {
    const config = { headers: { 'Content-Type': 'application/json' }, withCredentials: true, };
    const response = yield axios.get('api/user', config);
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* deleteUser(action) {
  try {
    const server = yield select(serverStore)
    yield axios({ method: 'DELETE', url: `/api/user/${action.payload.id}`})
    const response = yield axios({ method: 'GET', url: '/api/users' });
    yield put({ type: 'LOAD_USERS', payload: response.data });
    yield put({ 
      type: 'SET_SERVER', 
      payload: {
        result:200,
        userbar:server.loading_duration,
        loading:false, 
        loading_duration:server.loading_duration,
        toast_open:true,
        toast_autoHideDuration:server.toast_autoHideDuration, 
        toast_severity:"success", 
        toast_variant:server.toast_variant,
        toast_description:`Successfully deleted user: ${action.payload.username}`
      }
    })
  } catch (error) {
    console.log(error)
    const server = yield select(serverStore)
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
        toast_description: "There was a problem deleting this user. Please try again."
      }
    })
  }
}

function* changeUserPassword(action) {
  try {
    const server = yield select(serverStore)
    const config = { headers: { 'Content-Type': 'application/json' }, withCredentials: true };
    console.log(action.payload)
    yield axios({ method: 'PUT', url: "/api/user/changePassword", data: action.payload, config})
    yield put({ 
      type: 'SET_SERVER', 
      payload: {
        result:200,
        userbar:server.loading_duration,
        loading:false, 
        loading_duration:server.loading_duration,
        toast_open:true,
        toast_autoHideDuration:server.toast_autoHideDuration, 
        toast_severity:"success", 
        toast_variant:server.toast_variant,
        toast_description:`Password successfully changed: ${action.payload.username}`
      }
    })
  } catch (error) {
    console.log(error)
    const server = yield select(serverStore)
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
        ...( error.response.status === 404 ? 
          { toast_description: "Only administrators can change this password. Please contact your administrator, or try again." } 
          : 
          { toast_description: "There was a problem communicating with the server. Please try again." }
        )
      }
    })
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('DELETE_USER', deleteUser);
  yield takeLatest('CHANGE_USER_PASSWORD', changeUserPassword);
}

export default userSaga;
