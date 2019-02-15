import React from 'react';
import { Switch, Route } from 'react-router';
import App from './App';
import Users, { getUsersData } from './components/Users';
import Posts, { getPostsData } from './components/Posts';
import PageNotFound from './components/PageNotFound';

export const routes =  [{
    path: '/',
    exact: true,
    component: Users,
    componentName: 'Users',
    loadData: (store) => getUsersData(store)
},
{
    path: '/posts',
    component: Posts,
    componentName: 'Posts',
    loadData: (store) => getPostsData(store)
},
{
    component: PageNotFound
}];

export default function Router() {
    return (
        <App>
             <Switch>
                {routes.map(route => (
                    <Route key={route.path || 'PageNotFound'} {...route} />
                ))}
            </Switch>
        </App>
    );
}