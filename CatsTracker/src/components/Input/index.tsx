import {Text, TextInput, TextInputProps, TextStyle, View} from 'react-native';
import {colorsGlobal as colors} from '@constants';

import React, {PureComponent} from 'react';
import styles from './styles';

interface Props extends TextInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  allowCapitalizeCase?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: any | React.ChangeEvent<any>) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onBlur?: (e: any) => void;
  hasError?: boolean;
  labelStyles?: TextStyle;
  type: 'numeric' | 'normal';
  testID?: string;
  maxLength?: number;
}

class Input extends PureComponent<Props> {
  render() {
    const {
      label,
      placeholder,
      value,
      allowCapitalizeCase,
      onChange,
      onBlur,
      hasError,
      labelStyles,
      type,
      maxLength,
      testID,
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={[styles.inputTextLabel, labelStyles]}>{label}</Text>
        <View
          style={[
            styles.inputWithMaskWrapper,
            {
              borderBottomColor: hasError ? colors.ACCENT : colors.GREY,
            },
          ]}>
          {type === 'numeric' && (
            <View style={styles.inputContainer}>
              <TextInput
                maxLength={maxLength}
                testID={testID}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[
                  styles.inputStyle,
                  {color: hasError ? colors.BLACK : colors.PRIMARY},
                ]}
                keyboardType="numeric"
              />
            </View>
          )}

          {type === 'normal' && (
            <View style={styles.inputContainer}>
              <TextInput
                maxLength={maxLength}
                autoCapitalize={allowCapitalizeCase ? 'words' : 'none'}
                testID={testID}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[
                  styles.inputStyle,
                  {color: hasError ? colors.BLACK : colors.PRIMARY},
                ]}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default Input;
