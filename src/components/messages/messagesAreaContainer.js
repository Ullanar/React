import React from 'react';
import Message from "./Message/Message";
import ChooseUser from "./ChooseUser/ChooseUser";
import MessagesArea from "./messagesArea";



function MessagesAreaContainer(props) {

    let userData = props.state.messagesPage.dialogs
        .map((dialog) => <ChooseUser userName={dialog.userName} dialogId={dialog.dialogId}/>);
    let messagesData = props.state.messagesPage.messagesContent
        .map((message) => <Message messageText={message.messageText}/>);

    return (
        <MessagesArea dialogs = {userData} messages = {messagesData}
                      state = {props.state} dispatch = {props.dispatch}/>
    );
}

export default MessagesAreaContainer;
