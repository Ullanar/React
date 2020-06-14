import React from 'react';
import Post from "./Posts/Post";
import ProfileArea from "./profileArea";
import {connect} from "react-redux";


function mapStateToProps (state) {

    return {
        posts : state.profilePage.postsContent
            .map((post) => <Post postText={post.post}/>),
        userDescription: state.profilePage.userDescription
    }
}


let ProfileAreaContainer = connect(mapStateToProps)(ProfileArea);

export default ProfileAreaContainer;
