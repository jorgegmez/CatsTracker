import React, {PureComponent} from 'react';
import {TextStyle} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MtCmIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MtIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

type IconConfig = {
  name: string;
  size?: number;
  color?: string;
  type: string;
};

type Props = {
  config: IconConfig;
  style?: TextStyle[] | TextStyle;
};

class Icon extends PureComponent<Props> {
  render() {
    const {config, style} = this.props;
    switch (config.type) {
      case 'font-awesome':
        return (
          <FAIcon
            name={config.name}
            color={config.color}
            size={config.size || 20}
            style={style}
          />
        );
      case 'material-community':
        return (
          <MtCmIcon
            name={config.name}
            color={config.color}
            size={config.size || 20}
            style={style}
          />
        );
      case 'material':
        return (
          <MtIcon
            name={config.name}
            color={config.color}
            size={config.size || 20}
            style={style}
          />
        );
      case 'simple-line-icon':
        return (
          <SimpleLineIcon
            name={config.name}
            color={config.color}
            size={config.size || 20}
            style={style}
          />
        );
      case 'entypo':
        return (
          <Entypo
            name={config.name}
            color={config.color}
            size={config.size || 20}
            style={style}
          />
        );
      case 'ion':
        return (
          <Ionicons
            name={config.name}
            color={config.color}
            size={config.size || 20}
            style={style}
          />
        );
      default:
        return null;
    }
  }
}

export default Icon;
