import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {Connect_POST} from '../../functions/apiHelper';
import {withCallback} from 'redux-saga-callback';
import { LOGIN_USER } from '../user/constant';
import {saveDataLogin} from '../actions';
import {
    APP_API_DOMAIN,
    APP_API_LOGIN,
} from '../../constants/apiUrl';


//API Login
function* loginUser({payload}) {
  if (payload.idStudent === '' || payload.password === '') {
    return {
      is_success: false,
      result_code: 'WRONG_USER',
      result_message: 'Invalid user or password',
    };
  }
  var body = {
    username: payload.idStudent,
    password: payload.password,
  };
  // loginUser = yield call(Connect, requestType,'account/Login', 'POST', body, false);
  var loginResult = yield call(
    Connect_POST,
    APP_API_DOMAIN + APP_API_LOGIN,
    body,
    false,
  );
  console.log('login result: ', loginResult);
  if (loginResult) {
    if (loginResult.message === 'success') {
        yield put(saveDataLogin(loginResult));
    }
  }
  return loginResult;
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, withCallback(loginUser));
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
  ]);
}
