import { createStore, combineReducers } from 'redux'
import UserReducer from './reducer/user'

/**
 * A chave user permite o acesso global a todos os reducers
 * que estão em ./reducer/user
 */
const reducers = combineReducers({
    user: UserReducer
})

const storeConfig = _ => {
    return createStore(reducers);
}

export default storeConfig;