import React from 'react'
import style from './User.module.scss'

const User = (props) => {
    console.log(props)

    let onSubscribe = () => {
        props.subscribe(props.user.id)
    }
    let onUnSubscribe = () => {
        props.unsubscribe(props.user.id)
    }

    return (
        <div className={style.user}>
            <div className={style.userImage}>
                <img src={props.user.logo} alt="" />
            </div>
            <div className={style.userInfo}>
                <div className={style.userName}>{props.user.name}</div>
                <div className={style.userStatus}>{props.user.status}</div>
                {props.user.subscribe ?
                    <button
                        className={style.subscribe + ' ' + style.active}
                        onClick={onUnSubscribe}
                    >Отписаться</button>
                    :
                    <button
                        className={style.subscribe}
                        onClick={onSubscribe}
                    >Подписаться</button>}
            </div>
        </div>
    )
}

export default User;