import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import Icon from '../Icon';
import { icons, colorsGlobal as colors } from '@constants';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  onPress?(): void;
}

class ListItem extends PureComponent<Props> {
  render() {
    const { title, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Icon config={{ ...icons.ARROW_RIGHT, color: colors.WHITE }} />
      </TouchableOpacity>
    );
  }
}

export default ListItem;
