import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions, Image} from 'react-native';
import {
  routesHome,
  colorsGlobal as colors,
  imagesGlobal as images,
} from '@constants';

import Home from '@screens/Home';

const {width} = Dimensions.get('window');

const CatsStack = createStackNavigator(
  {
    [routesHome.HOME]: Home,
  },
  {
    initialRouteName: routesHome.HOME,
    defaultNavigationOptions: {
      headerBackTitle: '',
      headerStyle: {
        backgroundColor: colors.BLACK,
        elevation: 14,
        shadowOpacity: 13,
        borderBottomWidth: 0,
      },
      headerTintColor: colors.WHITE,
    },
  },
);

const CatsTrackerStack = createDrawerNavigator(
  {
    [routesHome.HOME]: CatsStack,
  },
  {
    initialRouteName: routesHome.HOME,
    drawerWidth: width - 50,
    drawerPosition: 'right',
    contentComponent: () => null,
  },
);

export default CatsTrackerStack;
