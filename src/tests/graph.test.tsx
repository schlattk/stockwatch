// import * as Enzyme from 'enzyme';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Chart from '../Graph';

Enzyme.configure({ adapter: new Adapter() });

describe ('<Chart/> display', () => {
    it ('renders', () => {
    const wrapper = shallow(<Chart uri= {'https://api.iextrading.com/1.0/stock/aapl/chart/3m'}/>)
    expect(wrapper.exists()).toBe(true); 
    // return fetch('https://api.iextrading.com/1.0/stock/aapl/chart/3m')
    // .then(result => result.json())
    // .then(result => {
    // expect(result).toBeDefined();
    // })
});
