import React from 'react';
import css from './profileArea.module.css';
import ProfileAvatar from "./profileAvatar/ProfileAvatar";
import Description from "./profileDescription/Description";
import CreateNewPost from './createNewPost/addNewPost'
import Post from "./Posts/Post";
import AddNewPostContainer from "./createNewPost/addNewPostContainer";


function ProfileArea(props) {

    return (
        <div className={css.content}>
            <img className={css.image}
                 src='https://www.onlygfx.com/wp-content/uploads/2017/12/origami-banner-rectangle-2-1024x295.png'/>
            <ProfileAvatar/>
            <Description userDescription = {props.userDescription}/>
            <br/>
            <AddNewPostContainer dispatch={props.dispatch} state = {props.state}/>
            <br/>
            {props.posts}

        </div>
    );
}

export default ProfileArea;
