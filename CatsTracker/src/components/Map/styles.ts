import { StyleSheet } from 'react-native';
import { colorsGlobal } from '@constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    position: 'absolute',
    ...StyleSheet.absoluteFillObject,
  },
  point: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: colorsGlobal.PRIMARY,
  },
});

export default styles;
