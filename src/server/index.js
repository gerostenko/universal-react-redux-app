import 'babel-polyfill';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath, StaticRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import Router, {routes} from '../shared/routes';
import createReduxStore from '../shared/createReduxStore';

const server = express();

server.use(express.static(__dirname + '/public'));
server.use('*', (request, response) => {
    response.header('Access-Control-Allow-Origin', '*');
    const promises = [];

    const store = createReduxStore();

    let matchedRoute;

    // use `some` to imitate `<Switch>` behavior of selecting only the first to match
    routes.some((route) => {
        matchedRoute = matchPath(request.path, route);
        if (matchedRoute && route.loadData) promises.push(route.loadData(store));
        return matchedRoute;
    });

        // once all the promises from the routes have been resolved, continue with rendering
        return Promise.all(promises).then(() => {
          
            // here is where we actually render the html, once we have the required asnyc data
            const mainApp = renderToString( // eslint-disable-line
                <Provider store={store}>
                    <StaticRouter location={request.url} context={{}}>
                        <Router />
                    </StaticRouter>
                </Provider>
            );
    
            // get the preloaded state from the redux store
            const preloadedState = store.getState();

             const html = `<!DOCTYPE html>
             <html lang="en">
             <head>
                 <meta charset="UTF-8" />
                 <title>Document</title>
                 <script src="/bundle.js" defer></script>
                 <script>window.__INITIAL_DATA__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>    
             </head>
             <body>
                 <div id="app">${mainApp}</div>
             </body>
             </html>
             `; 

            // send a code based on whether the route matched or was not found
            return response
                .status(matchedRoute && matchedRoute.isExact ? 200 : 404)
                .send(html);
        });
});

server.listen(3000, () => console.log('Server listening on port 3000'));
