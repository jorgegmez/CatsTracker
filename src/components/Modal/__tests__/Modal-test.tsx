import React from 'react';
import { render, toJSON } from '@testing-library/react-native';
import { Modal } from '@components';
import { imagesGlobal as images } from '@constants';

describe('<Modal>', () => {
  describe('Rendering', () => {
    it('Render correctly with default props', () => {
      const { container } = render(<Modal showModal title="this is a test title" info="this is a test info" />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });

    it('Render correctly with icon', () => {
      const { container } = render(<Modal showModal icon={images.ICON_WARNING} title="this is a test title" info="this is a test info" />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });

    it('Render correctly with buttons', () => {
      const noop = jest.fn();
      const { container } = render(
        <Modal
          showModal
          title="this is a test title"
          info="this is a test info"
          textButtonOk="ok test"
          onPressOk={noop}
          textButtonCancel="cancel test"
          onPressCancel={noop}
        />,
      );
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
  });
});
