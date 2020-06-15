import React from "react";
import {connect} from "react-redux";
import UsersPage from "./usersPage";
import UsersTitle from "./usersTitle/usersTitle";


function mapStateToProps(state) {
    return{
    users: state.usersPage.users
        .map((user) => <UsersTitle userName = {user.userName}
                                   photoUrl = {user.photoUrl}
                                   status = {user.status}
                                   country = {user.country}
                                   city = {user.city}/>)
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

const UsersPageContainer = connect (mapStateToProps, mapDispatchToProps)(UsersPage);

export default UsersPageContainer;
