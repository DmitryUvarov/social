import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.scss';

export const Dialog = (props) => {
    let dialog = props.dialog

    return (
        <NavLink to={'/dialogs/' + dialog.id} className={({ isActive }) => isActive ? `${s.active + ' ' + s.dialog}` : `${s.dialog}`}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' width="50" height="50" />
            <div className={s.name}>{dialog.name}</div>
        </NavLink>
    )
}
