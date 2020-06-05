import React from 'react';
import css from './messagesContainer.module.css'
import Message from "./Message/Message";
import ChooseUser from "./ChooseUser/ChooseUser";


function MessagesContainer(props) {

    let userDate = props.dialogsPageDate.dialogs
        .map((dialog) => <ChooseUser userName={dialog.userName} dialogId={dialog.dialogId}/>);
    let messagesDate = props.dialogsPageDate.messagesContent
        .map((message) => <Message messageText={message.messageText}/>);

    return (
        <div className={css.container}>
            <div className={css.dialogs}>
                <ul>
                    {userDate}
                    {/*    Тут мы зафигачили массив userDate в разметку JSX*/}
                </ul>
            </div>

            <div className={css.messages}>
                {messagesDate}
                {/*Тут мы зафигачили массив messagesDate в разметку JSX*/}
            </div>
        </div>
    );
}

export default MessagesContainer;
