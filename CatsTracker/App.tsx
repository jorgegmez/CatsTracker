import React, { Component } from 'react';
// import firebase from '@react-native-firebase/app';
// import AsyncStorage from '@react-native-community/async-storage';
// import {GeolocationConfig} from './src/config';
// import {PersistGate} from 'redux-persist/lib/integration/react';
import DropdownAlert from 'react-native-dropdownalert';
import { Provider } from 'react-redux';
import { NavigationService } from '@services';
// import {notifications} from '@constants';
import universalUtils from '@helpers/universal';
import AppContainer from './src/navigation/AppNavigation';
import configureStore from './src/state/store';

// import SplashScreen from 'react-native-splash-screen';

// AmplifyConfig();
// GeolocationConfig();
// ZendeskService.configure();

export default class App extends Component {
  // componentDidMount() {
  //   if (SplashScreen) {
  //     SplashScreen.hide();
  //   }
  //   this.handleNotificationSetup();
  // }

  // onTokenRefresh = async () => {
  //   firebase.messaging().onTokenRefresh(async () => {
  //     const fcmToken = await firebase.messaging().getToken();
  //     if (fcmToken) {
  //       AsyncStorage.setItem('deviceId', fcmToken);
  //     }
  //   });
  // };

  // handleNotificationSetup = () => {
  //   this.checkPermission().then(() => {
  //     this.notificationOpenedListener();
  //     this.notificationOpenBackListener();
  //     // this.onTokenRefresh();
  //   });
  // };

  // getToken = async () => {
  //   let fcmToken = await AsyncStorage.getItem('deviceId');
  //   if (fcmToken) {
  //     return fcmToken;
  //   }

  //   fcmToken = await firebase.messaging().getToken();

  //   await AsyncStorage.setItem('deviceId', fcmToken);
  //   return fcmToken;
  // };

  // requestPermission = async () =>
  //   firebase
  //     .messaging()
  //     .requestPermission()
  //     .then(() => {
  //       return this.getToken();
  //     })
  //     .catch(error => error);

  // checkPermission = async () => {
  //   const enabled = await firebase.messaging().hasPermission();

  //   if (enabled) {
  //     return this.getToken();
  //   }

  //   return this.requestPermission();
  // };

  // notificationOpenedListener = () =>
  //   firebase.messaging().onNotificationOpenedApp(async remoteMessage => {
  //     await AsyncStorage.setItem(
  //       'backgroundNotification',
  //       JSON.stringify(remoteMessage),
  //     );
  //   });

  // notificationOpenBackListener = async () => {
  //   const remoteMessage = await firebase.messaging().getInitialNotification();

  //   if (remoteMessage) {
  //     if (remoteMessage.data) {
  //       if (remoteMessage.data.type === notifications.RIDE_REQUEST) {
  //         NavigationService.home.goToIncomingTrip({
  //           rideId: remoteMessage.data.rideId,
  //         });
  //       }
  //     }

  //     return remoteMessage;
  //   }
  //   return remoteMessage;
  // };

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
