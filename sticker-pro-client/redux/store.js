import { legacy_createStore as createStore, applyMiddleware, compose, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { REDUX_STORE_USER } from '../utils/async-keys';
import  productsReducer  from './products/products.reducer';

// Persist configs of each reducer white-listing the keys within each reducer to be persisted
const userPersistConfig = {
    key: REDUX_STORE_USER,
    storage,
    // whitelist: [
    //   'user',
    // ],
};

export const rootReducer = combineReducers({
    products: persistReducer(userPersistConfig, productsReducer),
    // products: productsReducer,
});

export const initializeStore = () => {
    const middleware = [];
    const enhancers = [];
  
    // ReduxThunk Middleware
    middleware.push(ReduxThunk);
  
    // Redux Logger Middleware
    // Note: logger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions.
  
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { createLogger } = require('redux-logger');
      const logger = createLogger({ collapsed: true, duration: true, diff: true });
      middleware.push(logger);
    }
  
    // Assemble Middleware
    const middlewareEnhancer = applyMiddleware(...middleware);
    enhancers.push(middlewareEnhancer);
  
    const store = createStore(rootReducer, {}, compose(...enhancers));
    const persistor = persistStore(store);
  
    return { store, persistor };
};