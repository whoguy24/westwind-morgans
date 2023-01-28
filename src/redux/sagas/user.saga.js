import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUser() {
  try {
    const config = { headers: { 'Content-Type': 'application/json' }, withCredentials: true, };
    const response = yield axios.get('api/user', config);
    yield put({ type: 'SERVER_200' });
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
    yield put({ type: `SERVER_${error.response.status}` });
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
}

export default userSaga;
