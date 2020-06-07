import React from 'react';
import css from './Textarea.module.css'
import {updatePostChange} from "../../../redux/state";

function Textarea(props) {

    let newPostElement = React.createRef();

    function newPost() {
        props.addPost();
    }

    function onPostChange(props) {
        let changesInPost = newPostElement.current.value;
        // Случилась досадная бага - функция ниже никак не прокидывалась через props
        // Пришлось для проверки самой работоспособности её импортировать напрямую из state
        // Нужно пофиксить, как будет свободное время
        updatePostChange(changesInPost);
    }

    return (
        <div className={css.textarea}>
            <textarea onChange={onPostChange} ref={newPostElement}
                      value={props.newPostMessage}/>
            <button onClick={newPost}>Add post

            </button>

        </div>
    );
}

export default Textarea;
