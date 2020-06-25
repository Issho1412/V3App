import {
    LOGIN_USER, SAVE_DATA_LOGIN,
} from "../user/constant";

export const loginUser = (idStudent, password, callback) => {
    return {
      type: LOGIN_USER,
      payload: { idStudent, password },
      onComplete: ({error, canceled, data}) => {
        callback(data);
      },
    };
};  

export const saveDataLogin = (data) => {
  return {
      type: SAVE_DATA_LOGIN,
      payload: data,
  }
}