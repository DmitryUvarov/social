import React from 'react'
import Profile from './Profile/Profile'
import Users from './Users/Users'
import DialogsContainer from './Dialogs/DialogsContainer'
import { News } from './News';
import Error404 from './Error404/Error404'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import s from '../styles/Main.module.scss'
import UsersContainer from './Users/UsersContainer';

export const Main = (props) => {

    return (
        <div className={s.content}>
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/news" element={<News />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </div>
    )
}
