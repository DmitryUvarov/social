import React from 'react'
import s from './UserProfile.module.scss';
import userPhoto from '../../assets/images/user.jpg'

export const UserProfile = (props) => {

    return (
        <div className={s.UserProfile}>
            <div className={s.UserImage}>
                <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} width="250" height="250" />
            </div>
            <div className={s.UserInfo}>
                <h4 className={s.UserName}>{props.profile.fullName}</h4>
                <p>{props.profile.aboutMe}</p>

                <ul>
                    <li><a href={props.profile.contacts.github}>Github</a></li>
                </ul>
            </div>
        </div>
    )
}
