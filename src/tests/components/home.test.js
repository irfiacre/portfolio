import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../components/home';

describe('*************** Testing the Home  component ***************',()=>{
    it('Should render the Home page correctly', ()=>{
        const wrapper = shallow( <Home  /> );
        expect(wrapper).toMatchSnapshot();
    });
});