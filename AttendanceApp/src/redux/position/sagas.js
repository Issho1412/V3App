import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {Connect_GET} from '../../functions/apiHelper';
import {withCallback} from 'redux-saga-callback';
import {
    APP_API_DOMAIN,
    APP_APP_GET_POSITION_ROOM
} from '../../constants/apiUrl';
import { GET_POSITION_ROOM } from '../position/constants';

//API GET SCHEDULES ALL
function* getPositionRoom({payload}) {
  console.log('payload', payload);
  if(payload.room == null || payload.room == ''){
    return {
      is_success: false,
      result_message: 'Invalid user or password',
    };
  } 
  var body = '';
  let posRoom = payload.room;
  console.log(APP_API_DOMAIN + APP_APP_GET_POSITION_ROOM + posRoom);
  var roomResult = yield call(
    Connect_GET,
    APP_API_DOMAIN + APP_APP_GET_POSITION_ROOM + posRoom,
    body,
    false,
  );

  if(roomResult){
    if(roomResult.message === 'success'){
      console.log('success');
    }
  }
  return roomResult;
}

export function* watchGetPositionRoom() {
  yield takeEvery(GET_POSITION_ROOM, withCallback(getPositionRoom));
}

export default function* rootSaga() {
  yield all([
    fork(watchGetPositionRoom),
  ]);
}
