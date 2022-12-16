/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});
