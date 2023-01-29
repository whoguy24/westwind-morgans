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
      // yield put({ type: 'SERVER_200' });
      yield put({ type: 'FETCH_USER' });
      yield put({ 
        type: 'OPEN_SNACKBAR', 
        payload: {
          open:true, 
          autoHideDuration:6000, 
          severity:"success", 
          variant:"filled",
          description:"Successfully Logged In."
        }
      })
    } else {
      // yield put({ type: 'SERVER_400' });
    }
  } catch (error) {
    console.log("Error with user login:", error);
    // yield put({ type: `SERVER_${error.response.status}` });
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
