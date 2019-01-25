import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'; //matchPath, 
//import routes from '../shared/routes';

import App from '../shared/App';

const server = express();

server.use(express.static(__dirname + '/public'));

server.get('*', (request,response) => {


    response.header('Access-Control-Allow-Origin', '*');

    // const activeRoute = routes.find((route) => matchPath(request.url, route)) || {};

    // const initialDataPromise = activeRoute.fetchInitialData
    //     ? activeRoute.fetchInitialData(request.path)
    //     : Promise.resolve();

    // initialDataPromise.then((data) => {

    //     const items = data;

        const app = renderToString(
            <StaticRouter location={request.url} context={{}}>
                <App />
            </StaticRouter>
        );

        const page = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <title>Document</title>
                <script src="/bundle.js" defer></script>
                <script>window.__INITIAL_DATA__ = ${{}}</script>
            </head>
            <body>
                <div id="app">${app}</div>
            </body>
            </html>
        `;

        response.status(200).send(page).end();


    // });



});

server.listen(3000, () => console.log('Server listening on port 3000'));
