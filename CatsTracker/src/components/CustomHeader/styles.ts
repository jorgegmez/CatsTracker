import { StyleSheet } from 'react-native';
import { colorsGlobal as colors } from '@constants';

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    shadowColor: colors.BLACK,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    alignItems: 'center',
  },
  innerHeader: {
    width: '100%',
    paddingVertical: '10%',
    paddingHorizontal: '7%',
  },
  logo: {
    minHeight: 53,
    minWidth: 126.5,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 32,
  },
  hero: {
    minHeight: 136,
    minWidth: 212,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

const dynamicStyles = (logo?: number) =>
  StyleSheet.create({
    title: {
      alignSelf: logo ? 'center' : 'auto',
      color: colors.WHITE,
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    info: {
      alignItems: 'flex-start',
      color: colors.WHITE,
      fontSize: 16,
      lineHeight: 25,
      marginBottom: logo ? 0 : 30,
    },
  });

export { styles, dynamicStyles };
