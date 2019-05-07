import fetch from 'isomorphic-fetch';
import { FETCH_POSTS } from './types';

export const fetchPostsRequest = () => {
    const uri = encodeURI('https://jsonplaceholder.typicode.com/posts');
    return dispatch => fetch(uri)
    .then(res =>  res.json())
    .then(json => dispatch(fetchPosts(json)))
    .catch(error => {
        console.warn(error);
        return null;
    });
};

const fetchPosts = (payload) => ({type: FETCH_POSTS, payload});