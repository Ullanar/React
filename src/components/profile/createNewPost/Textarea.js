import React from 'react';
import css from './Textarea.module.css'
import store, {addPostActionCreator, displayNewPostActionCreator} from "../../../redux/store";

function Textarea(props) {

    let newPostElement = React.createRef();

    function newPost() {
        props.dispatch(addPostActionCreator());
    }

    function onPostChange() {
        let newTextDisplay = newPostElement.current.value;
        store.dispatch(displayNewPostActionCreator(newTextDisplay));
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
