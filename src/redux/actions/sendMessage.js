import { SEND_MESSAGE } from './actionTypes';
import { sendMessage } from '../../service/sendMessage';

export const sendMessageAction = (data)=>({      
        type: SEND_MESSAGE,
        payload: sendMessage(data),
});
