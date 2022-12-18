import React from 'react';
import { shallow } from 'enzyme';
import TopBar from './TopBar';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('TopBar', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  it('renders without crashing', () => {
    store = mockStore(initialState);
    const component = shallow(
      <Provider store={store}>
        <TopBar />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
