import * as core from './core';

import { NavigationActions } from 'react-navigation';
import { routesHome, routesCats } from '@constants';

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
    case 1:
      routeName = routesCats.REGISTER_CAT;
      break;
    case 3:
      routeName = routesHome.LOCATE_CAT;
      break;
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

export { goToHome, goToCatsHome };
