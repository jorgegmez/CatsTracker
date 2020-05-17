import {colorsGlobal as colors, routesAuth as routes} from '@constants';
import {createStackNavigator} from 'react-navigation-stack';

import IdentifyUser from '@screens/IdentifyUser';
import AuthHome from '@screens/Auth';

const AuthStack = createStackNavigator(
  {
    [routes.AUTH]: {
      screen: AuthHome,
    },
    [routes.AUTH_REGISTER]: {
      screen: IdentifyUser,
    },
  },
  {
    initialRouteName: routes.AUTH,
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

export default AuthStack;
