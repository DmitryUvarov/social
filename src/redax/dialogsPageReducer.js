const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';

let initialState = {
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
}

const dialogsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            if (state.newMessage == '') {
                return state;
            } else {
                let newMessage = {
                    id: state.messages.length + 1,
                    message: state.newMessage,
                    my: true
                }
                return {
                    ...state,
                    messages: [...state.messages, newMessage],
                    newMessage: ''
                };
            }
        }

        case UPDATE_NEW_MESSAGE: {
            return {
                ...state,
                newMessage: action.newMessage,
            }
        }

        default:
            return state;
    }
}

export const updateNewMessageActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage: message
    }
}
export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export default dialogsPageReducer;