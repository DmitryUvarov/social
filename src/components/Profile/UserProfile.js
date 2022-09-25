import React from 'react'
import s from './UserProfile.module.scss';

export const UserProfile = () => {
    return (
        <div className={s.UserProfile}>
            <div className={s.UserImage}>
                <img src='https://static5.depositphotos.com/1037262/443/i/450/depositphotos_4436189-stock-photo-paradise-beach.jpg' width="250" height="250" />
            </div>
            <div className={s.UserInfo}>
                <h4 className={s.UserName}>Dmytro Uvarov</h4>
                <p>Bithday: 3:10:2003</p>
                <p>Ciry: Kyiv</p>
                <p>Web Site: </p>
            </div>
        </div>
    )
}
