import React from 'react'
import s from './Message.module.scss'

export const Message = (props) => {
    let message = props.message
    let MyMessage = '';
    if (message.my) MyMessage = s.active

    return (
        <div className={s.message + ' ' + MyMessage}>{message.message}</div>
    )
}
