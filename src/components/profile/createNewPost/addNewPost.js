import React from 'react';
import css from './addNewPost.module.css'

function AddNewPost(props) {

    let newPostElement = React.createRef();

    function onPostChange() {
        let newTextDisplay = newPostElement.current.value;
        props.updateNewPostView(newTextDisplay);
    }

    return (
        <div className={css.textarea}>
            <textarea onChange={onPostChange} ref={newPostElement}
                      value={props.textInTextarea}/>
            <button className={css.btn} onClick={props.createNewPost}>Add post</button>
        </div>
    );
}

export default AddNewPost;
