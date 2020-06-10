import React from 'react';
import AddNewPost from "./addNewPost";

function AddNewPostContainer(props) {

    function newPost() {
        props.dispatch({type : 'ADD-POST'});
    }

    function onPostChange(newTextDisplay) {
        props.dispatch({type : 'UPDATE-NEW-POST-TEXT', newTextDisplay : newTextDisplay});
    }

    return (
        <AddNewPost updateNewPostView = {onPostChange}
                    createNewPost = {newPost}
                    textInTextarea = {props.state.profilePage.newPostMessageDisplay}/>
    );
}

export default AddNewPostContainer;
