import { StyleSheet, TextStyle } from 'react-native';
import { colorsGlobal as colors } from '@constants';

const customTextStyle: TextStyle = {
  shadowOffset: {
    height: 0,
    width: 0,
  },
  justifyContent: 'center',
  width: '85%',
  borderRadius: 5,
  shadowOpacity: 0.2,
  shadowColor: '#000',
  elevation: 1,
  flexDirection: 'column',
};

const headerNav: TextStyle = {
  color: colors.WHITE,
};

const styles = StyleSheet.create({
  headerTitle: {
    color: colors.DARK_GRAY,
    marginVertical: 30,
    marginBottom: 50,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  grow: {
    flexGrow: 1,
    width: '100%',
  },
  mainButton: {
    height: 55,
  },
  firstSectionHeaderStyle: {
    width: '75%',
    alignItems: 'center',
    paddingRight: 10,
    flexDirection: 'column',
    marginVertical: 20,
    marginBottom: 50,
  },
  secondSectionHeaderStyle: {
    width: '80%',
    alignItems: 'flex-start',
    paddingRight: 10,
    flexDirection: 'column',
  },
  customTextStyle,
  headerNav,
});

export default styles;
