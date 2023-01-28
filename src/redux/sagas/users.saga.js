import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUsers(action) {
    try {
      const response = yield axios({ method: 'GET', url: '/api/users' });
      yield put({ type: 'LOAD_USERS', payload: response.data });
      yield put({ type: 'SERVER_200' });
    } catch(error) {
      console.error('ERROR:', error)
      yield put({ type: `SERVER_${error.response.status}` });
    }
  }

function* usersSaga() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

export default usersSaga;