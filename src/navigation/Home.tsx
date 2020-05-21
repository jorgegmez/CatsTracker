import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';
import { routesHome, routesCats, colorsGlobal as colors } from '@constants';

import Home from '@screens/Home';
import LocateCat from '@screens/LocateCat';
import SideBar from '@screens/Global/SideBar';
import RegisterCat from '@screens/Global/SideBar/CatForm';

const { width } = Dimensions.get('window');

const CatsStack = createStackNavigator(
  {
    [routesHome.HOME]: Home,
    [routesCats.REGISTER_CAT]: RegisterCat,
    [routesHome.LOCATE_CAT]: LocateCat,
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
    contentComponent: () => <SideBar />,
  },
);

export default CatsTrackerStack;
