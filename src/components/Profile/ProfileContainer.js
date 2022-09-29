import axios from 'axios'
import React, { Component } from 'react'
import Profile from './Profile'
import { setUserProfile, setLoaded } from '../../redax/profilePageReducer'
import { connect } from 'react-redux'
import { useParams, useContext } from "react-router-dom";
import { profileAPI } from '../../api/api'

class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) { userId = 2; }
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setLoaded(true);
                this.props.setUserProfile(data);
            })
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let WithUrlDataContainerComponent = (props) => {
    return (<ProfileContainer {...props} params={useParams()} />
    )
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
    }
}

export default connect(mapStateToProps, {
    setUserProfile,
    setLoaded,
}
)(WithUrlDataContainerComponent);