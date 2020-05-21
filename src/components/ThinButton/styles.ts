import { StyleSheet } from 'react-native';
import { colorsGlobal } from '@constants';

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  linkText: {
    color: colorsGlobal.PRIMARY,
    textDecorationLine: 'underline',
    fontSize: 12,
  },
});

export default styles;
