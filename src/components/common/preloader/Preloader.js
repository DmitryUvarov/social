import React from 'react'
import style from './Preloader.module.scss'
import loaderGif from '../../../assets/gif/loader.gif'

const Preloader = () => {
    return (
        <div className={style.loaded}>
            <img src={loaderGif} />
        </div>
    )
}

export default Preloader;