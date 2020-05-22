import { Titles } from '../';
import React from 'react';
import { storiesOf } from '@storybook/react-native';

storiesOf('Titles', module)
  // H1
  .add('h1 font normal', () => <Titles.H1 text="heading storybook label" />)
  .add('h1 font bold', () => <Titles.H1 bold text="heading storybook label" />)
  .add('h1 wide', () => <Titles.H1 wide text="heading storybook label" />)
  // H2
  .add('h2 font normal', () => <Titles.H2 text="heading storybook label" />)
  .add('h2 font bold', () => <Titles.H2 bold text="heading storybook label" />)
  .add('h2 wide', () => <Titles.H2 wide text="heading storybook label" />)
  // H3
  .add('h3 font normal', () => <Titles.H3 text="heading storybook label" />)
  .add('h3 font bold', () => <Titles.H3 bold text="heading storybook label" />)
  .add('h3 wide', () => <Titles.H3 wide text="heading storybook label" />)
  // H4
  .add('h4 font normal', () => <Titles.H4 text="heading storybook label" />)
  .add('h4 font bold', () => <Titles.H4 bold text="heading storybook label" />)
  .add('h4 wide', () => <Titles.H4 wide text="heading storybook label" />)
  // H5
  .add('h5 font normal', () => <Titles.H5 text="heading storybook label" />)
  .add('h5 font bold', () => <Titles.H5 bold text="heading storybook label" />)
  .add('h5 wide', () => <Titles.H5 wide text="heading storybook label" />)
  // H6
  .add('h6 font normal', () => <Titles.H6 text="heading storybook label" />)
  .add('h6 font bold', () => <Titles.H6 bold text="heading storybook label" />)
  .add('h6 wide', () => <Titles.H6 wide text="heading storybook label" />);
