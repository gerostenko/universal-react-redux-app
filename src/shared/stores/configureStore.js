import { createStore } from 'redux';

var defaultState = {
    posts: [],
    users: []
};

function amount(state = defaultState, action) {
    if(action.type === 'FETCH_POSTS') {
       return {
           ...state,
           posts: action.data
       };
    }
    else if(action.type === 'FETCH_USERS') {
        return {
            ...state,
            users: action.data
        };
    }
    return state;
}

var store = createStore(amount);

store.subscribe(() => {
      console.log('state', store.getState()); 
});

//store.dispatch({type: 'FETCH_USERS', data: '300.65'});
//store.dispatch({type: ''});
//store.dispatch({type: ''});

export default store;