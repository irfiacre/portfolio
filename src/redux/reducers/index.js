// For more information visit: https://redux.js.org/api/combinereducers

import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';

export default combineReducers({
    example: exampleReducer, 
});
