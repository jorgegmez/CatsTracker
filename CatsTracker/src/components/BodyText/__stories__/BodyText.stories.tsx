import BodyText from '../';

import React from 'react';
import { storiesOf } from '@storybook/react-native';

storiesOf('BodyText', module).add('Simple text', () => <BodyText text="Hello there" />);
storiesOf('BodyText', module).add('Simple text with cunstom styles', () => (
  <BodyText text="Hello there" customStyle={{ fontSize: 20, color: 'red' }} />
));
