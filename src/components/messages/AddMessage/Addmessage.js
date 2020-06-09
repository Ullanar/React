import React from 'react';
import css from './Addmessage.module.css'
import store, {addMessageActionCreator, displayNewMessageActionCreator} from "../../../redux/store";

function AddMessage(props) {

    function newMessage() {
        props.dispatch(addMessageActionCreator());
        newMessageElement.current.value = '';

    }

    function onMessageChange() {
        let newTextDisplay = newMessageElement.current.value;
        store.dispatch(displayNewMessageActionCreator(newTextDisplay));
    }

    let newMessageElement = React.createRef();
    return (
        <div className={css.textarea}>
            <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newDialogMessageDisplay}/>
            <button onClick={newMessage}>Add message</button>
        </div>
    );
}

export default AddMessage;