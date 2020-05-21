import { NavigationActions, NavigationContainerComponent } from 'react-navigation';

import { DrawerActions } from 'react-navigation-drawer';
// import {routesAuth} from '@constants';

let navigator: NavigationContainerComponent;

const setTopLevelNavigator = (ref: NavigationContainerComponent | null) => {
  if (ref) {
    navigator = ref;
  }
};

const getTopLevelNavigator = () => {
  return navigator;
};

const navigate = (routeName: string) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
    }),
  );
};

const toggleSideMenu = () => {
  navigator.dispatch(DrawerActions.toggleDrawer());
};

const goBack = () => {
  navigator.dispatch(NavigationActions.back());
};

// const goToStoryBooks = () => {
//   getTopLevelNavigator().dispatch(
//     NavigationActions.navigate({routeName: routesHome.STORY_BOOKS}),
//   );
// };

export { setTopLevelNavigator, getTopLevelNavigator, navigate, toggleSideMenu, goBack };
