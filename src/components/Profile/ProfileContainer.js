import axios from 'axios'
import React, { Component } from 'react'
import Profile from './Profile'
import { setUserProfile, setLoaded } from '../../redax/profilePageReducer'
import { connect } from 'react-redux'
import { useParams, useContext } from "react-router-dom";

class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) { userId = 2; }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setLoaded(true);
                this.props.setUserProfile(response.data);
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