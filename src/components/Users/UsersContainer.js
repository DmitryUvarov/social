import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setUsers, setCurrentPage, setTotalUsersCount, setUsersQuery, setQuery, setLoaded } from '../../redax/usersPageReducer'
import axios from 'axios';
import Users from './Users';

class UsersConteiner extends Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}&term=${this.props.queryText}`)
            .then(response => {
                this.props.setLoaded(true);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    onPageChanged = (pageNumber) => {
        if (typeof pageNumber === 'number') {
            this.props.setLoaded(false);
            this.props.setCurrentPage(pageNumber)
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}&term=${this.props.queryText}`)
                .then(response => {
                    this.props.setLoaded(true);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                })
        }
    }
    prevPage = (currentPage) => {
        if (currentPage >= 2) {
            this.props.setLoaded(false);
            this.props.setCurrentPage(currentPage - 1)
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage - 1}&count=${this.props.pageSize}&term=${this.props.queryText}`)
                .then(response => {
                    this.props.setLoaded(true);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                })
        }
    }
    nextPage = (currentPage, lastPage) => {
        if (currentPage !== lastPage) {
            this.props.setLoaded(false);
            this.props.setCurrentPage(currentPage + 1)
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage + 1}&count=${this.props.pageSize}&term=${this.props.queryText}`)
                .then(response => {
                    this.props.setLoaded(true);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                })
        }
    }
    onChangeSearchInput = (text) => {
        this.props.setUsersQuery(text)
    }
    onSearchUser = () => {
        this.props.setLoaded(false);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${1}&count=${this.props.pageSize}&term=${this.props.usersQuery}`)
            .then(response => {
                this.props.setLoaded(true);
                this.props.setCurrentPage(1)
                this.props.setQuery(this.props.usersQuery)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    onKeyPress = (e) => {
        if (e.key === "Enter") this.onSearchUser()

    }
    render() {
        return <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            usersQuery={this.props.usersQuery}
            currentPage={this.props.currentPage}
            queryText={this.props.queryText}
            onPageChanged={this.onPageChanged}
            prevPage={this.prevPage}
            nextPage={this.nextPage}
            onChangeSearchInput={this.onChangeSearchInput}
            onSearchUser={this.onSearchUser}
            onKeyPress={this.onKeyPress}
            isFetching={this.props.isFetching}
        />
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        usersQuery: state.usersPage.usersQuery,
        queryText: state.usersPage.queryText,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsersQuery,
    setQuery,
    setLoaded,
}
)(UsersConteiner);