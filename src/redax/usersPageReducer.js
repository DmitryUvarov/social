const SHOW_MORE = 'SHOW_MORE';
const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';

let initialState = {
    users: [
        {
            id: 1,
            name: 'Test user',
            status: 'hi!',
            location: {
                country: 'Ukraine',
                city: 'Kyiv',
            },
            logo: 'https://images.wallpaperscraft.ru/image/single/gory_panorama_oblaka_111416_300x188.jpg',
            subscribe: false,
        },
        {
            id: 2,
            name: 'Test user222',
            status: 'olala',
            location: {
                country: 'USA',
                city: 'LA',
            },
            logo: 'https://images.wallpaperscraft.ru/image/single/gory_zima_sneg_118389_300x188.jpg',
            subscribe: false,
        },
        {
            id: 3,
            name: 'Test user',
            status: 'hi!',
            location: {
                country: 'Ukraine',
                city: 'Kyiv',
            },
            logo: 'https://images.wallpaperscraft.ru/image/single/gory_panorama_oblaka_111416_300x188.jpg',
            subscribe: false,
        },
        {
            id: 4,
            name: 'Test user222',
            status: 'olala',
            location: {
                country: 'USA',
                city: 'LA',
            },
            logo: 'https://images.wallpaperscraft.ru/image/single/gory_zima_sneg_118389_300x188.jpg',
            subscribe: false,
        },
        {
            id: 5,
            name: 'Test user',
            status: 'hi!',
            location: {
                country: 'Ukraine',
                city: 'Kyiv',
            },
            logo: 'https://images.wallpaperscraft.ru/image/single/gory_panorama_oblaka_111416_300x188.jpg',
            subscribe: false,
        },
        {
            id: 6,
            name: 'Test user222',
            status: 'olala',
            location: {
                country: 'USA',
                city: 'LA',
            },
            logo: 'https://images.wallpaperscraft.ru/image/single/gory_zima_sneg_118389_300x188.jpg',
            subscribe: false,
        },
    ]
}


const usersPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SUBSCRIBE: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, subscribe: true }
                    }
                    return user
                }),
            }
        }

        case UNSUBSCRIBE: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, subscribe: false }
                    }
                    return user
                }),
            }
        }

        default:
            return state;
    }
}

export const subscribeAC = (userID) => ({ type: SUBSCRIBE, userID })
export const unsubscribeAC = (userID) => ({ type: UNSUBSCRIBE, userID })

export default usersPageReducer;