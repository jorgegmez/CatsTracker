/* eslint-disable jest/no-identical-title */
import {Loading} from '@components';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Loading>', () => {
  it('renders correctly whit showModal = true', () => {
    const component = renderer.create(<Loading showModal />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Loading>', () => {
  it('renders correctly whit showModal = false', () => {
    const component = renderer.create(<Loading showModal={false} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
