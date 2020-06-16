import React from "react";
import {connect} from "react-redux";
import UsersPage from "./usersPage";
import UsersTitle from "./usersTitle/usersTitle";


function mapStateToProps(state) {
    return{
    // users: state.usersPage.users
    //     .map((user) => <UsersTitle userName = {user.userName}
    //                                photoUrl = {user.photoUrl}
    //                                status = {'Status: '+ user.status}
    //                                country = {'Country: '+ user.country}
    //                                city = {'City: ' + user.city}/>)

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
