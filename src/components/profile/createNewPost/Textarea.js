import React from 'react';
import css from './Textarea.module.css'
import store from "../../../redux/state";

function Textarea(props) {

    let newPostElement = React.createRef();

    function newPost() {
        props.dispatch({type : 'ADD-POST'});
    }

    function onPostChange(props) {
        let newTextDisplay = newPostElement.current.value;
        // Случилась досадная бага - метод dispatch ниже никак не прокидывался через props
        // Пришлось для проверки самой работоспособности её импортировать напрямую из state
        // Нужно пофиксить, как будет свободное время
        store.dispatch({type : 'UPDATE-NEW-POST-TEXT', newTextDisplay: newTextDisplay});
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
