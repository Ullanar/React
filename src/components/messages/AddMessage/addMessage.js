import React from 'react';
import css from './addMessage.module.css'

function AddMessage(props) {


    function onMessageChange() {
        let newTextDisplay = newMessageElement.current.value;
        props.displayNewMessageValue(newTextDisplay);
    }

    let newMessageElement = React.createRef();
    return (
        <div className={css.textarea}>
            <textarea ref={newMessageElement} onChange={onMessageChange} value={props.actualMessageValue}/>
            <button onClick={props.sendNewMessage}>Add message</button>
        </div>
    );
}

export default AddMessage;
