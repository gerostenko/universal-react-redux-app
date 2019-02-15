import { combineReducers } from 'redux';
import user from './user';
import posts from './posts';

const reduxState =  combineReducers({
    user,
    posts
});

export default reduxState;