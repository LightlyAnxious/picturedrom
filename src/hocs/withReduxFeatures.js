import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {redirectToRoute, userReducer} from 'features/user';
import {cinemaReducer} from 'features/cinema';
import {dataReducer} from 'features/data';
import {setupApiInterceptors, createApi} from 'services';
import withProvider from './withProvider';

const api = createApi();
/**
 * Create root reducer, containing
 * all features of the application
 */
const rootReducer = combineReducers({
  USER: userReducer,
  CINEMA: cinemaReducer,
  DATA: dataReducer,
});

/**
 * Initialize Redux Dev Tools,
 * if they are installed in browser.
 */
/* eslint-disable no-underscore-dangle */
/** Use Redux compose, if browser doesn't have Redux devtools */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

/** Create Redux store with root reducer and middleware included */
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(api)))
);

/**  Creates axios interceptors
 */
setupApiInterceptors(api, store.dispatch(redirectToRoute('/')));

/**
 * Create HOC, which wraps given Component with Redux Provider
 */
export default withProvider({store, Provider});
