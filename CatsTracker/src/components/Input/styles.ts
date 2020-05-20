import { colorsGlobal as colors } from '@constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputTextLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: colors.BLACK,
  },
  inputStyle: {
    fontSize: 16,
    flex: 1,
    backgroundColor: colors.WHITE,
    color: colors.BLACK,
  },
  inputStyleCode: {
    fontSize: 18,
    flex: 1,
    backgroundColor: colors.WHITE,
    color: colors.BLACK,
    letterSpacing: 30,
    textAlign: 'center',
  },
  inputWithMaskWrapper: {
    borderBottomColor: colors.GREY,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    height: 50,
  },
  inputWithMaskIcon: {
    paddingRight: 15,
    paddingLeft: 10,
  },
});

export default styles;
