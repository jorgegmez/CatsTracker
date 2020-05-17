import StepButton from '../';
import Icon from '../../Icon';

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Bici from '@assets/bicis/trip/bicis.png';
import { Image } from 'react-native';

const icon = { name: 'check', type: 'font-awesome' };
const arrowIcon = { name: 'arrow-right', type: 'simple-line-icon' };

storiesOf('StepButton', module)
  .add('StepButton theme change', () => <StepButton theme="cream" text="cream team" />)
  .add('StepButton left Icon', () => <StepButton leftIcon={icon} showLeftIcon />)
  .add('StepButton right Component', () => <StepButton text="right Component" sufixComponent={<Icon config={{ ...arrowIcon }} />} />)
  .add('StepButton with image', () => (
    <StepButton
      leftIcon={icon}
      text="StepButton with image"
      sufixComponent={<Image resizeMode="contain" style={{ width: 50, height: 60 }} source={Bici} />}
    />
  ))
  .add('StepButton with check icon and image', () => (
    <StepButton
      showLeftIcon
      leftIcon={icon}
      text="StepButton with image"
      sufixComponent={<Image resizeMode="contain" style={{ width: 50, height: 60 }} source={Bici} />}
    />
  ));
