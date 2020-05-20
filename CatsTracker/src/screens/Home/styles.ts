import { StyleSheet, Platform, TextStyle } from 'react-native';
import { colorsGlobal } from '@constants';

const customTextStyle: TextStyle = {
  shadowOffset: {
    height: 0,
    width: 0,
  },
  justifyContent: 'center',
  width: '90%',
  borderRadius: 5,
  shadowOpacity: 0.2,
  shadowColor: '#000',
  elevation: 1,
  flexDirection: 'column',
  alignSelf: 'center',
  marginTop: 20,
};

const mainButton: TextStyle = {
  width: '100%',
  alignSelf: 'center',
  paddingHorizontal: 20,
};

const stepButtonText: TextStyle = {
  fontSize: 16,
  paddingLeft: 10,
  textTransform: 'uppercase',
  color: colorsGlobal.DARK_GRAY,
};

const pendingStepButton: TextStyle = {
  backgroundColor: colorsGlobal.WHITE,
  borderRadius: 5,
  marginVertical: 5,
  shadowColor: colorsGlobal.BLACK,
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
};

const homeHaveCatsSubTitle: TextStyle = {
  marginVertical: 40,
  marginHorizontal: 20,
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
  },
  sadCat: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  firstSectionHeaderStyle: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
    marginVertical: 20,
    marginBottom: 50,
  },
  secondSectionHeaderStyle: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  marginBottom: {
    width: '70%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignSelf: 'center',
  },
  headerCat: {
    width: 40,
    height: 40,
  },
  imageButton: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  cardContainer: {
    width: '90%',
    alignSelf: 'center',
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customTextStyle,
  mainButton,
  stepButtonText,
  pendingStepButton,
  homeHaveCatsSubTitle,
});

export default styles;
