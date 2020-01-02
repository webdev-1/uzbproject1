import { take, call, put, select, takeEvery } from 'redux-saga/effects';
// import { data } from './api';
import { putData, getData } from './actions';
import { FETCH_REQUEST, FETCH_SUCCESS } from './constants';
import request from 'utils/request';
import { getUsers } from './selectors';

export function* getAllUsers() {
  const requestURL = 'http://localhost:8080/user';
  try{
    const response = yield call(request, requestURL);
    console.log(response);
    yield put(putData(response));
  }catch(err){
    console.log(err);
  }
}


/**
 * Root Saga
 */
export default function* Data() {
  yield takeEvery(FETCH_REQUEST, getAllUsers);
}


// Individual exports for testing
// export default function* exampleSaga() {
  // See example in containers/HomePage/saga.js
// }

// export function* watchGetData() {
//   yield takeEvery( 'FETCH_REQUEST', getData);
// }

// export function* getData(){
//   const response = yield call(data);
//   console.log ('response has come in');
//   yield put(putData(response));
// }
