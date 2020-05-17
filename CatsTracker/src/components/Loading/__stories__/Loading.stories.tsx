import Loading from '../';

import React from 'react';
import { storiesOf } from '@storybook/react-native';

storiesOf('Loading', module).add('Required props', () => <Loading showModal />);
