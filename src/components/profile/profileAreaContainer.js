import React from 'react';
import Post from "./Posts/Post";
import ProfileArea from "./profileArea";
import {connect} from "react-redux";
import * as axios from "axios";
import userPage from "../users/usersPage";
import {setUserFromResponseAC} from "../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";



class ProfileConnector extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 9831
        axios.get('https://social-network.samuraijs.com/api/1.0//profile/' + userId)
            .then(response => {
                //this.props.toggleLoading(false);
                this.props.setUserPage(response.data)

            });
    }

    render(){
        return(
            <ProfileArea {...this.props}/>

        )
    }
}




function mapStateToProps(state) {


    return {
        posts: state.profilePage.postsContent
            .map((post) => <Post postText={post.post} key={post.postId}/>),
        // Массив всех постов на странице юзера
        userDescription: state.profilePage.userDescription,
        // Описание пользователя, выдающееся рядом с аватаром
        userData: state.profilePage.userRes,
        userID: state.auth.id
    }
}


function mapDispatchToProps(dispatch){
    return {

        setUserPage: (userDataFromRes) => {
        dispatch(setUserFromResponseAC(userDataFromRes))
    }

    }
}


let WithRouterDataContainerComponent = withRouter(ProfileConnector)


let ProfileAreaContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterDataContainerComponent);

export default ProfileAreaContainer;
