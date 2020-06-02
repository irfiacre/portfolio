import  exampleReducer from '../../../redux/reducers/exampleReducer';
import { EXAMPLE } from '../../../redux/actions/actionTypes';

describe('---------> TESTING THE example REDUCER <---------', ()=>{
    it('should test for the example request pending', ()=>{
        const action = {
			type: `${EXAMPLE}_PENDING`,
        };
		const initialState = { loading: true, userInfo: {}, error: null };
        const newState = exampleReducer(initialState, action);
        
		expect(newState).toEqual(initialState);
    });

    it('should test for the example request fulfilled', ()=>{
        const action = {
            type: `${EXAMPLE}_FULFILLED`,
            payload: { message:'You have signed in successfully', status:200 },
        };

		const initialState = { loading: true, userInfo: {}, error: null };
        const newState = exampleReducer(initialState, action);
        
		expect(newState).toEqual({
            loading: false, 
            userInfo: {
                message:'You have signed in successfully', 
                status:200,
            }, 
            error: null
        });
    });

    it('should test for the example request rejected', ()=>{
        const action = {
            type: `${EXAMPLE}_REJECTED`,
            payload: 'JUST AN ERROR',
        };

		const initialState = { loading: true, userInfo: {}, error: null };
        const newState = exampleReducer(initialState, action);
        
		expect(newState).toEqual({
            loading: false, 
            userInfo: { }, 
            error: 'JUST AN ERROR',
        });
    });

});
