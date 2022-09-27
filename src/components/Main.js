import React from 'react'
import DialogsContainer from './Dialogs/DialogsContainer'
import { News } from './News';
import Error404 from './Error404/Error404'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import s from '../styles/Main.module.scss'
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';

export const Main = (props) => {

    return (
        <div className={s.content}>
            <Routes>
                <Route path="/profile" element={<ProfileContainer />}>
                    <Route path=':userId' element={<ProfileContainer />} />
                </Route>
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/news" element={<News />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </div>
    )
}
