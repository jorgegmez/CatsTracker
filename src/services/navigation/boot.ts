import * as core from './core';

import { NavigationActions } from 'react-navigation';
import { routesBoot } from '@constants';

const goBoot = () => {
  core.getTopLevelNavigator().dispatch(NavigationActions.navigate({ routeName: routesBoot.BOOT }));
};

export { goBoot };
