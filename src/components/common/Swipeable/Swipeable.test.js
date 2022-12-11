import React from 'react';
import { shallow } from 'enzyme';
import Swipeable from './Swipeable';

describe('Component Swipeable', () => {
  it('should render without crashing', () => {
    const component = shallow(<Swipeable />);
    expect(component).toBeTruthy();
  });
});
