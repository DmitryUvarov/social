import React, { Component } from 'react'
import { connect } from 'react-redux';
import User from './User';
import { follow, unfollow } from '../../../redax/usersPageReducer'


class UserConteiner extends Component {

    followUser = (userId) => {
        this.props.follow(userId)
    }
    unfollowUser = (userId) => {
        this.props.unfollow(userId)
    }
    render() {
        return <User
            user={this.props.user}
            followingInProgress={this.props.followingInProgress}
            followUser={this.followUser}
            unfollowUser={this.unfollowUser}
        />
    }
}


let mapStateToProps = (state) => {
    return {
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
})(UserConteiner);
