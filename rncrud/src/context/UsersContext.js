import React, { createContext, useReducer } from 'react';
import user from '../data/user';
import users from '../data/user';

const UsersContext = createContext({});
const initialState = { users };
/**
 * Ações da aplicação
 */
const actions = {
    updateUser(state, action) {
        const user = action.payload;
        const editUser = state.users.map((item) => {
            if (item.id === user.id)
                return user
            else
                return item
        });
        return { ...state, users: editUser }
    },

    /**
     * Cria um usuário
     */
    createUser(state, action) {
        const newUser = action.payload;
        newUser.id = Math.random();
        return { ...state, users: [...state.users, newUser] }
    },

    /**
     * Deleta um usuário
     */
    deleteUser(state, action) {
        const user = action.payload;
        return { ...state, users: state.users.filter((us, _) => (us.id !== user.id)) }
    }
}

export const UsersProvider = props => {
    /**
     * Quando o usuário chamar o dipatch a essa função será invocada.
     * essa função precisa retornar um novo estado evoluido
     */
    function reducer(state, action) {
        /**
         * Action genérica
         */
        const fn = actions[action.type];
        return fn ? fn(state, action) : state
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        // Provendo a lista de usuários
        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    );
}
export default UsersContext;