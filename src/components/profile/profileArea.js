import React from 'react';
import css from './profileArea.module.css';
import Avatar from "./profileAvatar/Ava";
import Description from "./profileDescription/Description";
import CreateNewPost from './createNewPost/addNewPost'
import Post from "./Posts/Post";
import AddNewPostContainer from "./createNewPost/addNewPostContainer";


function ProfileArea(props) {

    return (
        <div className={css.content}>

            <Avatar/>
            <Description userDescription = {props.userDescription}/>
            <br/>
            <AddNewPostContainer/>
            <br/>
            {props.posts}

        </div>
    );
}

export default ProfileArea;

