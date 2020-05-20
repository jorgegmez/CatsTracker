import React, { PureComponent } from 'react';
import { View, Text, TextStyle } from 'react-native';
import styles from './styles';

type Props = {
  text: string;
  customStyleContainer?: TextStyle;
  customStyleLinkText?: TextStyle;
  onPress?: (catId?: string, cats?: CatPet[]) => void;
};

class ThinButton extends PureComponent<Props> {
  render() {
    const { text, customStyleContainer, customStyleLinkText, onPress } = this.props;
    return (
      <View style={[styles.container, customStyleContainer]}>
        <Text style={[styles.linkText, customStyleLinkText]} onPress={onPress}>
          {text}
        </Text>
      </View>
    );
  }
}

export default ThinButton;
