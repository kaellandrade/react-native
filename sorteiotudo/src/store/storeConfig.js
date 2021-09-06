import { createStore, combineReducers } from 'redux';

import friendReducer from './reducers/friend';

const reducers = combineReducers({
    friends: friendReducer
})

const storeConfig = _ => {
    return createStore(reducers)
}

export default storeConfig;