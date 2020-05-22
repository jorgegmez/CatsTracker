/* eslint-disable jest/no-identical-title */
import React from 'react';
import { View, Text } from 'react-native';
import { render, toJSON } from '@testing-library/react-native';
import { Card } from '@components';

describe('<Card>', () => {
  it('renders correctly theme white', () => {
    const { container } = render(
      <Card theme="white">
        <View>
          <Text>Testing...</Text>
        </View>
      </Card>,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<Card>', () => {
  it('renders correctly theme grey', () => {
    const { container } = render(
      <Card theme="grey">
        <View>
          <Text>Testing...</Text>
        </View>
      </Card>,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});
