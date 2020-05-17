import Header from '../';

import React from 'react';
import {View, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';

storiesOf('Header', module).add('Simple Header with children', () => (
  <Header>
    <View>
      <Text>Simple Header with Children elements</Text>
    </View>
  </Header>
));
