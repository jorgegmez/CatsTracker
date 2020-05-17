import { Headings } from '..';
import React from 'react';
import { storiesOf } from '@storybook/react-native';

storiesOf('Headings', module)
  // H1
  .add('h1 font normal', () => <Headings.H1 text="heading storybook label" />)
  .add('h1 font bold', () => <Headings.H1 bold text="heading storybook label" />)
  .add('h1 wide', () => <Headings.H1 wide text="heading storybook label" />)
  // H2
  .add('h2 font normal', () => <Headings.H2 text="heading storybook label" />)
  .add('h2 font bold', () => <Headings.H2 bold text="heading storybook label" />)
  .add('h2 wide', () => <Headings.H2 wide text="heading storybook label" />)
  // H3
  .add('h3 font normal', () => <Headings.H3 text="heading storybook label" />)
  .add('h3 font bold', () => <Headings.H3 bold text="heading storybook label" />)
  .add('h3 wide', () => <Headings.H3 wide text="heading storybook label" />)
  // H4
  .add('h4 font normal', () => <Headings.H4 text="heading storybook label" />)
  .add('h4 font bold', () => <Headings.H4 bold text="heading storybook label" />)
  .add('h4 wide', () => <Headings.H4 wide text="heading storybook label" />)
  // H5
  .add('h5 font normal', () => <Headings.H5 text="heading storybook label" />)
  .add('h5 font bold', () => <Headings.H5 bold text="heading storybook label" />)
  .add('h5 wide', () => <Headings.H5 wide text="heading storybook label" />)
  // H6
  .add('h6 font normal', () => <Headings.H6 text="heading storybook label" />)
  .add('h6 font bold', () => <Headings.H6 bold text="heading storybook label" />)
  .add('h6 wide', () => <Headings.H6 wide text="heading storybook label" />);
