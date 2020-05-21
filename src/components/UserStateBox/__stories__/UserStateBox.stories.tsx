import React from 'react';
import UserStateBox from '../';
import { storiesOf } from '@storybook/react-native';
import { imagesGlobal } from '@constants';

const mockedData = {
  userName: 'Jack Reynolds',
};

storiesOf('UserStateBox', module).add('Required props', () => <UserStateBox userBoxInfo={mockedData} profilePicture={imagesGlobal.ICON_AVATAR} />);
