import { Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import Icon from '../Icon';
import React, { PureComponent, ReactNode } from 'react';
import { colorsGlobal as colors } from '@constants';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  text?: string;
  theme?: 'blue' | 'white' | 'gray';
  outline?: boolean;
  flat?: boolean;
  icon?: { name: string; size?: number; color?: string; type: string };
  children?: ReactNode;
  customIcon?: boolean;
  readonly customTextStyle?: TextStyle[] | TextStyle;
  readonly customButtonStyle?: TextStyle[] | TextStyle;
  readonly customIconStyle?: TextStyle[] | TextStyle;
  onPress?(): void | Promise<void>;
  testID?: string;
  disabled?: boolean;
}

class MainButton extends PureComponent<Props> {
  render() {
    const {
      text = null,
      theme,
      outline,
      onPress,
      icon = null,
      customTextStyle,
      customButtonStyle,
      flat,
      customIcon = false,
      children,
      testID,
      disabled = false,
    } = this.props;

    return flat ? (
      <TouchableOpacity disabled={disabled} testID={testID} style={[styles.buttonFlat, customButtonStyle]} onPress={onPress}>
        {customIcon && children}
        {icon && <Icon config={{ ...icon, color: colors.WHITE }} style={text ? styles.icon : {}} />}
        {text && <Text style={[styles.textFlatButton, customTextStyle]}>{text}</Text>}
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        testID={testID}
        disabled={disabled}
        style={[
          styles.buttonCommon,
          outline && styles.buttonWhite,
          theme === 'gray' && styles.buttonGray,
          theme === 'blue' && styles.buttonBlue,
          theme === 'white' && styles.buttonWhite,
          disabled && styles.buttonGray,
          customButtonStyle,
        ]}
        onPress={onPress}
      >
        <View style={styles.buttonContainer}>
          {customIcon && children}
          {icon && <Icon config={icon} style={styles.icon} />}
          {text && <Text style={[styles.text, { color: theme === 'white' || outline === true ? colors.PRIMARY : colors.WHITE }]}>{text}</Text>}
        </View>
      </TouchableOpacity>
    );
  }
}

export default MainButton;
