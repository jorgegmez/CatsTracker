import Modal from '../';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import {imagesGlobal as images} from '@constants';

storiesOf('Modal', module)
  .add('Required props', () => (
    <Modal
      showModal
      title="Storybook label title"
      info="Storybook label text"
      textButtonOk="Storybook label ok"
    />
  ))
  .add('With icon', () => (
    <Modal
      showModal
      icon={images.ICON_WARNING}
      title="Storybook label title"
      info="Storybook label text"
      textButtonOk="Storybook label ok"
    />
  ))
  .add('On press ok', () => (
    <Modal
      showModal
      icon={images.ICON_WARNING}
      title="Storybook label title"
      info="Storybook label info"
      textButtonOk="Storybook label ok"
      onPressOk={action('Ok')}
    />
  ))
  .add('With cancel button', () => (
    <Modal
      showModal
      icon={images.ICON_WARNING}
      title="Storybook label title"
      info="Storybook label text"
      textButtonOk="Storybook label ok"
      onPressOk={action('Ok')}
      textButtonCancel="Storybook label cancel"
      onPressCancel={action('cancel')}
    />
  ));
