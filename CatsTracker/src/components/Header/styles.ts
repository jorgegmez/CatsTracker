import { colorsGlobal as colors } from '@constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    width: '100%',
    height: '25%',
    backgroundColor: colors.PRIMARY,
    borderBottomRightRadius: 70,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.75,
    shadowRadius: 5,
  },
});

export default styles;
