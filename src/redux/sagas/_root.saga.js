import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import userSaga from './user.saga';
import usersSaga from './users.saga';
import horsesSaga from './horses.saga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    userSaga(),
    usersSaga(),
    horsesSaga(),
  ]);
}