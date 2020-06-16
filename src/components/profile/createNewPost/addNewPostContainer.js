import React from 'react';
import AddNewPost from "./addNewPost";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        textInTextarea: state.profilePage.newPostMessageDisplay
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createNewPost: () => {
            dispatch({type: 'ADD-POST'})
        },
        updateNewPostView: (newTextDisplay) => {
            dispatch({type: 'UPDATE-NEW-POST-TEXT', newTextDisplay: newTextDisplay})
        }
    }
}

let AddNewPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewPost);

export default AddNewPostContainer;
