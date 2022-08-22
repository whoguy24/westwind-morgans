import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchHorses(action) {
    try {
      const response = yield axios({
        method: 'GET',
        url: `/api/horses/${action.route}`
      })
      yield put({
        type: 'LOAD_HORSES',
        payload: response.data
      })
    } catch(error) {
      console.error('ERROR:', error)
    }
}

function* fetchHorse(action) {
  try {
    const response = yield axios({
      method: 'GET',
      url: `/api/horses/${action.route}/${action.id}`
    })
    yield put({
      type: 'LOAD_HORSE',
      payload: response.data
    })
  } catch(error) {
    console.error('ERROR:', error)
  }
}

function* horsesSaga() {
  yield takeLatest('FETCH_HORSES', fetchHorses);
  yield takeLatest('FETCH_HORSE', fetchHorse);
}

export default horsesSaga;