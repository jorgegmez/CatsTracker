import {routesAuth, routesBoot, routesHome} from '@constants';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Boot from '@screens/Global/Boot';
import AuthStack from './Auth';
import HomeStack from './Home';

export default createAppContainer(
  createSwitchNavigator(
    {
      [routesBoot.BOOT]: Boot,
      [routesAuth.AUTH]: AuthStack,
      [routesHome.HOME]: HomeStack,
    },
    {
      initialRouteName: routesBoot.BOOT,
    },
  ),
);
