import {Text, TextStyle} from 'react-native';
import React from 'react';

import styles from './styles';

type Props = {
  text: string;
  customStyle?: TextStyle[] | TextStyle;
  bold?: boolean;
  semibold?: boolean;
  wide?: boolean;
};

const H1: React.SFC<Props> = ({customStyle, text, bold, semibold, wide}) => (
  <Text
    style={[
      styles.h1,
      bold && styles.bold,
      semibold && styles.semibold,
      wide && styles.wide,
      customStyle,
    ]}>
    {text}
  </Text>
);
const H2: React.SFC<Props> = ({customStyle, text, bold, semibold, wide}) => (
  <Text
    style={[
      styles.h2,
      bold && styles.bold,
      semibold && styles.semibold,
      wide && styles.wide,
      customStyle,
    ]}>
    {text}
  </Text>
);
const H3: React.SFC<Props> = ({customStyle, text, bold, semibold, wide}) => (
  <Text
    style={[
      styles.h3,
      bold && styles.bold,
      semibold && styles.semibold,
      wide && styles.wide,
      customStyle,
    ]}>
    {text}
  </Text>
);
const H4: React.SFC<Props> = ({customStyle, text, bold, semibold, wide}) => (
  <Text
    style={[
      styles.h4,
      bold && styles.bold,
      semibold && styles.semibold,
      wide && styles.wide,
      customStyle,
    ]}>
    {text}
  </Text>
);
const H5: React.SFC<Props> = ({customStyle, text, bold, semibold, wide}) => (
  <Text
    style={[
      styles.h5,
      bold && styles.bold,
      semibold && styles.semibold,
      wide && styles.wide,
      customStyle,
    ]}>
    {text}
  </Text>
);
const H6: React.SFC<Props> = ({customStyle, text, bold, semibold, wide}) => (
  <Text
    style={[
      styles.h6,
      bold && styles.bold,
      semibold && styles.semibold,
      wide && styles.wide,
      customStyle,
    ]}>
    {text}
  </Text>
);

export default {H1, H2, H3, H4, H5, H6};
