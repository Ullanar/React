import React from "react";
import {connect} from "react-redux";
import userPage from "./usersPage";
import {changePageAC, followAC, setUsersAC, setUsersCountAC, unfollowAC} from "../../redux/usersReducer";


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
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
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
