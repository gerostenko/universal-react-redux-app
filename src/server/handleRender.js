import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath, StaticRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import Router, {routes} from '../shared/routes';
import createReduxStore from '../shared/createReduxStore';
import renderFullPage from './renderFullPage';

export default function handleRender(req, res) {

    res.header('Access-Control-Allow-Origin', '*');
    const promises = [];

    const store = createReduxStore();

    let matchedRoute;

    // use `some` to imitate `<Switch>` behavior of selecting only the first to match
    routes.some((route) => {
        matchedRoute = matchPath(req.path, route);
        if (matchedRoute && route.loadData) promises.push(route.loadData(store));
        return matchedRoute;
    });

        // once all the promises from the routes have been resolved, continue with rendering
        return Promise.all(promises).then(() => {
          
            // here is where we actually render the html, once we have the required asnyc data
            const html = renderToString( // eslint-disable-line
                <Provider store={store}>
                    <StaticRouter location={req.url} context={{}}>
                        <Router />
                    </StaticRouter>
                </Provider>
            );
    
            // get the preloaded state from the redux store
            const preloadedState = store.getState();
            // send a code based on whether the route matched or was not found
            return res
                .status(matchedRoute && matchedRoute.isExact ? 200 : 404)
                .send(renderFullPage(html, preloadedState));
        });

}
       