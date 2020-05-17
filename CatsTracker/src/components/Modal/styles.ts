import {StyleSheet, Dimensions} from 'react-native';
import {colorsGlobal as colors} from '../../constants';

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
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height / 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    minWidth: 20,
    width: 20,
    minHeight: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
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
  },
});

export default styles;
