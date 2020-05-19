import {StyleSheet, Dimensions} from 'react-native';
import {colorsGlobal as colors} from '../../constants';

const smallDevice =
  Dimensions.get('window').width <= 380 &&
  Dimensions.get('window').height <= 550;

const styles = StyleSheet.create({
  cardWhite: {
    width: '80%',
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    padding: smallDevice ? 8 : 20,
    marginBottom: 25,
    alignItems: 'center',
  },
  shadowCard: {
    shadowColor: colors.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardGrey: {
    width: '80%',
    backgroundColor: colors.LIGHT_GRAY,
    padding: 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginBottom: 20,
  },
});

export default styles;
