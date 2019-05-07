import { FETCH_USERS } from '../actions/types';

const initialState = {
    list: []
};

export default (state = initialState, {type, payload}) => {
    switch(type) {
        case FETCH_USERS: 
            return {
                ...state,
                list: payload
            };    
        default:
            return state;
    }
};