import React, { PureComponent } from 'react';
import { View, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { imagesGlobal, colorsGlobal as colors, icons } from '@constants';
import { styles, dynamicStyles } from './styles';
import Icon from '../Icon';

type Props = {
  image?: ImageSourcePropType;
  showEditIcon?: boolean;
  size?: number;
  onImageSelected?: () => void;
  testID?: string;
};

class ProfilePicture extends PureComponent<Props, {}> {
  onOpenImageSelection = () => {
    // This method will handle the functionality of starting uploading process (camera or gallery)
    const { onImageSelected } = this.props;

    // For now its just calling onImageSelected to demonstrate functionality on screen without uploading a picture
    if (onImageSelected) onImageSelected();
  };

  onImageSelected = () => {
    // This method handle when the user finishes uploading the picture
    const { onImageSelected } = this.props;

    // Useful to make actions on the screen that contains this component after image selection
    if (onImageSelected) onImageSelected();
  };

  render() {
    const { showEditIcon, size = 120, image = imagesGlobal.ICON_AVATAR, testID } = this.props;

    return (
      <View style={[styles.mainContainer, dynamicStyles(size).mainContainerSize]}>
        <Image style={[styles.calculeCircleSize, dynamicStyles(size).imageSize]} source={image} />
        {showEditIcon && (
          <View style={[styles.container, dynamicStyles(size).containerPosition]}>
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.editProfilePictureContainer, dynamicStyles(size).editProfilePictureContainerSize]}
              onPress={this.onOpenImageSelection}
              testID={testID}
            >
              <Icon config={{ ...icons.EDIT_PROFILE, color: colors.WHITE, size: size / 8 }} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default ProfilePicture;
