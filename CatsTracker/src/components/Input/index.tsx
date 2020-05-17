import { Text, TextInput, TextInputProps, TextStyle, View } from 'react-native';
import { colorsGlobal as colors, stringsAuth as strings } from '@constants';

import Icon from 'react-native-vector-icons/Feather';
import React, { PureComponent } from 'react';
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
  type: 'phone' | 'password' | 'normal' | 'code';
  testID?: string;
  maxLength?: number;
}

class Input extends PureComponent<Props> {
  state = { showPassword: false };

  render() {
    const { label, placeholder, value, allowCapitalizeCase, onChange, onBlur, hasError, labelStyles, type, maxLength, testID } = this.props;
    const { showPassword } = this.state;
    return (
      <View style={styles.container}>
        <Text style={[styles.inputTextLabel, labelStyles]}>{label}</Text>
        <View
          style={[
            styles.inputWithMaskWrapper,
            {
              borderBottomColor: hasError ? colors.ACCENT : colors.GREY,
            },
          ]}
        >
          {type === 'password' && (
            <View style={styles.inputContainer}>
              <TextInput
                testID={testID}
                autoCapitalize={allowCapitalizeCase ? 'words' : 'none'}
                placeholder={placeholder}
                secureTextEntry={!showPassword}
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[styles.inputStyle, { color: hasError ? colors.BLACK : colors.PRIMARY }]}
              />
              <Icon
                name={!showPassword ? 'eye' : 'eye-off'}
                size={20}
                color={colors.PRIMARY}
                style={styles.inputWithMaskIcon}
                onPress={() => this.setState({ showPassword: !showPassword })}
                testID="eye-icon"
              />
            </View>
          )}

          {type === 'phone' && (
            <View style={styles.inputContainer}>
              <Text style={{ marginRight: 20, fontSize: 16 }}>{strings.PREFIX_COUNTRY}</Text>
              <TextInput
                maxLength={maxLength}
                testID={testID}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[styles.inputStyle, { color: hasError ? colors.BLACK : colors.PRIMARY }]}
                dataDetectorTypes="phoneNumber"
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
                style={[styles.inputStyle, { color: hasError ? colors.BLACK : colors.PRIMARY }]}
              />
            </View>
          )}

          {type === 'code' && (
            <View style={styles.inputContainer}>
              <TextInput
                testID={testID}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                maxLength={6}
                keyboardType="numeric"
                style={[styles.inputStyleCode, { color: hasError ? colors.BLACK : colors.PRIMARY }]}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default Input;
