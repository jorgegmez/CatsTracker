import { StyleSheet, Dimensions } from 'react-native';
import { colorsGlobal as colors } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: colors.WHITE,
    borderRadius: Dimensions.get('window').width / 30,
    alignItems: 'center',
  },
  containerTitle: {
    width: Dimensions.get('window').width / 1.6,
    flexDirection: 'column',
    marginTop: Dimensions.get('window').height / 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    minWidth: 20,
    width: 40,
    minHeight: 20,
    height: 40,
    marginRight: 10,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  textInfo: {
    width: Dimensions.get('window').width / 1.6,
    fontSize: 15,
    color: colors.BLACK,
    marginBottom: 10,
    textAlign: 'center',
  },
  containerButton: {
    width: Dimensions.get('window').width / 1.6,
    marginBottom: Dimensions.get('window').height / 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkButtonDelete: {
    color: colors.DANGER,
    textDecorationLine: 'none',
    flexDirection: 'row',
    fontSize: 14,
    width: '50%',
  },
  linkButtonCancel: {
    color: colors.PRIMARY,
    textDecorationLine: 'none',
    flexDirection: 'row',
    fontSize: 14,
  },
});

export default styles;
