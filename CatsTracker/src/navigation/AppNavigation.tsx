import {routesAuth, routesBoot} from '@constants';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Boot from '@screens/Global/Boot';
import AuthStack from './Auth';

export default createAppContainer(
  createSwitchNavigator(
    {
      [routesBoot.BOOT]: Boot,
      [routesAuth.AUTH]: AuthStack,
    },
    {
      initialRouteName: routesBoot.BOOT,
    },
  ),
);
