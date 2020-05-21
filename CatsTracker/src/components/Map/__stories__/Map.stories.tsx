import Map from '../';
import React from 'react';
import { storiesOf } from '@storybook/react-native';

const coordinates = {
  latitude: 19.440712,
  longitude: -99.204604,
};

const cat = [
  {
    type: 'Feature',
    properties: {},
    geometry: { type: 'Point', coordinates: [-99.2105924, 19.4410746] },
  },
];

storiesOf('Taxi Map', module)
  .add('Required props', () => <Map userCoordinates={coordinates} />)
  .add('With cats', () => <Map userCoordinates={coordinates} markers={cat} />);
