import React from 'react';
import { render, toJSON } from '@testing-library/react-native';

import { ThinButton } from '@components';

describe('<ThinButton>', () => {
  it('renders correctly', () => {
    const text = 'Hello world';
    const { container } = render(<ThinButton text={text} />);
    const tree = toJSON(container);

    expect(tree).toMatchSnapshot();
  });
});
