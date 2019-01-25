import { fetchPosts } from './actions/postActions';
import { fetchUsers } from './actions/userActions';

const routes =  [{
    path: '/',
    exact: true,
    component: 'Users',
    fetchData: (path = '') => fetchUsers(path.split('/').pop())
},{
    path: '/posts',
    component: 'Posts',
    fetchData: (path = '') => fetchPosts(path.split('/').pop())
}];

export default routes;