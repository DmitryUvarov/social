import React from 'react'
import User from './User/User';
import UserContainer from './User/UserContainer';
import style from './Users.module.scss'
const Users = (props) => {

    let userElement = props.users.map(user => <UserContainer user={user} key={user.id} />);
    return (
        <div className='inner'>
            <h1 className={style.usersTitle}>Users</h1>
            {userElement}
        </div>
    )
}

export default Users;