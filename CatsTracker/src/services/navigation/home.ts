import * as core from './core';

import {NavigationActions} from 'react-navigation';
import {routesHome} from '@constants';

const goToHome = () => {
  core.getTopLevelNavigator().dispatch(
    NavigationActions.navigate({
      routeName: routesHome.HOME,
    }),
  );
};

const goToCatsHome = (stepNumber = 1, params?: UserStateModel) => {
  let routeName = '';
  switch (stepNumber) {
    case 0:
      routeName = routesHome.HOME;
      break;
    // case 1:
    //   routeName = routesAuth.AUTH_REGISTER;
    //   break;
    default:
      routeName = routesHome.HOME;
  }
  core.getTopLevelNavigator().dispatch(
    NavigationActions.navigate({
      routeName,
      params: {
        ...params,
        stepNumber,
      },
    }),
  );
};

export {goToHome, goToCatsHome};
