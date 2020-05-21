import React from 'react';
import { KeyboardAvoidingView, Platform, ViewStyle } from 'react-native';
import { Header } from 'react-navigation-stack';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const ANDROID_OFFSET_PIX = -200;
const IOS_OFFSET_PIX = 20;

interface Params {
  behavior?: 'padding' | 'height' | 'position';
  keyboardVerticalOffset?: number;
  keyboardShouldPersistTaps?: 'never' | 'always' | 'handled';
  containerStyle?: ViewStyle;
}
export default function withKeyboardView<Props, T>(Component: React.ComponentType<Props>, params: Params = {}): React.ComponentType<Props> {
  // DEFAULT PROPS
  let { behavior, keyboardShouldPersistTaps, containerStyle } = params;
  behavior = behavior || 'padding';
  keyboardShouldPersistTaps = keyboardShouldPersistTaps || 'never';
  containerStyle = containerStyle || {};
  return class extends React.PureComponent<Props> {
    render() {
      const verticalOffset = params.keyboardVerticalOffset || Header.HEIGHT + IOS_OFFSET_PIX;
      return (
        <KeyboardAvoidingView
          style={{ ...styles.container, ...containerStyle }}
          behavior={behavior}
          keyboardVerticalOffset={Platform.OS === 'ios' ? verticalOffset : ANDROID_OFFSET_PIX}
        >
          <ScrollView alwaysBounceVertical={false} bounces={false} keyboardShouldPersistTaps={keyboardShouldPersistTaps}>
            {React.createElement(Component, this.props)}
          </ScrollView>
        </KeyboardAvoidingView>
      );
    }
  };
}
