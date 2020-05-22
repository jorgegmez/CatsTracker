import React, { PureComponent } from 'react';
import { TextStyle } from 'react-native';
import { colorsGlobal as colors } from '@constants';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

type Props = {
  children?: object;
  customStyle?: TextStyle[] | TextStyle;
};

class Header extends PureComponent<Props> {
  render() {
    const { children, customStyle } = this.props;
    return (
      <LinearGradient colors={[colors.BLACK, colors.LIGHT_BLUE]} style={[styles.container, customStyle]}>
        {children && children}
      </LinearGradient>
    );
  }
}

export default Header;
