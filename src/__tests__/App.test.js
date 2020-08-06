import React from 'react';
import {shallow} from 'enzyme'
import App from '../App';

it('renders a div correctly',()=>{
 const wrapped = shallow(<App/>); 
 expect(wrapped.find('div').length).toEqual(1);
})
