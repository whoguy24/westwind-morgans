import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* loginUser(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    if (action.payload.username && action.payload.password) {
      yield axios.post('api/user/login', action.payload, config);
      yield put({ type: 'FETCH_USER' });
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
          toast_description:"Successfully Logged In."
        }
      })
    } else {
      yield put({ 
        type: 'SET_SERVER', 
        payload: {
          loading:true, 
          duration:3000,
          result:400,
          toast_open:false,
          toast_autoHideDuration:6000, 
          toast_severity:"error", 
          toast_variant:"filled",
          toast_description:"A valid username and password are required to log in. Please try again."
        }
      })
    }
  } catch (error) {
    console.log("Error with user login:", error);
    yield put({ 
      type: 'SET_SERVER', 
      payload: {
        loading:true, 
        duration:3000,
        result:400,
        toast_open:false,
        toast_autoHideDuration:6000, 
        toast_severity:"error", 
        toast_variant:"filled",
        toast_description:"Provided username and password do not match our records. Please try again."
      }
    })
  }
}

function* logoutUser(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    yield axios.post('api/user/logout', config);
    yield put({ type: 'SERVER_200' });
    yield put({ type: 'UNSET_USER' });
  } catch (error) {
    console.log("Error with user logout:", error);
    yield put({ type: `SERVER_${error.response.status}` });
  }
}

function* loginSaga() {
  yield takeLatest('LOGIN', loginUser);
  yield takeLatest('LOGOUT', logoutUser);
}

export default loginSaga;
