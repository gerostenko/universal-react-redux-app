import fetch from 'isomorphic-fetch';

export const fetchUsers = () => {

    const uri = encodeURI('https://jsonplaceholder.typicode.com/users');

    return fetch(uri)
    .then(res => res.json())
    .catch(error => {
        console.warn(error);
        return null;
    });

};