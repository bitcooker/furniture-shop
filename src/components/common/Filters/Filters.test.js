import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';

describe('Component Filters', () => {
  it('should render without crashing', () => {
    const component = shallow(<Filters />);
    expect(component).toBeTruthy();
  });
});
