import { colorsGlobal as colors } from '@constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    height: 70,
    alignItems: 'center',
  },
  buttonStartContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    height: 70,
    alignItems: 'center',
  },
  buttonCommon: {
    borderColor: colors.OFF_WHITE,
    borderWidth: 1,
    height: 70,
    paddingHorizontal: 20,
    width: '100%',
  },
  buttonCream: {
    backgroundColor: colors.OFF_WHITE,
  },
  buttonWhite: {
    backgroundColor: colors.WHITE,
  },
  leftComponents: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rigthComponents: {
    width: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    flexWrap: 'wrap',
    fontSize: 16,
    fontWeight: '400',
    color: colors.BLACK,
  },
  rightComponentContainer: {
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  errorMessage: {
    fontSize: 12,
    color: colors.RED,
    lineHeight: 22,
  },
});

export default styles;
