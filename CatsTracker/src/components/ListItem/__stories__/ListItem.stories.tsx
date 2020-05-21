import ListItem from '../';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';

storiesOf('ListItem', module)
  .add('Required props', <ListItem title="Storybook title label" />)
  .add('On press', <ListItem onPress={action('on press')} title="Storybook title label" />);
