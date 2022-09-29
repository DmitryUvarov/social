import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "98a330c7-aa3c-40d8-a427-9e5833d7d034" }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, queryText) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}&term=${queryText}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance
            .post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => response.data)
    },
}


export const profileAPI = {
    getProfile(id) {
        return instance
            .get(`profile/${id}`)
            .then(response => response.data)
    }
}