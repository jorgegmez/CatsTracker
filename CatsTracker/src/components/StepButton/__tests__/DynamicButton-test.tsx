/* eslint-disable jest/no-identical-title */
import DynamicButton from '../DynamicButton';
import React from 'react';
import {Text, Image} from 'react-native';
import {render, toJSON, fireEvent} from '@testing-library/react-native';
import {imagesGlobal} from '@constants';

describe('<DynamicButton>', () => {
  it('renders correctly', () => {
    const onPress = jest.fn();
    const {container} = render(
      <DynamicButton onPress={onPress} testID="DynamicBtn" text="test" />,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<DynamicButton>', () => {
  it('renders correctly with right Component', () => {
    const onPress = jest.fn();
    const {container} = render(
      <DynamicButton
        onPress={onPress}
        text="test"
        testID="DynamicBtn"
        sufixComponent={<Text>Test</Text>}
      />,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<DynamicButton>', () => {
  it('renders correctly with left Icon', () => {
    const onPress = jest.fn();
    const icon = {name: 'Test Name', type: 'Test type'};
    const {container} = render(
      <DynamicButton
        onPress={onPress}
        text="test"
        testID="DynamicBtn"
        leftIcon={icon}
        showLeftIcon
      />,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<DynamicButton>', () => {
  it('renders correctly with Picture', () => {
    const onPress = jest.fn();
    const {container} = render(
      <DynamicButton
        onPress={onPress}
        text="test"
        testID="DynamicBtn"
        sufixComponent={<Image source={imagesGlobal.CAT} />}
      />,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<DynamicButton>', () => {
  it('should trigger the on press handler', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <DynamicButton onPress={onPress} text="test" testID="DynamicBtn" />,
    );
    const component = getByTestId('DynamicBtn');
    fireEvent.press(component);
    expect(onPress).toHaveBeenCalled();
  });
});
