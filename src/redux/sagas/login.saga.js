import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* loginUser(action) {
  try {
    yield put({ type: 'ERROR_CLEAR' });
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    if (action.payload.username && action.payload.password) {
      yield axios.post('api/user/login', action.payload, config);
      yield put({ type: 'FETCH_USER' });
    } else {
      yield put({ type: 'ERROR_400' });
    }
  } catch (error) {
    console.log("Error with user login:", error);
    yield put({ type: `ERROR_${error.response.status}` });
  }
}

function* logoutUser(action) {
  try {
    yield put({ type: 'ERROR_LOGIN_CLEAR' });
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    yield axios.post('api/user/logout', config);
    yield put({ type: 'UNSET_USER' });
  } catch (error) {
    console.log("Error with user logout:", error);
    yield put({ type: `ERROR_${error.response.status}` });
  }
}

function* loginSaga() {
  yield takeLatest('LOGIN', loginUser);
  yield takeLatest('LOGOUT', logoutUser);
}

export default loginSaga;
