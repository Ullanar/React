import React from 'react';
import css from './messagesArea.module.css'
import AddMessageContainer from "./AddMessage/addMessageContainer";

function MessagesArea(props) {

    return (
        <div className={css.container}>
            <div className={css.dialogs}>
                <ul>
                    {/*Вывод списка диалогов*/}
                    {props.dialogs}

                </ul>
            </div>

            <div className={css.messages}>

                {/*Вывод собщений в диалоге*/}
                {props.messages}

            <AddMessageContainer state = {props.state}
                        dispatch={props.dispatch}/>
            </div>

        </div>
    );
}

export default MessagesArea;
