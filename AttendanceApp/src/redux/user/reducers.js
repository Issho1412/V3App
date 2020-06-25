import {SAVE_DATA_LOGIN} from '../user/constant';
const INIT_STATE = {
    session: '',
};

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case SAVE_DATA_LOGIN:
            state.session = action.payload.cookie;
            break;
    }
    return {
        ...state
    }
}