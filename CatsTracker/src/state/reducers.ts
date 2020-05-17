import global from './global';

import {combineReducers} from 'redux';

export default combineReducers({
  ...global,
});
