import React, { PureComponent, ReactNode } from 'react';
import { TouchableOpacity, View, Text, TextStyle } from 'react-native';
import Icon from '../../Icon';
import styles from './styles';

type Props = {
  text?: string;
  sufixComponent?: ReactNode;
  readonly customTextStyle?: TextStyle[] | TextStyle;
  readonly customButtonStyle?: TextStyle[] | TextStyle;
  readonly customIconStyle?: TextStyle[] | TextStyle;
  onPress?(): void;
  theme?: 'cream' | 'white';
  leftIcon?: IconConfig;
  disabled?: boolean;
  touched?: boolean;
  error?: string;
  testID?: string;
  showLeftIcon?: boolean;
  showSUfixOnTheLeft?: boolean;
};

class DynamicButton extends PureComponent<Props> {
  getLayoutStyles = () => {
    const { sufixComponent } = this.props;
    if (sufixComponent) {
      return styles.buttonContainer;
    }
    return styles.buttonStartContainer;
  };

  render() {
    const {
      theme,
      customButtonStyle,
      customTextStyle,
      customIconStyle,
      onPress,
      leftIcon,
      sufixComponent = null,
      touched,
      error,
      text,
      testID,
      disabled,
      showLeftIcon,
      showSUfixOnTheLeft = false,
    } = this.props;
    return (
      <TouchableOpacity
        style={[styles.buttonCommon, theme === 'cream' && styles.buttonCream, theme === 'white' && styles.buttonWhite, customButtonStyle]}
        onPress={onPress}
        testID={testID}
        disabled={disabled}
      >
        <View style={this.getLayoutStyles()}>
          {sufixComponent && showSUfixOnTheLeft && <View style={styles.rightComponentContainer}>{sufixComponent}</View>}
          <View style={styles.leftComponents}>
            {leftIcon && showLeftIcon && <Icon config={leftIcon} style={[styles.icon, customIconStyle as TextStyle]} />}
            {text && <Text style={[styles.text, customTextStyle]}>{text}</Text>}
          </View>
          {sufixComponent && !showSUfixOnTheLeft && <View style={styles.rightComponentContainer}>{sufixComponent}</View>}
        </View>
        {error && touched && <Text style={styles.errorMessage}>{error}</Text>}
      </TouchableOpacity>
    );
  }
}

export default DynamicButton;
