import React from 'react';
import css from './messagesContainer.module.css'
import Message from "./Message/Message";
import ChooseUser from "./ChooseUser/ChooseUser";


function MessagesContainer() {
    return (
        <div className={css.container}>
            <div className={css.dialogs}>
                <ChooseUser/>
                <ChooseUser/>
                <ChooseUser/>
                <ChooseUser/>
                <ChooseUser/>
            </div>

            <div className={css.messages}>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
        </div>
    );
}

export default MessagesContainer;