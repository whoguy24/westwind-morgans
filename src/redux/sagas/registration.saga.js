import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* registerUser(action) {
  try {
    yield axios.post('api/user/register', action.payload);
    yield put({ type: 'SUCCESS_201' });
  } catch (error) {
    console.log("Error with user registration:", error);
    yield put({ type: `ERROR_${error.response.status}` });
  }
}

function* registrationSaga() {
  yield takeLatest('REGISTER', registerUser);
}

export default registrationSaga;
