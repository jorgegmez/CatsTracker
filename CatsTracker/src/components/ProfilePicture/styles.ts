import {StyleSheet} from 'react-native';
import {colorsGlobal as colors} from '@constants';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  calculeCircleSize: {
    borderRadius: 220 / 2,
    resizeMode: 'cover',
    position: 'relative',
    minHeight: 70,
    minWidth: 70,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    position: 'absolute',
    backgroundColor: 'black',
  },
  editProfilePictureContainer: {
    borderRadius: 60 / 2,
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});

const dynamicStyles = (size: number) =>
  StyleSheet.create({
    imageSize: {
      width: size,
      height: size,
    },
    mainContainerSize: {
      width: size,
      height: size,
    },
    containerPosition: {
      bottom: size / 10,
      left: size / 10,
    },
    editProfilePictureContainerSize: {
      width: size / 4,
      height: size / 4,
    },
  });

export {styles, dynamicStyles};
