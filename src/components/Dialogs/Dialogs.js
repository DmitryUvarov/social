import React from 'react'
import { Dialog } from './Dialog/Dialog';
import { Message } from './Message/Message';
import s from './Dialogs.module.scss';
import SendMessageContainer from './SendMessage/SendMessageContainer';

const Dialogs = (props) => {

    let dialogElement = props.dialogsPage.dialogs.map(dialog => <Dialog dialog={dialog} key={dialog.id} />)
    let messageElement = props.dialogsPage.messages.map(message => <Message message={message} key={message.id} />)

    return (
        <div className={s.PageDialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div className={s.messagesOverflow}>
                    {messageElement}
                </div>
                <SendMessageContainer />
            </div>
        </div>
    )
}

export default Dialogs