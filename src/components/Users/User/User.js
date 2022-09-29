import React from 'react'
import style from './User.module.scss'
import userPhoto from '../../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom';

const User = (props) => {
    let user = props.user;

    let onSubscribe = () => {
        props.followUser(user.id)
    }
    let onUnSubscribe = () => {
        props.unfollowUser(user.id)
    }


    return (
        <div className={style.user}>
            <div className={style.userImage}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.large != null ? user.photos.large : userPhoto} alt="" />
                </NavLink>
            </div>
            <div className={style.userInfo}>
                <NavLink to={'/profile/' + user.id}>
                    <div className={style.userName}>{user.name} </div>
                </NavLink>
                <div className={style.userStatus}>{user.status}</div>
                {user.followed ?
                    <button
                        disabled={props.followingInProgress.some(id => id == user.id)}
                        className={style.subscribe + ' ' + style.active}
                        onClick={onUnSubscribe}
                    >Отписаться</button>
                    :
                    <button
                        disabled={props.followingInProgress.some(id => id == user.id)}
                        className={style.subscribe}
                        onClick={onSubscribe}
                    >Подписаться</button>}
            </div>
        </div >
    )
}

export default User;