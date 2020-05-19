import {StyleSheet, Platform, TextStyle} from 'react-native';

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
  customTextStyle,
  mainButton,
});

export default styles;
