import React from 'react';
import { render, toJSON } from '@testing-library/react-native';
import { imagesGlobal } from '@constants';
import { UserStateBox } from '@components';

const mockedData = {
  userName: 'Jack Reynolds',
};

describe('<UserStateBox>', () => {
  it('renders correctly', () => {
    const { container } = render(<UserStateBox userBoxInfo={mockedData} profilePicture={imagesGlobal.ICON_AVATAR} />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});
