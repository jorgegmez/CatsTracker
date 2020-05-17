import CustomHeader from '..';
import React from 'react';
import { storiesOf } from '@storybook/react-native';

storiesOf('CustomHeader', module).add('Required props CustomHeader', () => (
  <CustomHeader title="¡Bienvenido!" info="¡Gracias por convertirte en nuestro socio!" />
));
storiesOf('CustomHeader', module).add('With images', () => (
  <CustomHeader
    logo={1}
    hero={8}
    title="Prepará tu licencia y cédula"
    info="Para verificar tu información de identidad, licencia y código de conductor(a). Más adelante necesitaremos los documentos de tu vehículo."
  />
));
