import React from 'react';
import css from './messagesAreaDisplay.module.css'
import Message from "./Message/Message";
import ChooseUser from "./ChooseUser/ChooseUser";
import AddMessage from "./AddMessage/Addmessage";



function MessagesAreaDisplay(props) {

    let userData = props.dialogsPageData.dialogs
        .map((dialog) => <ChooseUser userName={dialog.userName} dialogId={dialog.dialogId}/>);
    let messagesData = props.dialogsPageData.messagesContent
        .map((message) => <Message messageText={message.messageText}/>);

    return (
        <div className={css.container}>
            <div className={css.dialogs}>
                <ul>
                    {userData}
                    {/*    Тут мы зафигачили массив userDate в разметку JSX*/}
                </ul>
            </div>

            <div className={css.messages}>
                {messagesData}
                {/*Тут мы зафигачили массив messagesDate в разметку JSX*/}
            <AddMessage message = {props.dialogsPageData}
                        dispatch={props.dispatch}/>
            </div>

        </div>
    );
}

export default MessagesAreaDisplay;
