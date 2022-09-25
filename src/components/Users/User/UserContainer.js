// import React from 'react'


// const User = (props) => {
//     return (
//         <div className={style.user}>
//             <div className={style.userImage}>
//                 <img src={props.user.logo} alt="" />
//             </div>
//             <div className={style.userInfo}>
//                 <div className={style.userName}>{props.user.name}</div>
//                 <div className={style.userStatus}>{props.user.status}</div>
//                 <button className={style.subscribe}>Subscribe</button>
//             </div>
//         </div>
//     )
// }

// export default User;

import React from 'react'
import { connect } from 'react-redux';
import User from './User';
import { subscribeAC, unsubscribeAC } from '../../../redax/usersPageReducer'

let mapStateToProps = (state) => {
    return {
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (userID) => {
            dispatch(subscribeAC(userID))
        },
        unsubscribe: (userID) => {
            dispatch(unsubscribeAC(userID))
        },
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;