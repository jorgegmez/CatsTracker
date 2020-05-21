import React, { PureComponent } from 'react';
import { View, Text, TextStyle, ImageBackground, ImageSourcePropType, Dimensions } from 'react-native';
import { imagesGlobal } from '@constants';
import styles from './styles';

type Props = {
  userBoxInfo: { userName: string };
  profilePicture?: number | ImageSourcePropType;
  customContainerStyle?: TextStyle[] | TextStyle;
};

class UserStateBox extends PureComponent<Props> {
  smallDevice = Dimensions.get('window').width <= 380 && Dimensions.get('window').height <= 550;

  render() {
    const { userBoxInfo, profilePicture, customContainerStyle } = this.props;
    return (
      <View style={[styles.container, customContainerStyle]}>
        <View style={styles.profileContainer}>
          <View style={styles.shareElementContainer}>
            <ImageBackground style={{ ...styles.userAvatar }} source={profilePicture || imagesGlobal.ICON_AVATAR} />
          </View>
          <View style={styles.shareElementContainer}>
            <Text style={styles.shareTextStyles}>{userBoxInfo.userName}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default UserStateBox;
