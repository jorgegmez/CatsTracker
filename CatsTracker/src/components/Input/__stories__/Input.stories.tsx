import Input from '../';

import React from 'react';
import {storiesOf} from '@storybook/react-native';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};
storiesOf('Input', module)
  .add('Input required props', () => (
    <Input label="Label Sample" type="password" onChange={noop} onBlur={noop} />
  ))
  .add('Input optional props', () => (
    <Input
      label="Label Sample"
      type="password"
      value="Sample Value"
      placeholder="Sample Placeholder"
      onChange={noop}
      onBlur={noop}
    />
  ))
  .add('Input type normal', () => (
    <Input
      label="Label Sample"
      type="phone"
      value="Sample Value"
      placeholder="Sample Placeholder"
      onChange={noop}
      onBlur={noop}
    />
  ))
  .add('Input type code', () => (
    <Input
      label="Label Sample"
      type="code"
      value="Sample Value"
      placeholder="Sample Placeholder"
      onChange={noop}
      onBlur={noop}
    />
  ))
  .add('Input has error', () => (
    <Input
      label="Label Sample"
      type="phone"
      value="Sample Value"
      placeholder="Sample Placeholder"
      hasError
      onChange={noop}
      onBlur={noop}
    />
  ));
