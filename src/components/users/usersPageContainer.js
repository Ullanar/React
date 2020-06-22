import React from "react";
import {connect} from "react-redux";
import userPage from "./usersPage";
import {changePageAC, setUsersCountAC} from "../../redux/usersReducer";


function mapStateToProps(state) {
    return {

        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,

    };
}

function mapDispatchToProps(dispatch) {
    return {
        follow: (userId) => {
            dispatch({type: 'FOLLOW', userId: userId})
        },
        unfollow: (userId) => {
            dispatch({type: 'UNFOLLOW', userId: userId})
        },
        setUsers: (users) => {
            dispatch({type: 'SET_USERS', users: users})
        },
        changeCurrentPage: (page) => {
            dispatch(changePageAC(page))
        },
        setUsersCount: (totalUsersCount) => {
            dispatch(setUsersCountAC(totalUsersCount))
        }
    };
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(userPage);

export default UsersPageContainer;
