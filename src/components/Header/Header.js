import React from 'react'
import { Link, NavLink } from "react-router-dom";
import s from './Header.module.scss';


function Header(props) {
    return (
        <header className={s.header}>
            <Link to='/'>
                <img height="50px" width="50px" src='https://logojinni.com/image/logos/react-446.svg' />
            </Link>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    )
}

export default Header
