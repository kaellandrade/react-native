import { CLOSE_MODAL, OPEN_MODAL } from './actionsTypes'

export const closeModal = _ => {
    return {
        type: CLOSE_MODAL,
        payload: _
    }
}
export const openModal = _ => {
    return {
        type: OPEN_MODAL,
        payload: _
    }
}