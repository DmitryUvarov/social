const SHOW_MORE = 'SHOW_MORE';
const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const GET_USERS = 'GET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const GET_USERS_QUERY = 'GET_USERS_QUERY';
const SET_QUERY = 'SET_QUERY';
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    usersQuery: '',
    queryText: '',
    isFetching: false,
}


const usersPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SUBSCRIBE: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: true }
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
                        return { ...user, followed: false }
                    }
                    return user
                }),
            }
        }

        case GET_USERS: {
            return {
                ...state,
                users: [...action.users],
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        }
        case GET_USERS_QUERY: {
            return {
                ...state,
                usersQuery: action.usersQuery,
            }
        }
        case SET_QUERY: {
            return {
                ...state,
                queryText: action.queryText,
            }
        }
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        default:
            return state;
    }
}

export const subscribe = (userID) => ({ type: SUBSCRIBE, userID })
export const unsubscribe = (userID) => ({ type: UNSUBSCRIBE, userID })
export const setUsers = (users) => ({ type: GET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const setUsersQuery = (usersQuery) => ({ type: GET_USERS_QUERY, usersQuery })
export const setQuery = (queryText) => ({ type: SET_QUERY, queryText })
export const setLoaded = (isFetching) => ({ type: IS_FETCHING, isFetching })

export default usersPageReducer;