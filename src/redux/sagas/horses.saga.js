import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchHorses(action) {
    try {
      const response = yield axios({ method: 'GET', url: `/api/horses/${action.route}` })
      yield put({ type: 'LOAD_HORSES', payload: response.data })
      yield put({ type: 'SERVER_200' });
    } catch(error) {
      console.error('ERROR:', error)
      yield put({ type: `SERVER_${error.response.status}` });
    }
}

function* fetchHorse(action) {
  try {
    const response = yield axios({ method: 'GET', url: `/api/horses/${action.route}/${action.id}` })
    yield put({ type: 'LOAD_HORSE', payload: response.data })
    yield put({ type: 'SERVER_200' });
  } catch(error) {
    console.error('ERROR:', error)
    yield put({ type: `SERVER_${error.response.status}` });
  }
}

function* horsesSaga() {
  yield takeLatest('FETCH_HORSES', fetchHorses);
  yield takeLatest('FETCH_HORSE', fetchHorse);
}

export default horsesSaga;