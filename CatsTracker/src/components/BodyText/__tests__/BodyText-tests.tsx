/* eslint-disable jest/no-identical-title */
import React from 'react';
import { render, toJSON } from '@testing-library/react-native';

import { BodyText } from '@components';
import { TextStyle } from 'react-native';

describe('<BodyText>', () => {
  it('renders correctly', () => {
    const text = 'Hello world';
    const { container } = render(<BodyText text={text} />);
    const tree = toJSON(container);

    expect(tree).toMatchSnapshot();
  });
});

describe('<BodyText>', () => {
  it('renders correctly with all props', () => {
    const customStyle: TextStyle = { fontSize: 20, color: 'red' };
    const text = 'Hello There';
    const { container } = render(<BodyText customStyle={customStyle} text={text} />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});
