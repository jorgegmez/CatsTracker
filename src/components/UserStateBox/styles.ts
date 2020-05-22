import { StyleSheet, Dimensions } from 'react-native';
import { colorsGlobal as colors } from '@constants';

const smallDevice = Dimensions.get('window').width <= 380 && Dimensions.get('window').height <= 550;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.SECONDARY,
    justifyContent: 'space-around',
    borderRadius: 10,
    paddingVertical: 18,
    flexWrap: 'wrap',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shareElementContainer: {
    alignSelf: 'center',
    marginRight: '2%',
  },
  userAvatar: {
    width: smallDevice ? 55 : 85,
    height: smallDevice ? 55 : 85,
    alignSelf: 'baseline',
  },
  shareTextStyles: {
    fontSize: smallDevice ? 16 : 22,
    color: colors.WHITE,
  },
});

export default styles;
