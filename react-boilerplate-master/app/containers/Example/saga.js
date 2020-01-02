import { take, takeLatest, takeEvery, call, put, select } from 'redux-saga/effects';
// import { data } from './api';
import { putData, getData } from './actions';
import { FETCH_REQUEST, FETCH_SUCCESS } from './constants';
import request from 'utils/request';
import { getUsers } from './selectors';


/**
 * Helper Saga
 */
export function* getAllUsers () {
  const requestURL = 'http://localhost:8080/user';
  try {
    const response = yield call(request, requestURL);
    yield put(putData(response));
  } catch(err) {
    console.log(err);
  }
}

/**
 * Root Saga
 */
export default function* Data() {
  yield takeEvery(FETCH_REQUEST, getAllUsers);
}

// export function* watchGetData() {
//   yield takeEvery(FETCH_REQUEST, getDatas);
// };

// export function* getDatas() {
//   const response = yield call(data);
//   console.log(`The response from the api call is ${response}`);
//   yield put(putData(response.data));
// }; 

