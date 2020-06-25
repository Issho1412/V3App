import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {Connect_POST} from '../../functions/apiHelper';
import {withCallback} from 'redux-saga-callback';
import {saveDataSchedules, saveDataSchedulesAll} from '../actions';
import {
    APP_API_DOMAIN,
    APP_APP_GET_SCHEDULES, 
    APP_APP_GET_SCHEDULES_ALL
} from '../../constants/apiUrl';
import { GET_ALL_SCHEDULES, GET_SCHEDULES} from './constant';

//API GET SCHEDULES ALL
function* getSchedulesAll({payload}) {
  if (payload.cookie === '' || payload.data === '') {
    return {
      is_success: false,
      result_message: 'Invalid user or password',
    };
  }
  var body = {
    cookie: payload.cookie,
    data: payload.data,
  };
  var schedulesResultAll = yield call(
    Connect_POST,
    APP_API_DOMAIN + APP_APP_GET_SCHEDULES_ALL,
    body,
    false,
  );
  if (schedulesResultAll) {
    if (schedulesResultAll.Schedule !== null || schedulesResultAll.schedulesResultAll.Schedule !== '') {
        yield put(saveDataSchedulesAll(schedulesResultAll));
    }
  }
  return schedulesResultAll;
}

export function* watchSchedulesAll() {
  yield takeEvery(GET_ALL_SCHEDULES, withCallback(getSchedulesAll));
}


//API GET SCHEDULES 
function* getSchedules({payload}) {
    if (payload.cookie === '' || payload.data === '') {
      return {
        is_success: false,
        result_message: 'Invalid user or password',
      };
    }
    var body = {
      cookie: payload.cookie,
      data: payload.data,
    }; 
    var schedulesResult = yield call(
      Connect_POST,
      APP_API_DOMAIN + APP_APP_GET_SCHEDULES,
      body,
      false,
    );
    if (schedulesResult) {
      if (schedulesResult.message === 'success') {
          yield put(saveDataSchedules(schedulesResult.data));
      }
    }
    return schedulesResult;
  }
  
export function* watchSchedules() {
    yield takeEvery(GET_SCHEDULES, withCallback(getSchedules));
}

export default function* rootSaga() {
  yield all([
    fork(watchSchedules),
    fork(watchSchedulesAll),
  ]);
}
