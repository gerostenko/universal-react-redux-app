import Home from './Home';
import Grid from './Grid';
import { fetchByCategoryName } from './bistro';

const routes =  [{
    path: '/',
    exact: true,
    component: Home,
},{
    path: '/:categoryName',
    component: Grid,
    fetchInitialData: (path = '') => fetchByCategoryName(path.split('/').pop())
}];

export default routes;