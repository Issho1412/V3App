import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {Connect_POST} from '../../functions/apiHelper';
import {withCallback} from 'redux-saga-callback';
import { CREATE_STUDENT } from '../attendance/constants';
import { APP_API_DOMAIN, APP_APP_CREATE_STUDENT } from '../../constants/apiUrl';


// API CREATE STUDENT 
function* createStudent ({payload}){
    if(payload.code === '' || payload.name === '' || payload.major === '' || payload.section === '' || payload.className ==''){
        return{
            is_success: false,
            result_code: 'WRONG_USER',
            result_message: 'Invalid user or password',
        }
    }
    let body = {
        code: payload.code,
        className: payload.className,
        name: payload.name,
        section: payload.section,
        major: payload.major
    };

    var createResult = yield call(
        Connect_POST,
        APP_API_DOMAIN + APP_APP_CREATE_STUDENT,
        body,
        false
    );
    if(createResult){
        if(createResult.status == '200'){
            console.log('Successfull ');
        }
    }
    return createResult;
}

export function* watchCreateStudent() {
    yield takeEvery(CREATE_STUDENT, withCallback(createStudent));
}

export default function* rootSaga() {
    yield all([
      fork(watchCreateStudent),
    ]);
  }
  