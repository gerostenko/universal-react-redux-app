import { FETCH_POSTS } from '../actions/types';

const initialState = {
    list: []
};

export default (state = initialState, {type, payload}) => {
    switch(type) {
        case FETCH_POSTS:
            return {
                ...state,
                list: payload
            };
        default:
            return state;
    }
};