/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import { Provider } from 'react-redux';
import { NavigationService } from '@services';
import universalUtils from '@helpers/universal';
import AppContainer from './src/navigation/AppNavigation';
import configureStore from './src/state/store';

// import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  // componentDidMount() {
  //   if (SplashScreen) {
  //     SplashScreen.hide();
  //   }
  //   this.handleNotificationSetup();
  // }

  public render() {
    return (
      <Provider store={configureStore().store}>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.core.setTopLevelNavigator(navigatorRef);
          }}
        />
        <DropdownAlert
          ref={ref => {
            if (universalUtils) {
              universalUtils.DropDownHolder.setDropDownRef(ref);
            }
          }}
        />
      </Provider>
    );
  }
}
