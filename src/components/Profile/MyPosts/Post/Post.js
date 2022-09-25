import React from 'react'
import s from './Post.module.scss'

export const Post = (props) => {

    let post = props.post
    return (
        <div className={s.Post}>
            <div className={s.PostInfo}>
                <div className={s.PostInfo_img}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' width="50" height="50" />
                </div>
                <div className={s.PostInfo_name}>Dima Uvarov</div>
            </div>
            <div className={s.Title}>{post.message}</div>
            <div className={s.Text}>{post.text}</div>
            <div></div>
        </div>
    )
}
