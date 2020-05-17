import * as core from './core';

import {NavigationActions} from 'react-navigation';
import {routesAuth} from '@constants';

const goToHome = () => {
  core.getTopLevelNavigator().dispatch(
    NavigationActions.navigate({
      routeName: routesAuth.AUTH,
    }),
  );
};

export {goToHome};
