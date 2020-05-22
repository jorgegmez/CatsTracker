import { Image, Text, View, TextStyle } from 'react-native';
import React, { PureComponent } from 'react';
import Header from '../Header';
import { styles, dynamicStyles } from './styles';

type Props = {
  logo?: number;
  hero?: number;
  title: string;
  info: string;
  readonly titleCustomStyle?: TextStyle[] | TextStyle;
  readonly infoCustomStyle?: TextStyle[] | TextStyle;
};

class CustomHeader extends PureComponent<Props> {
  render() {
    const { logo, hero, title, info, titleCustomStyle, infoCustomStyle } = this.props;
    return (
      <Header customStyle={styles.container}>
        <View style={styles.innerHeader}>
          {logo && <Image style={styles.logo} source={logo} />}
          {hero && <Image style={styles.hero} source={hero} />}
          <Text style={[dynamicStyles(logo).title, titleCustomStyle]}>{title}</Text>
          <Text style={[dynamicStyles(logo).info, infoCustomStyle]}>{info}</Text>
        </View>
      </Header>
    );
  }
}

export default CustomHeader;
