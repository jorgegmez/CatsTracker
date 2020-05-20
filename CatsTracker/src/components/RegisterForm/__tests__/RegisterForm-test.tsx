/* eslint-disable jest/no-identical-title */
import React from 'react';
import { View } from 'react-native';
import { render, toJSON } from '@testing-library/react-native';
import { RegisterForm, Input } from '@components';

describe('<RegisterForm>', () => {
  it('renders correctly theme white', () => {
    const { container } = render(
      <RegisterForm theme="white">
        <View>
          <Input
            onChange={() => {
              // do nothing
            }}
            type="normal"
            label="test"
          />
        </View>
      </RegisterForm>,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<RegisterForm>', () => {
  it('renders correctly theme grey', () => {
    const { container } = render(
      <RegisterForm theme="grey">
        <View>
          <Input
            onChange={() => {
              // do nothing
            }}
            type="normal"
            label="test"
          />
        </View>
      </RegisterForm>,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});
