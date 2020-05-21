import { colorsGlobal as colors } from '@constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.LIGHT_GREY,
    borderBottomWidth: 0.8,
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 12,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.WHITE,
  },
});

export default styles;
