import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionsTypes';

const login = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

const logout = _ => {
    return {
        type: USER_LOGGED_OUT,
    }
}
export { login, logout }