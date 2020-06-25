import {
    GET_SCHEDULES, 
    SAVE_SCHEDULES,
    GET_ALL_SCHEDULES,
    SAVE_ALL_SCHEDULES
} from "../schedules/constant";

export const getSchedules = (cookie, data, callback) => {
    return {
      type: GET_SCHEDULES,
      payload: { cookie, data },
      onComplete: ({error, canceled, data}) => {
        callback(data);
      },
    };
};  

export const saveDataSchedules = (data) => {
  return {
      type: SAVE_SCHEDULES,
      payload: data,
  }
}

export const getSchedulesAll = (cookie, data, callback) => {
    return {
        type: GET_ALL_SCHEDULES,
        payload: {cookie, data},
        onComplete: ({error, canceled, data}) => {
            callback(data);
        },
    };
};

export const saveDataSchedulesAll = (data) => {
    return {
        type: SAVE_ALL_SCHEDULES,
        payload: data,
    }
  }