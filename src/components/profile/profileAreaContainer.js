import React from 'react';
import Post from "./Posts/Post";
import ProfileArea from "./profileArea";


function ProfileAreaContainer(props) {
debugger;
    let posts = props.state.profilePage.postsContent
        .map((post) => <Post postText={post.post}/>)


    return (
        <ProfileArea posts = {posts} userDescription = {props.state.profilePage.userDescription}
                     state = {props.state} dispatch = {props.dispatch}/>
    );
}

export default ProfileAreaContainer;
