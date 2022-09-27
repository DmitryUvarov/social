import React from 'react'
import Preloader from '../common/preloader/Preloader'
import { MyPosts } from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { UserProfile } from './UserProfile'

function Profile(props) {
    return (
        <div className='inner'>
            {props.isFetching
                ? <UserProfile {...props} />
                : <Preloader />}
            <MyPostsContainer />
        </div>
    )
}

export default Profile
