import { onExample } from '../../../redux/actions/actionExample';


describe('===========> Testing The Example Action <===============',()=>{
    it('Should test for the example action',()=>{
        const exampleAction = onExample();

        expect(exampleAction).toEqual({
            type: 'EXAMPLE_ACTION',
            payload:  expect.anything(),
        });
    });

});