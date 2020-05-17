import React, {PureComponent} from 'react';
import {Text, TextStyle} from 'react-native';

type Props = {
  text: string;
  customStyle?: TextStyle[] | TextStyle;
};

class BodyText extends PureComponent<Props> {
  render() {
    const {text, customStyle} = this.props;
    return <Text style={customStyle}>{text}</Text>;
  }
}

export default BodyText;
