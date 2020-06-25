import {SAVE_ALL_SCHEDULES, SAVE_SCHEDULES} from '../schedules/constant';
const INIT_STATE = {
   dataAll: {
        info: '',
        startHK: '' 
   },
   dataNAll: {
       infoWeek: []
   }
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SAVE_SCHEDULES:  {      
            state.dataNAll.infoWeek = action.payload;
            break;
        }
        case SAVE_ALL_SCHEDULES: {
            state.dataAll.info = action.payload.studentinfo;
            state.dataAll.startHK = action.payload.StartSemesterDate;
            break;
        }
    }
    return {
        ...state
    }
}