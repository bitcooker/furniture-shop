import React from 'react';
import { shallow } from 'enzyme';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SaleSlider from './SaleSlider';

describe('Component SaleSlider', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render without crashing', () => {
    store = mockStore(initialState);
    const component = shallow(
      <Provider store={store}>
        <SaleSlider />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
