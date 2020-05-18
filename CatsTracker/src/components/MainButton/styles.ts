import {colorsGlobal as colors} from '@constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBlue: {
    backgroundColor: colors.PRIMARY,
  },
  buttonCommon: {
    alignItems: 'center',
    borderRadius: 25,
    height: 45,
    justifyContent: 'center',
    marginVertical: 10,
    width: '85%',
  },
  buttonGray: {
    backgroundColor: colors.GRAY,
  },
  buttonWhite: {
    backgroundColor: colors.WHITE,
    borderColor: colors.PRIMARY,
    borderRadius: 25,
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonFlat: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textFlatButton: {
    color: colors.WHITE,
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
  buttonOutline: {
    backgroundColor: colors.WHITE,
    borderColor: colors.PRIMARY,
  },
});

export default styles;
