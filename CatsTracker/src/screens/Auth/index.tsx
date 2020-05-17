import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {
  colorsGlobal as colors,
  stringsAuth,
  imagesGlobal as images,
} from '@constants';
import {MainButton, CustomHeader, Titles} from '@components';
import {NavigationService} from '@services';
import _ from 'lodash';

import styles from './styles';

type State = {
  themeOfButton: 'blue' | 'white' | 'gray';
};

class AuthHome extends React.PureComponent<{}, State> {
  static navigationOptions = {
    headerTitle: () => <Titles.H3 text="" />,
  };

  state: State = {
    themeOfButton: 'blue',
  };

  handleStartButton() {
    NavigationService.auth.goToIdentifyUser(1);
  }

  render() {
    const {themeOfButton} = this.state;
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
        <ScrollView
          alwaysBounceVertical={false}
          bounces={false}
          contentContainerStyle={styles.scrollView}>
          <CustomHeader
            logo={images.CAT}
            title={stringsAuth.AUTH_WELCOME_TEXT}
            info={stringsAuth.AUTH_DESCRIPTION_TEXT}
          />
          <View style={styles.content}>
            <View style={styles.grow} />
            <MainButton
              theme={themeOfButton}
              text={stringsAuth.AUTH_BUTTON_TEXT}
              testID={_.uniqueId()}
              customButtonStyle={styles.mainButton}
              onPress={this.handleStartButton}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default AuthHome;
