import React from 'react'
import s from './AddPost.module.scss'

export const AddPost = (props) => {

    let onAddPost = () => {
        props.AddNewPost()
    }
    let onChangeTitle = (title) => {
        props.changeTitle(title)
    }
    let onChangeText = (text) => {
        props.changeText(text)
    }

    return (
        <div className={s.AddPost}>
            <div className={s.Title}>Создать пост</div>

            <div className='AddBlock'>
                <span>Заголовок:</span>
                <input
                    onChange={e => onChangeTitle(e.target.value)}
                    type="text"
                    value={props.newPostTitle}
                />
                <span>Описание:</span>
                <textarea
                    onChange={e => onChangeText(e.target.value)}
                    value={props.newPostText} />
                <button onClick={onAddPost}>Добавить</button>
            </div>
        </div>
    )
}
