import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUsers(action) {
    try {
      const response = yield axios({
        method: 'GET',
        url: '/api/users'
      })
      yield put({
        type: 'LOAD_USERS',
        payload: response.data
      })
    } catch(error) {
      console.error('ERROR:', error)
    }
  }

function* usersSaga() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

export default usersSaga;