import { render, toJSON, fireEvent } from '@testing-library/react-native';

import { Input } from '@components';
import React from 'react';

describe('<Input>', () => {
  const onChange = jest.fn();
  const onBlur = jest.fn();
  const type = 'normal';
  const label = 'Test Label';

  it('renders correctly', () => {
    const { container } = render(<Input label={label} type={type} onChange={onChange} onBlur={onBlur} />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<Input>', () => {
  const onChange = jest.fn();
  const onBlur = jest.fn();
  const label = 'Test Label';

  it('renders correctly if type is password', () => {
    const { container } = render(<Input label={label} type="password" onChange={onChange} onBlur={onBlur} />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<Input>', () => {
  const onChange = jest.fn();
  const onBlur = jest.fn();
  const label = 'Test Label';

  it('renders correctly if type is password and hasError', () => {
    const { container } = render(<Input label={label} type="password" onChange={onChange} onBlur={onBlur} hasError />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<Input>', () => {
  const onChange = jest.fn();
  const onBlur = jest.fn();
  const label = 'Test Label';

  it('renders correctly if type is phone', () => {
    const { container } = render(<Input label={label} type="phone" onChange={onChange} onBlur={onBlur} />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<Input>', () => {
  const onChange = jest.fn();
  const onBlur = jest.fn();
  const label = 'Test Label';

  it('renders correctly if type is phone and hasError', () => {
    const { container } = render(<Input label={label} type="phone" onChange={onChange} onBlur={onBlur} hasError />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<Input>', () => {
  const onChange = jest.fn();
  const onBlur = jest.fn();
  const label = 'Test Label';

  it('renders correctly if type is code', () => {
    const { container } = render(<Input label={label} type="code" onChange={onChange} onBlur={onBlur} />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<Input>', () => {
  const onChange = jest.fn();
  const onBlur = jest.fn();
  const label = 'Test Label';

  it('renders correctly if type is code and hasError', () => {
    const { container } = render(<Input label={label} type="code" onChange={onChange} onBlur={onBlur} hasError />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<Input>', () => {
  const onChange = jest.fn();
  const onBlur = jest.fn();
  const type = 'normal';
  const label = 'Test Label';

  it('renders correctly with hasError as true', () => {
    const { container } = render(<Input label={label} type={type} onChange={onChange} onBlur={onBlur} hasError />);
    const tree = toJSON(container);
    expect(tree).toMatchSnapshot();
  });
});

describe('<Input>', () => {
  const onChange = jest.fn();
  const onBlur = jest.fn();
  const type = 'password';
  const label = 'Test Label';

  it('Test password state visible', async () => {
    const { findByTestId } = render(<Input label={label} type={type} onChange={onChange} onBlur={onBlur} hasError />);
    const icon = await findByTestId('eye-icon');
    fireEvent.press(icon);
    expect(icon).toBeTruthy();
  });
});
