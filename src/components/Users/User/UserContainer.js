import React from 'react'
import { connect } from 'react-redux';
import User from './User';
import { subscribe, unsubscribe } from '../../../redax/usersPageReducer'

let mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {
    subscribe,
    unsubscribe,
})(User);