import React from 'react';
import { render, toJSON } from '@testing-library/react-native';

import { Titles } from '@components';

describe('<Titles>', () => {
  describe('Rendering', () => {
    it('should match h1 to snapshot', () => {
      const { container } = render(<Titles.H1 text="h1" />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h2 to snapshot', () => {
      const { container } = render(<Titles.H2 text="h2" />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h3 to snapshot', () => {
      const { container } = render(<Titles.H3 text="h3" />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h4 to snapshot', () => {
      const { container } = render(<Titles.H4 text="h4" />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h5 to snapshot', () => {
      const { container } = render(<Titles.H5 text="h5" />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h6 to snapshot', () => {
      const { container } = render(<Titles.H6 text="h6" />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('<Titles>', () => {
  describe('Rendering bold', () => {
    it('should match h1 to snapshot', () => {
      const { container } = render(<Titles.H1 text="h1" bold />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h2 to snapshot', () => {
      const { container } = render(<Titles.H2 text="h2" bold />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h3 to snapshot', () => {
      const { container } = render(<Titles.H3 text="h3" bold />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h4 to snapshot', () => {
      const { container } = render(<Titles.H4 text="h4" bold />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h5 to snapshot', () => {
      const { container } = render(<Titles.H5 text="h5" bold />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h6 to snapshot', () => {
      const { container } = render(<Titles.H6 text="h6" bold />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('<Titles>', () => {
  describe('Rendering wide', () => {
    it('should match h1 to snapshot', () => {
      const { container } = render(<Titles.H1 text="h1" wide />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h2 to snapshot', () => {
      const { container } = render(<Titles.H2 text="h2" wide />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h3 to snapshot', () => {
      const { container } = render(<Titles.H3 text="h3" wide />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h4 to snapshot', () => {
      const { container } = render(<Titles.H4 text="h4" wide />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h5 to snapshot', () => {
      const { container } = render(<Titles.H5 text="h5" wide />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h6 to snapshot', () => {
      const { container } = render(<Titles.H6 text="h6" wide />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('<Titles>', () => {
  describe('Rendering bold, wide', () => {
    it('should match h1 to snapshot', () => {
      const { container } = render(<Titles.H1 text="h1" bold wide />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h2 to snapshot', () => {
      const { container } = render(<Titles.H2 text="h2" bold wide />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h3 to snapshot', () => {
      const { container } = render(<Titles.H3 text="h3" bold wide />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h4 to snapshot', () => {
      const { container } = render(<Titles.H4 text="h4" bold wide />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h5 to snapshot', () => {
      const { container } = render(<Titles.H5 text="h5" bold wide />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
    it('should match h6 to snapshot', () => {
      const { container } = render(<Titles.H6 text="h6" bold wide />);
      const tree = toJSON(container);
      expect(tree).toMatchSnapshot();
    });
  });
});
