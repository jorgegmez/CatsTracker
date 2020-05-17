import React from 'react';
import { render, toJSON } from '@testing-library/react-native';

import { Header } from '@components';
import { TextStyle, View, Text } from 'react-native';

describe('<Header>', () => {
  it('renders correctly', () => {
    const { container } = render(<Header />);
    const tree = toJSON(container);

    expect(tree).toMatchSnapshot();
  });
});

describe('<Header>', () => {
  it('renders correctly with children', () => {
    const { container } = render(
      <Header>
        <View>
          <Text>Hello there.</Text>
        </View>
      </Header>,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<Header>', () => {
  it('renders correctly with custom props', () => {
    const customStyle: TextStyle = { fontSize: 20, color: 'red' };
    const { container } = render(<Header customStyle={customStyle} />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<Header>', () => {
  it('renders correctly with custom props and children', () => {
    const customStyle: TextStyle = { fontSize: 20, color: 'red' };
    const { container } = render(
      <Header customStyle={customStyle}>
        <View>
          <Text>Hello there.</Text>
        </View>
      </Header>,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});
