import fetch from 'isomorphic-fetch';

export function fetchByCategoryName(categoryName = 'News') {

    //console.log(categoryName);

    const uri = encodeURI(`https://www.cbc.ca/bistro/order?categoryName=${categoryName}`);

    return fetch(uri)
    .then((data) => data.json())
    .then((result) => result.items)
    .catch((error) => {
        console.warn(error);
        return null;
    });

}