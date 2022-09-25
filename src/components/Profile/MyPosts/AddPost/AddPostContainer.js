import React from 'react'
import { connect } from 'react-redux'
import { addPostActionCreator, updateNewPostTitleActionCreator, updateNewPostTextActionCreator } from '../../../../redax/profilePageReducer'
import { AddPost } from './AddPost'

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        newPostTitle: state.profilePage.newPostTitle
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        AddNewPost: () => {
            dispatch(addPostActionCreator())
        },
        changeTitle: (title) => {
            dispatch(updateNewPostTitleActionCreator(title))
        },
        changeText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
    }
}

export const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);