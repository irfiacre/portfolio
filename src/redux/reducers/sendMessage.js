import { SEND_MESSAGE } from '../actions/actionTypes';

const initialState = {
    loading: false,
    emailNotSent:true,
    messageInfo: {  },
    error: null
  };

export default (state = initialState, action)=>{
  switch (action.type) {
      case `${SEND_MESSAGE}_PENDING`: 
          return  { ...state, error:null, loading: true };

      case `${SEND_MESSAGE}_FULFILLED`:
           return  { ...state,loading:false, emailNotSent:false, messageInfo: action.payload, error:null };
          
      case `${SEND_MESSAGE}_REJECTED`:
          return  { ...state, loading:false, error: `${action.payload }`};
          
      default:
          return state;
  }
};
