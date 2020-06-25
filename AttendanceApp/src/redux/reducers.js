import { combineReducers } from 'redux';
import attendanceReducer from './attendance/reducer';
import userReducer from './user/reducers';
import schedulesReducer from './schedules/reducer';
import positionsReducer from './position/reducer';

const reducers = combineReducers({
    attendanceReducer,
    userReducer,
    schedulesReducer,
    positionsReducer,
});

export default reducers;