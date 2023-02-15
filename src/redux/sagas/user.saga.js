import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { select } from 'redux-saga/effects';
import { serverStore } from '../reducers/server.reducer.js'
import { usersStore } from '../reducers/users.reducer.js'
import { userStore } from '../reducers/user.reducer.js'

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
    yield axios({ method: 'DELETE', url: `/api/user/${action.payload.id}`, data: action.payload})
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
        ...( 
          error.response.status === 400 ? 
          { toast_description: "Cannot delete a user that is currently logged in. Please log in as a different user and try again." } 
          : 
          error.response.status === 401 ?
          { toast_description: "Users can only be deleted by an administrator, or the user that created them. Please try again." }
          :
          { toast_description: "There was a problem deleting this user. Please try again." }
        )
      }
    })
  }
}

function* editUser(action) {
  try {
    const server = yield select(serverStore)
    const users = yield select(usersStore)
    const user = yield select(userStore)
    if (
      users.find(user=>user.id===action.payload.id).role === "ADMIN" && action.payload.role === "USER" && users.filter(user => user.role === "ADMIN" ).length <= 1
    ) { 
      yield put({ 
        type: 'SET_SERVER', 
        payload: {
          result:400,
          userbar:server.userbar,
          loading:false, 
          loading_duration:server.loading_duration,
          toast_open:true,
          toast_autoHideDuration:server.toast_autoHideDuration, 
          toast_severity:"error", 
          toast_variant:server.toast_variant,
          toast_description: "There must be at least one administrator account. Please try again."
        }
      })
    } else {
      yield axios({ method: 'PUT', url: `/api/user/${action.payload.id}`, data: action.payload })
      if ( user.id === action.payload.id ) {
        yield put({ type: 'SET_USER', payload: action.payload });
      }
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
          toast_description:`Successfully edited user: ${action.payload.username}`
        }
      })
    }
  } catch (error) {
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
        toast_description: "There was a problem editing this user. Please try again."
      }
    })
  }
}

function* changeUserPassword(action) {
  try {
    const server = yield select(serverStore)
    const config = { headers: { 'Content-Type': 'application/json' }, withCredentials: true };
    console.log(action.payload)
    yield axios({ method: 'PUT', url: `/api/user/${action.payload.id}/changePassword`, data: action.payload, config})
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
        toast_description:`Password successfully changed for user: "${action.payload.username}"`
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
        ...( error.response.status === 401 ? 
          { toast_description: "The password submitted does not match our records. Please try again." } 
          : 
          { toast_description: "There was a problem communicating with the server. Please try again." }
        )
      }
    })
  }
}

function* registerUser(action) {
  try {

    console.log(action.payload)

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
        ...( error.response.status === 400 ? 
          { toast_description: "A user account with the submitted username already exists. Please try again." } 
          : 
          { toast_description: "There was a problem communicating with the server. Please try again." }
        )
      }
    })
  }
}

function* resetPassword(action) {
  try {
    const config = { headers: { 'Content-Type': 'application/json' }, withCredentials: true };
    yield axios({ method: 'PUT', url: `/api/user/${action.payload.email}/resetPassword`, data: action.payload, config})

  } catch (error) {
    console.log("Error with user registration:", error);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('REGISTER_USER', registerUser);
  yield takeLatest('EDIT_USER', editUser);
  yield takeLatest('DELETE_USER', deleteUser);
  yield takeLatest('CHANGE_USER_PASSWORD', changeUserPassword);
  yield takeLatest('RESET_PASSWORD', resetPassword);
}

export default userSaga;
