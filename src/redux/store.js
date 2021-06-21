import {applyMiddleware, createStore, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './root-reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
  blacklist: ['-'],
  timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      collapsed: true,
      predicate: () => __DEV__,
    }),
  ),
);
let persistor = persistStore(store);

export {store, persistor};
