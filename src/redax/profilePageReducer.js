const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
    profile: {},
    posts: [
        { id: 1, message: 'Name Nameme', text: 'Привет, как дела?' },
        { id: 2, message: 'Что такое Lorem Ipsum?', text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков,' },
        { id: 3, message: 'Name Nameme' },
    ],
    newPostTitle: '',
    newPostText: '',
}

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostTitle,
                text: state.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostTitle: '',
                newPostText: '',
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state };
            if (action.newTitle) {
                stateCopy.newPostTitle = action.newTitle;
            } else if (action.newText) {
                stateCopy.newPostText = action.newText;
            }
            return stateCopy;
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTitleActionCreator = (title) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newTitle: title
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const setLoaded = (isFetching) => ({ type: IS_FETCHING, isFetching })

export default profilePageReducer;