import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, getUsers, setQuery, setUsersQuery } from '../../redax/usersPageReducer';
import Users from './Users';

class UsersConteiner extends Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.queryText)
    }
    onPageChanged = (pageNumber) => {
        if (typeof pageNumber === 'number') {
            this.props.setCurrentPage(pageNumber)
            this.props.getUsers(pageNumber, this.props.pageSize, this.props.queryText)
        }
    }
    prevPage = (currentPage) => {
        if (currentPage >= 2) {
            this.props.setCurrentPage(currentPage - 1)
            this.props.getUsers(currentPage - 1, this.props.pageSize, this.props.queryText)
        }
    }
    nextPage = (currentPage, lastPage) => {
        if (currentPage !== lastPage) {
            this.props.setCurrentPage(currentPage + 1)
            this.props.getUsers(currentPage + 1, this.props.pageSize, this.props.queryText)
        }
    }
    onChangeSearchInput = (text) => {
        this.props.setUsersQuery(text)
    }
    onSearchUser = () => {

        this.props.setCurrentPage(1)
        this.props.setQuery(this.props.usersQuery)
        this.props.getUsers(1, this.props.pageSize, this.props.usersQuery)
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
            toggleFolowingProgress={this.toggleFolowingProgress}
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
    setCurrentPage,
    setUsersQuery,
    setQuery,
    getUsers
}
)(UsersConteiner);