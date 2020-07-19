// For more information visit: https://redux.js.org/api/combinereducers

import { combineReducers } from 'redux';
import sendMessage from './sendMessage';


export default combineReducers({
    messageData: sendMessage,
});
