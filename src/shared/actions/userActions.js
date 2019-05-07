import fetch from 'isomorphic-fetch';
import { FETCH_USERS } from './types';

 export const fetchUsersRequest = () => {

    const uri = encodeURI('https://jsonplaceholder.typicode.com/users');
    return dispatch => fetch(uri)
    .then(res =>  res.json())
    .then(json => dispatch(fetchUsers(json)))
    .catch(error => {
        console.warn(error);
        return null;
    });
};

const fetchUsers = (payload) => ({ type: FETCH_USERS, payload });
