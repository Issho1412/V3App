import {CREATE_STUDENT} from '../attendance/constants';
export const createStudent = (code, name, className, section, major, callback) => {
    return {
        type: CREATE_STUDENT,
        payload: {code, name, className, section, major},
        onComplete: ({error, canceled, data}) => {
            callback(data);
        },
    };
};