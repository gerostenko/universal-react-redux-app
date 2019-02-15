import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

export default function createReduxStore( {preloadedState } = {}) {
    return createStore(reducers, preloadedState, applyMiddleware(thunkMiddleware));
}