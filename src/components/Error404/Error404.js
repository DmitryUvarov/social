import React from 'react'
import { Link } from "react-router-dom";
import s from './Error404.module.scss';

function Error404() {
    return (
        <div className={s.errorPage}>
            <h1>404</h1>
            <p>Page not found! <Link to='/'>Go Home</Link></p>
        </div>

    )
}

export default Error404
