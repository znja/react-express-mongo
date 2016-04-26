import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from 'config/routes';
// Redux Middleware
import ReduxPromise from 'redux-promise';

// Redux Reducers
import reducers from './reducers';

// Create redux store w/ Promise Middleware
const store = createStore(reducers, applyMiddleware(ReduxPromise));

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('#Application')
);
