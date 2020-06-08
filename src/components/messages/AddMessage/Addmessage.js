import React from 'react';
import css from './Addmessage.module.css'
import store from "../../../redux/state";

function AddMessage(props) {

    function newMessage () {
        props.dispatch({type : 'ADD-MESSAGE'});
        newMessageElement.current.value = '';

    }
    function onMessageChange () {
        let newTextDisplay = newMessageElement.current.value;
        store.dispatch({type : 'UPDATE-NEW-MESSAGE-TEXT', newTextDisplay: newTextDisplay});
    }

    let newMessageElement = React.createRef();
    return (
        <div className={css.textarea}>
            <textarea ref = {newMessageElement} onChange={onMessageChange} value={props.newDialogMessageDisplay}/>
            <button onClick={newMessage}>Add message</button>
        </div>
    );
}

export default AddMessage;