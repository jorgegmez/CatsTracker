/* eslint-disable jest/no-identical-title */
import React from 'react';
import {render, toJSON} from '@testing-library/react-native';

import {MainButton} from '@components';

describe('<MainButton>', () => {
  it('renders correctly', () => {
    const onPress = jest.fn();
    const {container} = render(<MainButton onPress={onPress} />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<MainButton>', () => {
  it('renders correctly with flat option to true', () => {
    const onPress = jest.fn();
    const {container} = render(<MainButton onPress={onPress} flat />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<MainButton>', () => {
  it('renders correctly passing in a customIcon', () => {
    const onPress = jest.fn();
    const {container} = render(<MainButton onPress={onPress} customIcon />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<MainButton>', () => {
  it('renders correctly to flat button passing in a customIcon', () => {
    const onPress = jest.fn();
    const {container} = render(
      <MainButton onPress={onPress} flat customIcon />,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<MainButton>', () => {
  it('renders correctly using an icon on a flat', () => {
    const onPress = jest.fn();
    const icon = {name: 'Test Name', type: 'Test type'};
    const {container} = render(
      <MainButton onPress={onPress} flat icon={icon} />,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<MainButton>', () => {
  it('renders correctly using an icon', () => {
    const onPress = jest.fn();
    const icon = {name: 'Test Name', type: 'Test type'};
    const {container} = render(<MainButton onPress={onPress} icon={icon} />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<MainButton>', () => {
  it('renders correctly using text prop on a flat', () => {
    const onPress = jest.fn();
    const text = 'Test text';
    const {container} = render(
      <MainButton onPress={onPress} flat text={text} />,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<MainButton>', () => {
  it('renders correctly using an icon', () => {
    const onPress = jest.fn();
    const text = 'Test text';
    const {container} = render(<MainButton onPress={onPress} text={text} />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<MainButton>', () => {
  it('renders correctly using theme gray', () => {
    const onPress = jest.fn();
    const text = 'Test text';
    const theme = 'gray';
    const {container} = render(
      <MainButton onPress={onPress} theme={theme} text={text} />,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<MainButton>', () => {
  it('renders correctly using theme blue', () => {
    const onPress = jest.fn();
    const text = 'Test text';
    const theme = 'blue';
    const {container} = render(
      <MainButton onPress={onPress} theme={theme} text={text} />,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<MainButton>', () => {
  it('renders correctly using theme white', () => {
    const onPress = jest.fn();
    const text = 'Test text';
    const theme = 'white';
    const {container} = render(
      <MainButton onPress={onPress} theme={theme} text={text} />,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<MainButton>', () => {
  it('renders correctly using disabled prop as true', () => {
    const onPress = jest.fn();
    const disabled = true;
    const {container} = render(
      <MainButton onPress={onPress} flat disabled={disabled} />,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<MainButton>', () => {
  it('renders correctly using disabled prop as false', () => {
    const onPress = jest.fn();
    const disabled = false;
    const {container} = render(
      <MainButton onPress={onPress} flat disabled={disabled} />,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});
