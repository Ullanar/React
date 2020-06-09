import React from 'react';
import css from './Textarea.module.css'

function Textarea(props) {

    let newPostElement = React.createRef();

    function newPost() {
        props.dispatch({type : 'ADD-POST'});
    }

    function onPostChange() {
        let newTextDisplay = newPostElement.current.value;
        props.dispatch({type : 'UPDATE-NEW-POST-TEXT', newTextDisplay : newTextDisplay});
    }

    return (
        <div className={css.textarea}>
            <textarea onChange={onPostChange} ref={newPostElement}
                      value={props.newPostMessage}/>
            <button className={css.btn} onClick={newPost}>Add post</button>
        </div>
    );
}

export default Textarea;
