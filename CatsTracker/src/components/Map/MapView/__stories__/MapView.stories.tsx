import { MapView } from '../';
import React from 'react';
import { storiesOf } from '@storybook/react-native';

const coordinates = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

storiesOf('Cat MapView', module).add('Simple sample', () => <MapView initialRegion={coordinates} />);
