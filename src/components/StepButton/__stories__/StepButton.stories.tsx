import StepButton from '../';
import Icon from '../../Icon';

import React from 'react';
import { storiesOf } from '@storybook/react-native';

const icon = { name: 'check', type: 'font-awesome' };
const arrowIcon = { name: 'arrow-right', type: 'simple-line-icon' };

storiesOf('StepButton', module)
  .add('StepButton theme change', () => <StepButton theme="cream" text="cream team" />)
  .add('StepButton left Icon', () => <StepButton leftIcon={icon} showLeftIcon />)
  .add('StepButton right Component', () => <StepButton text="right Component" sufixComponent={<Icon config={{ ...arrowIcon }} />} />);
