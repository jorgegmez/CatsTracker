import React, {PureComponent} from 'react';

import {View, TextStyle} from 'react-native';
import styles from './styles';

type Props = {
  children: object;
  theme: 'white' | 'grey';
  readonly customTextStyle?: TextStyle[] | TextStyle;
};

class Card extends PureComponent<Props> {
  render() {
    const {children, theme, customTextStyle} = this.props;
    return (
      <View
        style={[
          theme === 'white'
            ? [styles.cardWhite, styles.shadowCard]
            : styles.cardGrey,
          customTextStyle,
        ]}>
        {children}
      </View>
    );
  }
}

export default Card;
