import React from 'react'
import { Link } from "react-router-dom";
import s from './Header.module.scss';


function Header() {
    return (
        <header className={s.header}>
            <Link to='/'>
                <img height="50px" width="50px" src='https://logojinni.com/image/logos/react-446.svg' />
            </Link>
        </header>
    )
}

export default Header
