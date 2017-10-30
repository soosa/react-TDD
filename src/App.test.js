/* global test, it, expect */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('App renders without crashing', () => {
  const component = shallow(<App />);
  expect(component.exists()).toEqual(true);
});

// test('adds 1 + 2 to equal 3', () => {
//   expect(App(1, 2)).toBe(2);
// });