import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchStallions(action) {
  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/stallions'
    })
    yield put({
      type: 'LOAD_STALLIONS',
      payload: response.data
    })
  } catch(error) {
    console.error('ERROR:', error)
  }
}

function* stallionsSaga() {
  yield takeLatest('FETCH_STALLIONS', fetchStallions);
}

export default stallionsSaga;