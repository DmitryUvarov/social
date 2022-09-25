import React from 'react'
import { updateNewMessageActionCreator, sendMessageActionCreator } from '../../../redax/dialogsPageReducer'
import { connect } from 'react-redux'
import SendMessage from './SendMessage'

let mapStateToProps = (state) => {
    return {
        newMessage: state.dialogsPage.newMessage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        changeMessage: (message) => {
            dispatch(updateNewMessageActionCreator(message))
        },
        handleKeyPress: (e) => {
            if (e.key === "Enter") {
                dispatch(sendMessageActionCreator())
            }
        },
    }
}

const SendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessage);

export default SendMessageContainer;