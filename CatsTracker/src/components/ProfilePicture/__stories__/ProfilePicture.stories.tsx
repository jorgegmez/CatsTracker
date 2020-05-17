import ProfilePicture from '../';
import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { imagesGlobal } from '@constants';

storiesOf('ProfilePicture', module).add('Required props: Imgage and Edit Icon', () => (
  <ProfilePicture image={imagesGlobal.ICON_AVATAR} showEditIcon />
));

storiesOf('ProfilePicture', module).add('Required props: Just the image, no edit icon', () => (
  <ProfilePicture image={imagesGlobal.PROFILE_PLACEHOLDER} showEditIcon={false} />
));

storiesOf('ProfilePicture', module).add('Smaller', () => <ProfilePicture showEditIcon size={60} />);

storiesOf('ProfilePicture', module).add('Bigger', () => <ProfilePicture showEditIcon size={249} />);
