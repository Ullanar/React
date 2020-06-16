import React from "react";
import {connect} from "react-redux";
import UsersPage from "./usersPage";


function mapStateToProps(state) {
    return{

        users: state.usersPage.users
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
        }
    };
}

const UsersPageContainer = connect (mapStateToProps, mapDispatchToProps)(UsersPage);

export default UsersPageContainer;
