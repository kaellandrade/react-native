import {
    ADD_POST,
    ADD_COMMENT,
    SET_POSTS,
    CREATING_POST,
    POST_CREATED
} from './actionsTypes'
import axios from 'axios'
export const addPost = post => {

    return dispatch => {
        dispatch(creatingPost())
        axios.post('/posts.json', { ...post })
            .catch(err => console.log(err))
            .then(res => {
                dispatch(getPosts())
                dispatch(postCreated())
                console.log(res.data)
            })
    }

}
export const addComment = payload => {
    return dispatch => {
        axios.get(`/posts/${payload.postId}.json`)
            .catch(errr => console.log(err))
            .then(res => {
                const comments = res.data.comments || []
                comments.push(payload.comment)
                axios.patch(`/posts/${payload.postId}.json`, { comments })
                    .catch(errr => console.log(err))
                    .then(res => {
                        dispatch(getPosts())
                    })
            })
    }
    // return {
    //     type: ADD_COMMENT,
    //     payload
    // }
}

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const getPosts = _ => {
    return dispatch => {
        axios.get('/posts.json')
            .catch(err => console.log(err))
            .then(res => {
                const rawPosts = res.data
                const posts = []
                for (let key in rawPosts) {
                    posts.push({
                        ...rawPosts[key], id: key
                    })
                }
                dispatch(setPosts(posts.reverse()))
            })

    }
}

export const creatingPost = _ => {
    return {
        type: CREATING_POST
    }
}

export const postCreated = _ => {
    return {
        type: POST_CREATED
    }
}