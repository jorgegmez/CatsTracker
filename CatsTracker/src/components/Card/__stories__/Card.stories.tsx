import Card from '../';

import React from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';

storiesOf('Card', module)
  .add('Card required props', () => (
    <Card theme="white">
      <View>
        <Text>Story Card sample</Text>
      </View>
    </Card>
  ))
  .add('Card theme change', () => (
    <Card theme="grey">
      <View>
        <Text>Story Card sample</Text>
      </View>
    </Card>
  ));
