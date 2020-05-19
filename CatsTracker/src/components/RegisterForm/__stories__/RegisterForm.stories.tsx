import RegisterForm from '../';
import {Input} from '@components';

import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

storiesOf('RegisterForm', module)
  .add('RegisterForm required props', () => (
    <RegisterForm theme="white">
      <View>
        <Input
          onChange={() => {
            // do nothing
          }}
          type="normal"
          label="test"
        />
      </View>
    </RegisterForm>
  ))
  .add('RegisterForm theme change', () => (
    <RegisterForm theme="grey">
      <View>
        <Input
          onChange={() => {
            // do nothing
          }}
          type="normal"
          label="test"
        />
      </View>
    </RegisterForm>
  ));
