import {applyMiddleware, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducers';
import {apiMiddleware} from 'redux-api-middleware';
// import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// @jamesjara, it will be enabled before release, see note below.
// const logger = createLogger({});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation'],
};

const middlewares = [apiMiddleware, thunk];

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const persistedReducer = persistReducer(persistConfig, reducers);
  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  return {
    store,
    persistor,
  };
}
