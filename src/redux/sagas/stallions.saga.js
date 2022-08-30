import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchStallions() {
  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/stallions'
    })
    yield put({
      type: 'LOAD_STALLIONS',
      payload: response.data
    })
    console.log(response);
  } catch(error) {
    console.error('ERROR:', error)
  }
}

function* fetchStallion(action) {
  try {
    const response = yield axios({
      method: 'GET',
      url: `/api/stallions/${action.payload}`
    })
    yield put({
      type: 'LOAD_STALLION',
      payload: response.data
    })
  } catch(error) {
    console.error('ERROR:', error)
  }
}

function* stallionsSaga() {
  yield takeLatest('FETCH_STALLIONS', fetchStallions);
  yield takeLatest('FETCH_STALLION', fetchStallion);
}

export default stallionsSaga;