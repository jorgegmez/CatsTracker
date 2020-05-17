import * as icons from './icons';
import * as googlePlaces from './google-places';
import * as queue from './queue';

import {
  auth as actionsAuth,
  cat as actionsCat,
  user as actionsUser,
} from './actions-types';

import {
  user as reducersNameUser,
  cat as reducersNameCat,
} from './reducers-names';

import {
  auth as routesAuth,
  cat as routesCats,
  boot as routesBoot,
} from './routes';

import {
  auth as stringsAuth,
  cat as stringsCat,
  user as stringsUser,
} from './strings';

import {global as colorsGlobal} from './colors';

import {universal as imagesGlobal} from './images';

export {
  actionsAuth,
  actionsCat,
  actionsUser,
  reducersNameUser,
  reducersNameCat,
  routesAuth,
  routesCats,
  routesBoot,
  stringsAuth,
  stringsCat,
  stringsUser,
  colorsGlobal,
  imagesGlobal,
  icons,
  googlePlaces,
  queue,
};
