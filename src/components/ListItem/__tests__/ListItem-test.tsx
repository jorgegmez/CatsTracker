import { ListItem } from '@components';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ListItem>', () => {
  it('renders correctly', () => {
    const component = renderer.create(<ListItem title="Title test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
