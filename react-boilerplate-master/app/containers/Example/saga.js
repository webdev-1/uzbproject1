import { put, all, call, takeLatest } from 'redux-saga/effects';
import { getUsers } from './actions';
import { findAll } from '../../services/Users';
import { FETCH_SUCCESS } from './constants';


function* exampleSaga() {
  try {
    const resp = yield call(findAll);
    yield put(getUsers(resp.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* usersSaga() {
  yield all([
    exampleSaga(),
    takeLatest(FETCH_SUCCESS, exampleSaga),
  ]);
}