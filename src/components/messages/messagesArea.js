import React from 'react';
import css from './messagesArea.module.css'

function MessagesArea(props) {

    return (
        <div className={css.container}>
            <div className={css.dialogs}>
                <ul>
                    {props.dialogs}
                    {/*    Тут мы зафигачили массив userDate в разметку JSX*/}
                </ul>
            </div>

            <div className={css.messages}>
                {props.messages}
                {/*Тут мы зафигачили массив messagesDate в разметку JSX*/}
            {/*<AddMessage message = {props.dialogsPageData}*/}
            {/*            dispatch={props.dispatch}/>*/}
            </div>

        </div>
    );
}

export default MessagesArea;
