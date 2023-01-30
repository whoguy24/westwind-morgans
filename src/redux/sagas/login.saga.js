import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* loginUser(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    if (action.payload.username && action.payload.password) {
      yield axios.post('api/user/login', action.payload, config);
      yield put({ type: 'FETCH_USER' });
      yield put({ 
        type: 'SET_SERVER', 
        payload: {
          action:"LOGIN_USER",
          loading:true, 
          userbar:true,
          duration:1000,
          result:200,
          toast_open:false,
          toast_autoHideDuration:6000, 
          toast_severity:"success", 
          toast_variant:"filled",
          toast_description:`Login successful: ${action.payload.username}`
        }
      })
    }
  } catch (error) {
    console.log("Error with user login:", error);
    yield put({ 
      type: 'SET_SERVER', 
      payload: {
        action:"LOGIN_USER",
        loading:true, 
        userbar:true,
        duration:1000,
        result:error.response.status,
        toast_open:false,
        toast_autoHideDuration:6000, 
        toast_severity:"error", 
        toast_variant:"filled",
        ...( error.response.status === 401 ? 
          { toast_description: "Invalid username and password combination. Please try again." } 
          : 
          { toast_description: "There was a problem communicating with the server. Please try again." }
        )
      }
    })
  }
}

function* logoutUser(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    yield axios.post('api/user/logout', config);
    yield put({ type: 'UNSET_USER' });
    yield put({ 
      type: 'SET_SERVER', 
      payload: {
        action:"LOGOUT_USER",
        loading:true, 
        userbar:true,
        duration:1000,
        result:200,
        toast_open:false,
        toast_autoHideDuration:6000, 
        toast_severity:"success", 
        toast_variant:"filled",
        toast_description:"Logout successful."
      }
    })
  } catch (error) {
    console.log("Error with user logout:", error);
    yield put({ 
      type: 'SET_SERVER', 
      payload: {
        action:"LOGOUT_USER",
        loading:true, 
        userbar:true,
        duration:1000,
        result:error.response.status,
        toast_open:false,
        toast_autoHideDuration:6000, 
        toast_severity:"error", 
        toast_variant:"filled",
        toast_description: "There was a problem logging out. Please try again."
      }
    })
  }
}

function* loginSaga() {
  yield takeLatest('LOGIN', loginUser);
  yield takeLatest('LOGOUT', logoutUser);
}

export default loginSaga;
