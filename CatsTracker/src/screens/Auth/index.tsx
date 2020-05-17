import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {colorsGlobal as colors, stringsAuth} from '@constants';
import {Titles, MainButton} from '@components';
import _ from 'lodash';

import styles from './styles';

type State = {
  themeOfButton: 'blue' | 'white' | 'gray';
};

class AuthHome extends React.PureComponent<{}, State> {
  static navigationOptions = {
    headerTitle: () => <Titles.H3 text="Auth Screen" />,
  };

  state: State = {
    themeOfButton: 'blue',
  };

  render() {
    const {themeOfButton} = this.state;
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
        <ScrollView
          alwaysBounceVertical={false}
          bounces={false}
          contentContainerStyle={styles.scrollView}>
          <View style={styles.content}>
            <Titles.H1 text={stringsAuth.AUTH_WELCOME_TEXT} bold />
            <View style={styles.grow} />
            <MainButton
              theme={themeOfButton}
              text="Start"
              testID={_.uniqueId()}
              customButtonStyle={styles.mainButton}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default AuthHome;
