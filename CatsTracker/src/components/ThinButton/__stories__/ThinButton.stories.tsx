import ThinButton from '../';

import React from 'react';
import { StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

const styles = StyleSheet.create({
  bodyText: {
    fontSize: 20,
    color: 'red',
  },
});

storiesOf('ThinButton', module).add('Simple button', () => <ThinButton onPress={action('navigateToContact')} text="Hello there" />);
storiesOf('ThinButton', module).add('Simple button with cunstom styles', () => (
  <ThinButton text="Hello there" customStyleLinkText={styles.bodyText} />
));
