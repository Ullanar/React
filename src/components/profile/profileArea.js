import React from 'react';
import css from './profileArea.module.css';
import Avatar from "./profileAvatar/Ava";
import Description from "./profileDescription/Description";
import CreateNewPost from './createNewPost/addNewPost'
import Post from "./Posts/Post";
import AddNewPostContainer from "./createNewPost/addNewPostContainer";


function ProfileArea(props) {

    if(!props.userData){
        return <h1>ЗАГРУЗКА СУКА</h1>
    }
    return (
        <div className={css.content}>

            <Avatar userData ={props.userData}/>
            <Description userDescription = {props.userDescription}/>
            <br/>
            <AddNewPostContainer/>
            <br/>
            {props.posts}
            {console.log(props)}
        </div>
    );
}

export default ProfileArea;

