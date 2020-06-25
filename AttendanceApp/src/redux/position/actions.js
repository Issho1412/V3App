import { GET_POSITION_ROOM } from '../position/constants';

export const getPositionRoom = (room, callback) => {
    return {
      type: GET_POSITION_ROOM,
      payload: { room },
      onComplete: ({error, canceled, data}) => {
        callback(data);
      },
    };
};  
