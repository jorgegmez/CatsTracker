import React from 'react';
import { Provider } from 'react-redux';
import { render, toJSON } from '@testing-library/react-native';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { reducersNameUser } from '@constants';
import { initialState } from '@state/global/user';
import SideBar from '../';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

const store = mockStore({
  [reducersNameUser.USER]: initialState,
});

describe('<SideBar>', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <SideBar />
      </Provider>,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});
