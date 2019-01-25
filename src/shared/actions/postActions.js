import fetch from 'isomorphic-fetch';

export const fetchPosts = () => {

    const uri = encodeURI('https://jsonplaceholder.typicode.com/posts');

    return fetch(uri)
    .then(res => res.json())
    .catch(error => {
        console.warn(error);
        return null;
    });

};