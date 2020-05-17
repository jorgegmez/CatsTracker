import {StyleSheet, Platform} from 'react-native';
import {colorsGlobal as colors} from '@constants';

/*
 * the background color and the border
 * these are only for development time
 */

const customWidth = Platform.OS === 'ios' ? '140%' : '80%';

const styles = StyleSheet.create({
  // use this style for a header with basic configuration
  headerTitle: {
    color: colors.WHITE,
    textAlign: 'center',
    width: customWidth,
  },
  // use this style for OMNI logo
  headerOMNI: {
    height: 30,
    width: '100%',
    resizeMode: 'contain',
  },
  // use this style for left and/or right header
  headerIcons: {
    paddingHorizontal: 10,
  },
  // used for iPhone X and greater
  safeArea: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'red',
    backgroundColor: 'pink',
  },
  // use to take 100% of the height of the container
  scrollView: {
    borderWidth: 5,
    borderColor: 'green',
    backgroundColor: 'cyan',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  // use to take 100% of the height of the container
  content: {
    borderWidth: 5,
    borderColor: 'blue',
    backgroundColor: 'lightgray',
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  // use to push elements to the bottom of the container
  grow: {
    borderWidth: 5,
    borderColor: 'orange',
    backgroundColor: 'yellow',
    flexGrow: 1,
    width: '100%',
  },
  mainButton: {
    height: 55,
  },

  // put your style after this line
});

export default styles;
