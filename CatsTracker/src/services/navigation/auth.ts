import * as core from './core';

import {NavigationActions} from 'react-navigation';
import {routesAuth} from '@constants';

const goToIdentifyUser = (stepNumber = 1, params?: UserStateModel) => {
  let routeName = '';
  switch (stepNumber) {
    case 0:
      routeName = routesAuth.AUTH;
      break;
    case 1:
      routeName = routesAuth.AUTH_REGISTER;
      break;
    default:
      routeName = routesAuth.AUTH;
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

export {goToIdentifyUser};
