import { ADD_FRIEND, DELETE_FRIEND, UPDATE_FRIEND } from "../actions/actionsTypes";

const initialState = {
    amigosCadastrados: [
        {
            id: Math.random(),
            name: 'Silvania Andrade',
            email: 'silvania.math@gmail.com'
        },
        {
            id: Math.random(),
            name: 'Jorge Andrade',
            email: 'micael.java@gmail.com'
        },
        {
            id: Math.random(),
            name: 'Miriã Nicacio',
            email: 'miri.python@gmail.com'
        },
        {
            id: Math.random(),
            name: 'Adriano Andrade',
            email: 'adriano.js@gmail.com'
        },
        {
            id: Math.random(),
            name: 'Silvania Andrade',
            email: 'silvania.math@gmail.com'
        },
        {
            id: Math.random(),
            name: 'Jorge Andrade',
            email: 'micael.java@gmail.com'
        },
        {
            id: Math.random(),
            name: 'Miriã Nicacio',
            email: 'miri.python@gmail.com'
        },
        {
            id: Math.random(),
            name: 'Adriano Andrade',
            email: 'adriano.js@gmail.com'
        }, {
            id: Math.random(),
            name: 'Silvania Andrade',
            email: 'silvania.math@gmail.com'
        },
        {
            id: Math.random(),
            name: 'Jorge Andrade',
            email: 'micael.java@gmail.com'
        },
        {
            id: Math.random(),
            name: 'Miriã Nicacio',
            email: 'miri.python@gmail.com'
        },
        {
            id: Math.random(),
            name: 'Adriano Andrade',
            email: 'adriano.js@gmail.com'
        },

    ]
}

reducer = (state = initialState, action) => {
    if (action.type === ADD_FRIEND) {
        const newFrind = {
            id: Math.random(),
            ...action.payload
        }
        return {
            ...state,
            amigosCadastrados: state.amigosCadastrados.concat(newFrind)
        }
    } else if (action.type === DELETE_FRIEND) {
        return {
            ...state,
            amigosCadastrados: state.amigosCadastrados.filter(({ id }) => (id != action.payload))
        }
    } else if (action.type === UPDATE_FRIEND) {
        return {
            ...state,
            amigosCadastrados: state.amigosCadastrados.map((friend) => {
                if (friend.id === action.payload.id)
                    return { ...friend, name: action.payload.name, email: action.payload.email }
                else
                    return friend
            })
        }
    }
    else {
        return state;
    }

}
export default reducer;