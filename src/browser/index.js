import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App.js';
import { Provider } from 'react-redux';
import store from '../shared/stores/configureStore';

hydrate(
    <BrowserRouter>
        <Provider store={store}>
            <App data={window.__INITIAL_DATA__}/> 
         </Provider>
    </BrowserRouter>,
    document.getElementById('app')
);