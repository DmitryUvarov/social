import React from 'react'
import s from './SendMessage.module.scss'

const SendMessage = (props) => {

    let addMessage = () => {
        props.addMessage()
    }
    let changeMessage = (message) => {
        props.changeMessage(message)
    }
    let handleKeyPress = (e) => {
        props.handleKeyPress(e)
    }

    return (
        <div className={s.SendMessage}>
            <input
                onChange={e => changeMessage(e.target.value)}
                onKeyPress={e => handleKeyPress(e)}
                value={props.newMessage}
                type="text"
                placeholder='Enter your message'
            />
            <button
                onClick={addMessage} > SEND
            </button>
        </div>
    )
}

export default SendMessage;