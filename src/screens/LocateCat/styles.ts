import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerCat: {
    height: 40,
    width: 40,
  },
  headerIcons: {
    paddingHorizontal: 10,
  },
  safeArea: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default styles;
