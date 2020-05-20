import { Image, Text, View, ImageSourcePropType, TextStyle } from 'react-native';

import Button from '../MainButton';
import ModalNative from 'react-native-modal';
import React, { PureComponent } from 'react';
import styles from './styles';

type Props = {
  showModal: boolean;
  icon?: ImageSourcePropType;
  title?: string;
  info: string;
  textButtonOk?: string;
  textButtonCancel?: string;
  onPressOk?(): void | Promise<void>;
  onPressCancel?(): void;
  customModalStyle?: TextStyle;
};

class Modal extends PureComponent<Props> {
  render() {
    const { showModal, icon, title, info, textButtonOk, onPressOk, textButtonCancel, onPressCancel, customModalStyle } = this.props;

    return (
      <ModalNative isVisible={showModal}>
        <View style={styles.container}>
          <View style={[styles.card, customModalStyle]}>
            <View style={styles.containerTitle}>
              {icon && <Image style={styles.icon} source={icon} />}
              <Text style={styles.textTitle}>{title}</Text>
            </View>
            <Text style={styles.textInfo}>{info}</Text>
            <View style={styles.containerButton}>
              {onPressOk && <Button text={textButtonOk} theme="blue" onPress={onPressOk} />}
              {onPressCancel && <Button text={`${textButtonCancel}`} theme="white" onPress={onPressCancel} />}
            </View>
          </View>
        </View>
      </ModalNative>
    );
  }
}

export default Modal;
