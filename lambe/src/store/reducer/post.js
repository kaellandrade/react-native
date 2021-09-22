import {
    ADD_POST,
    ADD_COMMENT,
    SET_POSTS,
    CREATING_POST,
    POST_CREATED
} from '../actions/actionsTypes';

const initialState = {
    posts: [
    ],
    isUploading: false
}

const reducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        return {
            ...state,
            posts: state.posts.concat({
                ...action.payload
            })
        }
    } else if (action.type === ADD_COMMENT) {
        return {
            ...state,
            posts: state.posts.map(post => {
                if (post.id === action.payload.postId) {
                    if (post.comments) { // Se o array comments estiver setado
                        post.comments = post.comments.concat(action.payload.comment)
                    } else {
                        post.comments = [action.payload.comment] // Setando caso contrário
                    }
                }
                return post
            })
        }
    } else if (action.type === SET_POSTS) {
        return {
            ...state,
            posts: action.payload
        }
    } else if (action.type === CREATING_POST) {
        return {
            ...state,
            isUploading: true
        }
    } else if (action.type === POST_CREATED) {
        return {
            ...state,
            isUploading: false
        }
    }
    else {
        return state
    }
}

export default reducer;