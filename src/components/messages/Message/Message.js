import React from 'react';
import css from './Message.module.css'

function Message(props) {
    return (
        <div className={css.item}>
            <div>{props.messageText}</div>
        </div>
    );
}

export default Message;