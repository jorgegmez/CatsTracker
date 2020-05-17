import MainButton from '..';

import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';

storiesOf('MainButton', module)
  .add('Simple MainButton', () => <MainButton text="Press Me" theme="blue" />)
  .add('MainButton with custom icon', () => (
    <MainButton theme="blue" customIcon>
      <Text>Custom Text</Text>
    </MainButton>
  ));
