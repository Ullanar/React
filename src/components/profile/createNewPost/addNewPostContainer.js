import React from 'react';
import AddNewPost from "./addNewPost";
import {connect} from "react-redux";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";

function mapStateToProps(state) {
    return {
        textInTextarea: state.profilePage.newPostMessageDisplay
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createNewPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostView: (newTextDisplay) => {
            dispatch(updateNewPostTextAC(newTextDisplay))
        }
    }
}

let AddNewPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewPost);

export default AddNewPostContainer;
