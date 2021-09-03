import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import UserReducer from './reducer/user'
import postsReducer from './reducer/post'

/**
 * A chave user permite o acesso global a todos os reducers
 * que estão em ./reducer/user
 */
const reducers = combineReducers({
    user: UserReducer,
    posts: postsReducer
})

const storeConfig = _ => {
    return createStore(reducers, compose(applyMiddleware(thunk)));
}

export default storeConfig;