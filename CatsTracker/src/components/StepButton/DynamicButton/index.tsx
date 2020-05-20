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
  rigthIcon?: IconConfig;
  disabled?: boolean;
  touched?: boolean;
  error?: string;
  testID?: string;
  showRigthIcon?: boolean;
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
      rigthIcon,
      sufixComponent = null,
      touched,
      error,
      text,
      testID,
      disabled,
      showRigthIcon,
    } = this.props;
    return (
      <TouchableOpacity
        style={[styles.buttonCommon, theme === 'cream' && styles.buttonCream, theme === 'white' && styles.buttonWhite, customButtonStyle]}
        onPress={onPress}
        testID={testID}
        disabled={disabled}
      >
        <View style={this.getLayoutStyles()}>
          {sufixComponent && <View style={styles.rightComponentContainer}>{sufixComponent}</View>}
          <View style={styles.leftComponents}>{text && <Text style={[styles.text, customTextStyle]}>{text}</Text>}</View>
          <View style={styles.rigthComponents}>
            {rigthIcon && showRigthIcon && <Icon config={rigthIcon} style={[styles.icon, customIconStyle as TextStyle]} />}
          </View>
        </View>
        {error && touched && <Text style={styles.errorMessage}>{error}</Text>}
      </TouchableOpacity>
    );
  }
}

export default DynamicButton;
