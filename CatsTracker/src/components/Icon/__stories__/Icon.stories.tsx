import Icon from '../';

import React from 'react';
import { storiesOf } from '@storybook/react-native';

storiesOf('Icon', module)
  .add('Required props', () => <Icon config={{ name: 'IconName', type: 'IconType' }} />)
  .add('Color prop', () => <Icon config={{ name: 'IconName', type: 'IconType', color: 'IconColor' }} />)
  .add('Size prop', () => <Icon config={{ name: 'IconName', type: 'IconType', color: 'IconColor', size: 10 }} />);
