import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import usersSaga from './users.saga';
import stallionsSaga from './stallions.saga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    usersSaga(),
    stallionsSaga(),
  ]);
}
