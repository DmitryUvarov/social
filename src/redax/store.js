import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";

export let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Name Nameme', text: 'Привет, как дела?' },
                { id: 2, message: 'Что такое Lorem Ipsum?', text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков,' },
                { id: 3, message: 'Name Nameme' },
            ],
            newPostTitle: 'wwwww',
            newPostText: 'dddd',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Name Nameme' },
                { id: 2, name: '2222 222222' },
                { id: 3, name: 'Test user' },
            ],
            messages: [
                { id: 1, message: 'My name is Dmytro!', my: true },
                { id: 2, message: 'nice!  :D' },
                { id: 3, message: '00000==024' },
                { id: 4, message: '-_-' },
                { id: 5, message: '.', my: true },
                { id: 6, message: 'ky ky' },
            ],
            newMessage: '',
        },
    },
    _callSubscriber() {
        console.log('State changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    },
}

export default store
window.store = store