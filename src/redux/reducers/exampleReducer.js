import { EXAMPLE } from '../actions/actionTypes';

const initialState = {
    loading: false,
    foundInfo: {  },
    error: null
  };

export default (state = initialState, action)=>{
  switch (action.type) {
      case `${EXAMPLE}_PENDING`: 
          return  { ...state, error:null, loading: true };

      case `${EXAMPLE}_FULFILLED`:
           return  { loading:false , userInfo: action.payload, error:null };
          
      case `${EXAMPLE}_REJECTED`:
          return  { ...state, loading:false, error: `JUST AN ERROR`};
          
      default:
          return state;
  }
};
