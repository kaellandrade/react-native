import { OPEN_MODAL, CLOSE_MODAL } from "../actions/actionsTypes";
const initialState = {
    showModal: true,
    nomeAmigo: '',
    emailAmigo: ''
}

reducerModal = (state = initialState, action) => {
    if (action.type === OPEN_MODAL) {
        return {
            ...state,
            showModal: true
        }
    } else if (action.type === CLOSE_MODAL) {
        return {
            ...state,
            showModal: false
        }
    } else {
        return state;
    }

}

export default reducerModal