import Map from '../index';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<tripMap>', () => {
  it('should render correctly with catCoordinates', () => {
    const userCoordinates = {
      latitude: 9.906087,
      longitude: -83.684234,
    };
    const component = renderer.create(<Map userCoordinates={userCoordinates} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Map>', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Map />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
