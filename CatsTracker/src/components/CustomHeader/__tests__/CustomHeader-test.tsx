import React from 'react';
import { render, toJSON } from '@testing-library/react-native';

import { CustomHeader } from '@components';

describe('<CustomHeader>', () => {
  describe('Rendering', () => {
    it('renders correctly', () => {
      const title = 'Prepará tu licencia y cédula';
      const info =
        'Para verificar tu información de identidad, licencia y código de conductor(a). Más adelante necesitaremos los documentos de tu vehículo.';
      const { container } = render(<CustomHeader title={title} info={info} />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('<CustomHeader>', () => {
  describe('Rendering', () => {
    it('renders when passing all the props', () => {
      const title = '¡Bienvenido!';
      const info = '¡Gracias por convertirte en nuestro socio!';
      const { container } = render(<CustomHeader logo={1} hero={8} title={title} info={info} />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
  });
});
