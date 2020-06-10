import React from 'react';
import AddMessage from "./addMessage";

function AddMessageContainer(props) {

    function newMessage() {
        props.dispatch({type : 'ADD-MESSAGE'});
    }

    function onMessageChange(newTextDisplay) {
        props.dispatch( {type : 'UPDATE-NEW-MESSAGE-TEXT', newTextDisplay : newTextDisplay});
    }

    return (
        <AddMessage sendNewMessage = {newMessage} displayNewMessageValue = {onMessageChange} actualMessageValue = {props.state.messagesPage.newDialogMessageDisplay}/>
    );
}

export default AddMessageContainer;
