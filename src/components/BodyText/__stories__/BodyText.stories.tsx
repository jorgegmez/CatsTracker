import BodyText from '../';

import React from 'react';
import { StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';

const styles = StyleSheet.create({
  bodyText: {
    fontSize: 20,
    color: 'red',
  },
});

storiesOf('BodyText', module).add('Simple text', () => <BodyText text="Hello there" />);
storiesOf('BodyText', module).add('Simple text with cunstom styles', () => <BodyText text="Hello there" customStyle={styles.bodyText} />);
