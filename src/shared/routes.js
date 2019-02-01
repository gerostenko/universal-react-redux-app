import { fetchPosts } from './actions/postActions';
import { fetchUsers } from './actions/userActions';
import Users from './components/Users';
import Posts from './components/Posts';

const routes =  [{
    path: '/',
    exact: true,
    component: Users,
    componentName: 'Users',
    fetchData: (path = '') => fetchUsers(path.split('/').pop())
},{
    path: '/posts',
    component: Posts,
    componentName: 'Posts',
    fetchData: (path = '') => fetchPosts(path.split('/').pop())
}];

export default routes;