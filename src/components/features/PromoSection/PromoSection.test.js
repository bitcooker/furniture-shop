import React from 'react';
import { shallow } from 'enzyme';
import PromoSection from './PromoSection';

describe('Component PromoSection', () => {
  it('should render without crashing', () => {
    const component = shallow(<PromoSection />);
    expect(component).toBeTruthy();
  });
});
