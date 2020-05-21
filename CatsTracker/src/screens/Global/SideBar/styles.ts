import { colorsGlobal as colors } from '@constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLACK,
    flex: 1,
  },
  scroll: {
    flex: 1,
    height: '90%',
  },
  sideNavHeader: {
    paddingTop: 40,
    backgroundColor: colors.SECONDARY,
  },
  flatButtonTextStyleHome: {
    fontSize: 16,
  },
  borderBottom: {
    borderBottomWidth: 0.8,
    borderBottomColor: colors.LIGHT_GREY,
  },
  logoStyle: {
    width: 110,
    height: 60,
    alignSelf: 'stretch',
    flex: 1,
    resizeMode: 'contain',
  },
  bottomContainer: {
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: '10%',
  },
});

export default styles;
