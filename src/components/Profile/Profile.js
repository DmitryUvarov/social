import React from 'react'
import { MyPosts } from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { UserProfile } from './UserProfile'

function Profile(props) {

    return (
        <div className='inner'>
            <UserProfile />
            <MyPostsContainer />
        </div>
    )
}

export default Profile
