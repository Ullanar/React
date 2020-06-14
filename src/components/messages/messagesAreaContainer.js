import React from 'react';
import Message from "./Message/Message";
import ChooseUser from "./ChooseUser/ChooseUser";
import MessagesArea from "./messagesArea";
import {connect} from "react-redux";



function mapStateToProps(state){
    return {
        userData : state.messagesPage.dialogs
            .map((dialog) => <ChooseUser userName={dialog.userName} dialogId={dialog.dialogId}/>),
        // Массив списка диалогов
        messagesData: state.messagesPage.messagesContent
            .map((message) => <Message messageText={message.messageText}/>)
        // Список сообщений в диалоге
    }
}

let MessagesAreaContainer = connect(mapStateToProps)(MessagesArea);

export default MessagesAreaContainer;
