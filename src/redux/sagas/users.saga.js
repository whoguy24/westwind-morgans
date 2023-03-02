import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import { select } from 'redux-saga/effects';
import { serverStore } from '../reducers/server.reducer.js'

function* fetchUsers(action) {
    try {
      // const server = yield select(serverStore)
      console.log("In fetch users saga");
      
      // const response = yield axios({ method: 'GET', url: '/api/users' });


      const response = yield axios({ method: 'GET', url: '/api/users' });



      console.log(response)

      yield put({ type: 'LOAD_USERS', payload: response.data });
      // yield put({ 
      //   type: 'SET_SERVER', 
      //   payload: {
      //     result:200,
      //     userbar:server.userbar,
      //     loading:false, 
      //     loading_duration:server.loading_duration,
      //     toast_open:false, 
      //     toast_autoHideDuration:server.toast_autoHideDuration, 
      //     toast_severity:"success", 
      //     toast_variant:server.toast_variant,
      //     toast_description:"Successfully loaded users."
      //   }
      // })
    } catch(error) {
      console.error('ERROR:', error)
      // const server = yield select(serverStore)
      // yield put({ 
      //   type: 'SET_SERVER', 
      //   payload: {
      //     result:error.response.status,
      //     userbar:server.userbar,
      //     loading:false, 
      //     loading_duration:server.loading_duration,
      //     toast_open:true,
      //     toast_autoHideDuration:server.toast_autoHideDuration, 
      //     toast_severity:"error", 
      //     toast_variant:server.toast_variant,
      //     toast_description:"There was a problem loading users. Please log out and try again."
      //   }
      // })
    }
  }

function* usersSaga() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

export default usersSaga;