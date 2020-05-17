import React from 'react';
import { render, toJSON } from '@testing-library/react-native';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import renderer from 'react-test-renderer';
import { ProfilePicture } from '@components';
import { imagesGlobal } from '@constants';

describe('<ProfilePicture>', () => {
  it('renders correctly', () => {
    const { container } = render(<ProfilePicture />);
    const tree = toJSON(container);

    expect(tree).toMatchSnapshot();
  });
});

describe('<ProfilePicture>', () => {
  describe('Rendering', () => {
    it('renders when passing all the props', () => {
      const defaultImage = imagesGlobal.ICON_AVATAR;
      const { container } = render(<ProfilePicture image={defaultImage} showEditIcon />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('<ProfilePicture>', () => {
  it('renders correctly just the image', () => {
    const defaultImage = imagesGlobal.ICON_AVATAR;
    const { container } = render(<ProfilePicture image={defaultImage} showEditIcon={false} />);
    const tree = toJSON(container);

    expect(tree).toMatchSnapshot();
  });
});

describe('<ProfilePicture>', () => {
  it('renders correctly default image and no edit icon', () => {
    const { container } = render(<ProfilePicture image={undefined} showEditIcon={false} />);
    const tree = toJSON(container);

    expect(tree).toMatchSnapshot();
  });
});

describe('<ProfilePicture>', () => {
  it('renders correctly with children', () => {
    const defaultImage = imagesGlobal.ICON_AVATAR;
    const { container } = render(
      <ProfilePicture>
        <Image source={defaultImage} />
        <View>
          <TouchableOpacity>
            <Text>Hello world.</Text>
          </TouchableOpacity>
        </View>
      </ProfilePicture>,
    );
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<ProfilePicture>', () => {
  it('Call onOpenImageSelection function correclty', () => {
    const component = renderer.create(<ProfilePicture />);
    const componentRoot = component.root;
    const onOpenImageSelection = jest.spyOn(componentRoot.instance, 'onOpenImageSelection');

    componentRoot.instance.onOpenImageSelection();

    expect(onOpenImageSelection).toHaveBeenCalled();
  });
});

describe('<ProfilePicture>', () => {
  it('Call onImageSelected prop function on onOpenImageSelection function correctly', () => {
    const noop = jest.fn();
    const component = renderer.create(<ProfilePicture onImageSelected={noop} showEditIcon />);
    const componentRoot = component.root;

    componentRoot.instance.onOpenImageSelection();

    expect(noop).toHaveBeenCalled();
  });
});

describe('<ProfilePicture>', () => {
  it('Call onImageSelected function correctly', () => {
    const component = renderer.create(<ProfilePicture />);
    const componentRoot = component.root;
    const onImageSelected = jest.spyOn(componentRoot.instance, 'onImageSelected');

    componentRoot.instance.onImageSelected();

    expect(onImageSelected).toHaveBeenCalled();
  });
});

describe('<ProfilePicture>', () => {
  it('Call onImageSelected prop function correctly', () => {
    const noop = jest.fn();
    const component = renderer.create(<ProfilePicture onImageSelected={noop} showEditIcon />);
    const componentRoot = component.root;

    componentRoot.instance.onImageSelected();

    expect(noop).toHaveBeenCalled();
  });
});
