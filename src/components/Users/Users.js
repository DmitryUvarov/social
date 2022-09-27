import React from 'react'
import style from './Users.module.scss'
import UserContainer from './User/UserContainer';
import Preloader from '../common/preloader/Preloader';
import { Pagination } from '../common/preloader/Pagination/Pagination';

const Users = (props) => {

    let userElement = props.users.map(user => <UserContainer user={user} key={user.id} />);

    return (
        <div className='inner'>
            <h1 className={style.usersTitle}>Users class</h1>

            <div className={style.search}>
                <input
                    onChange={(e) => props.onChangeSearchInput(e.target.value)}
                    onKeyPress={(e) => props.onKeyPress(e)}
                    type="text"
                    placeholder='Имя пользователя которого ищите'
                    value={props.usersQuery} />
                <button
                    onClick={(e) => props.onSearchUser()}
                >Поиск</button>
            </div>

            <div className={style.query}>{props.queryText ? 'Найдено ' + props.totalUsersCount + ' пользователей по запросу: ' + props.queryText : ''}</div>
            <Pagination
                totalUsersCount={props.totalUsersCount}
                currentPage={props.currentPage}
                pageSize={props.pageSize}
                isFetching={props.isFetching}
                onPageChanged={props.onPageChanged}
                nextPage={props.nextPage}
                prevPage={props.prevPage}
            />
            {props.isFetching === true
                ? userElement.length === 0 ? '' : userElement
                : <Preloader />
            }
        </div>
    )
}

export default Users;