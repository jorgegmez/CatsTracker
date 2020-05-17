import React from 'react';
import {render, toJSON} from '@testing-library/react-native';

import {Icon} from '@components';

describe('<Icon>', () => {
  it('renders correctly', () => {
    const {container} = render(
      <Icon config={{name: 'calendar', type: 'font-awesome'}} />,
    );
    const tree = toJSON(container);

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly using material-community icons', () => {
    const {container} = render(
      <Icon config={{name: 'account', type: 'material-community'}} />,
    );
    const tree = toJSON(container);

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly using material icons', () => {
    const {container} = render(
      <Icon config={{name: 'account-box', type: 'material'}} />,
    );
    const tree = toJSON(container);

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly using simple-line-icon icons', () => {
    const {container} = render(
      <Icon config={{name: 'login', type: 'simple-line-icon'}} />,
    );
    const tree = toJSON(container);

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly using entypo icons', () => {
    const {container} = render(
      <Icon config={{name: 'address', type: 'entypo'}} />,
    );
    const tree = toJSON(container);

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly using ion icons', () => {
    const {container} = render(
      <Icon config={{name: 'ios-alarm', type: 'ion'}} />,
    );
    const tree = toJSON(container);

    expect(tree).toMatchSnapshot();
  });
});
