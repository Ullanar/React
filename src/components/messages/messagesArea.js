import React from 'react';
import css from './messagesArea.module.css'
import AddMessageContainer from "./AddMessage/addMessageContainer";

function MessagesArea(props) {

    return (
        <div className={css.container}>
            <div className={css.dialogs}>
                <ul>
                    {/*Вывод списка диалогов*/}
                    {props.userData}

                </ul>
            </div>

            <div className={css.messages}>

                {/*Вывод собщений в диалоге*/}
                {props.messagesData}

            <AddMessageContainer state = {props.state}
                        dispatch={props.messagesData}/>
            </div>

        </div>
    );
}

export default MessagesArea;
