import React from 'react';
import { shallow } from 'enzyme';
import CompanyClaim from './CompanyClaim';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('CompanyClaim', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  it('renders without crashing', () => {
    store = mockStore(initialState);
    const component = shallow(
      <Provider store={store}>
        <CompanyClaim />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
