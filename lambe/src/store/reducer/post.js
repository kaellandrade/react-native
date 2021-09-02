import { ADD_POST, ADD_COMMENT } from '../actions/actionsTypes';

const initialState = {
    posts: [
        {
            id: Math.random(),
            nickname: 'Micael Andrade',
            email: 'micael..java@gmail.com',
            image: require('../../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'John Ray Sheldon',
                comment: 'Stunnig!'
            },
            {
                nickname: 'Manoel Silva',
                comment: 'Foto Legal!'
            }, {
                nickname: 'Breno Barroso',
                comment: 'Uau!'
            },
            {
                nickname: 'Miriã',
                comment: 'Linda!!'
            }
            ]
        },
        {
            id: Math.random(),
            nickname: 'Joice',
            email: 'joice.@gmail.com',
            image: require('../../../assets/imgs/bw.jpg'),
            comments: [{
                nickname: 'John Ray Sheldon',
                comment: 'Stunnig!'
            },
            {
                nickname: 'Manoel Silva',
                comment: 'Foto Legal!'
            }, {
                nickname: 'Breno Barroso',
                comment: 'Uau!'
            },
            {
                nickname: 'Miriã',
                comment: 'Linda!!'
            }
            ]
        }, {
            id: Math.random(),
            nickname: 'Pedro',
            email: 'ppdro.@gmail.com',
            image: require('../../../assets/imgs/boat.jpg'),
            comments: [{
                nickname: 'Uelton',
                comment: 'Gostei muito!'
            },
            {
                nickname: 'Manoel Silva',
                comment: 'Foto Legal!'
            }, {
                nickname: 'Caio',
                comment: 'Legal!'
            },
            {
                nickname: 'Slivania',
                comment: 'Gostei!!'
            }
            ]
        },
        {
            id: Math.random(),
            nickname: 'Jota',
            email: 'jj.@gmail.com',
            image: require('../../../assets/imgs/gate.jpg'),
            comments: [
            ]
        }
    ]
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
    }
    else {
        return state
    }
}

export default reducer;