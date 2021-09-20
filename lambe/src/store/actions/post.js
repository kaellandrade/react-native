import { ADD_POST, ADD_COMMENT, SET_POSTS } from './actionsTypes'
import axios from 'axios'
export const addPost = post => {

    return dispatch => {
        axios.post('/posts.json', { ...post })
            .catch(err => console.log(err))
            .then(res => console.log(res.data))
    }
    /** SEM MIDDLEWARE
     return {
         type: ADD_POST,
         payload: post
     }
     */
}
export const addComment = payload => {
    return {
        type: ADD_COMMENT,
        payload
    }
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
                dispatch(setPosts(posts))
            })

    }
}