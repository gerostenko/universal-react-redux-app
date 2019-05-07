import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from '../shared/routes';
import createReduxStore from '../shared/createReduxStore';

const preloadedState = window.__INITIAL_DATA__;

// Allow the passed state to be garbage-collected
delete window.__INITIAL_DATA__;

// Create Redux store with initial state
const store = createReduxStore({ preloadedState });

hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <Router /> 
            </BrowserRouter>
        </Provider>,
    document.getElementById('app')
);