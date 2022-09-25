import React from 'react'
import { AddPostContainer } from './AddPost/AddPostContainer'
import s from './MyPosts.module.scss'
import { Post } from './Post/Post.js'

export const MyPosts = (props) => {

    let postElement = props.posts.map(post => <Post post={post} key={post.id} />)

    return (
        <div className={s.MyPosts}>
            <AddPostContainer />

            <h2 className={s.Title}>Посты</h2>

            <div className={s.Posts}>
                {postElement}
            </div>
        </div>
    )
}
