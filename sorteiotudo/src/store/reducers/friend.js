import { ADD_FRIEND, DELETE_FRIEND } from "../actions/actionsTypes";

const initialState = {
    amigosCadastrados: [
        {
            id: Math.random(),
            nome: 'Silvania Andrade',
            email: 'silvania.math@gmail.com'
        },
        {
            id: Math.random(),
            nome: 'Jorge Andrade',
            email: 'micael.java@gmail.com'
        },
        {
            id: Math.random(),
            nome: 'Miriã Nicacio',
            email: 'miri.python@gmail.com'
        },
        {
            id: Math.random(),
            nome: 'Adriano Andrade',
            email: 'adriano.js@gmail.com'
        },
        {
            id: Math.random(),
            nome: 'Silvania Andrade',
            email: 'silvania.math@gmail.com'
        },
        {
            id: Math.random(),
            nome: 'Jorge Andrade',
            email: 'micael.java@gmail.com'
        },
        {
            id: Math.random(),
            nome: 'Miriã Nicacio',
            email: 'miri.python@gmail.com'
        },
        {
            id: Math.random(),
            nome: 'Adriano Andrade',
            email: 'adriano.js@gmail.com'
        }, {
            id: Math.random(),
            nome: 'Silvania Andrade',
            email: 'silvania.math@gmail.com'
        },
        {
            id: Math.random(),
            nome: 'Jorge Andrade',
            email: 'micael.java@gmail.com'
        },
        {
            id: Math.random(),
            nome: 'Miriã Nicacio',
            email: 'miri.python@gmail.com'
        },
        {
            id: Math.random(),
            nome: 'Adriano Andrade',
            email: 'adriano.js@gmail.com'
        },

    ]
}

reducer = (state = initialState, action) => {
    if (action.type === ADD_FRIEND) {
        return {
            ...state
        }
    } else if (action.type === DELETE_FRIEND) {
        return {
            ...state
        }
    } else {
        return state;
    }

}
export default reducer;