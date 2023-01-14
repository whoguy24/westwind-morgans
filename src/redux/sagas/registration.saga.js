import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* registerUser(action) {
  try {
    yield put({ type: 'ERROR_CLEAR' });

    yield axios.post('api/user/register', action.payload);

    yield put({ type: 'LOGIN', payload: action.payload });

    yield put({ type: 'SET_TO_LOGIN_MODE' });

  } catch (error) {

    console.log('Error with user registration:', error);

    yield put({ type: 'ERROR_SERVER' });

  }
}

function* registrationSaga() {
  yield takeLatest('REGISTER', registerUser);
}

export default registrationSaga;
