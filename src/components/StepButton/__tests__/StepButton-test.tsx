/* eslint-disable jest/no-identical-title */
import { StepButton } from '@components';
import React from 'react';
import { render, toJSON } from '@testing-library/react-native';

describe('<StepButton>', () => {
  it('renders correctly', () => {
    const onPress = jest.fn();
    const { container } = render(<StepButton onPress={onPress} text="test" />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<StepButton>', () => {
  it('renders correctly Verification Button', () => {
    const onPress = jest.fn();
    const { container } = render(<StepButton placeholder="placeholder" onPress={onPress} isVerificationBtn />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<StepButton>', () => {
  it('renders correctly theme white', () => {
    const onPress = jest.fn();
    const { container } = render(<StepButton theme="white" text="White theme" onPress={onPress} />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<StepButton>', () => {
  it('renders correctly theme cream', () => {
    const onPress = jest.fn();
    const { container } = render(<StepButton theme="cream" text="cream theme" onPress={onPress} />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});
