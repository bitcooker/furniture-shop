import React from 'react';
import { shallow } from 'enzyme';
import Cart from './Cart';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Component Cart', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render without crashing', () => {
    store = mockStore(initialState);
    const component = shallow(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
