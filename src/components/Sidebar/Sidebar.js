import React from 'react'
import { NavLink } from "react-router-dom";
import s from './Sidebar.module.scss';

export const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <nav className={s.navbar}>
                <ul>
                    <li>
                        <NavLink to='/profile' className={({ isActive }) => isActive ? `${s.active}` : ""}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dialogs' className={({ isActive }) => isActive ? `${s.active}` : ""}>Dialogs</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users' className={({ isActive }) => isActive ? `${s.active}` : ""}>Users</NavLink>
                    </li>
                    <li>
                        <NavLink to='/news' className={({ isActive }) => isActive ? `${s.active}` : ""}>News</NavLink>
                    </li>
                    <li>
                        <NavLink to='/settings' className={({ isActive }) => isActive ? `${s.active}` : ""}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
