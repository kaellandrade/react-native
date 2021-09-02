import { createStore, combineReducers } from 'redux'
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
    return createStore(reducers);
}

export default storeConfig;