import { all } from 'redux-saga/effects';
import attendanceSagas from './attendance/sagas';
import userSagas from './user/sagas';
import schedulesSagas from './schedules/sagas';
import positionsSagas from './position/sagas';

export default function* rootSaga(getState){
    yield all ([
        attendanceSagas(),
        userSagas(),
        schedulesSagas(),
        positionsSagas(),
    ])
}