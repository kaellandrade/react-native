import { ADD_FRIEND, DELETE_FRIEND, UPDATE_FRIEND } from './actionsTypes';
/**
 * Ações relacionadas a tela amigo secreto.
 */
const addFriend = friend => {
    return {
        type: ADD_FRIEND,
        payload: friend
    }
}

const deleteFriend = friendId => {
    return {
        type: DELETE_FRIEND,
        payload: friendId
    }
}

const updateFriend = friendId => {
    return {
        type: UPDATE_FRIEND,
        payload: friendId
    }
}

export { addFriend, deleteFriend, updateFriend }