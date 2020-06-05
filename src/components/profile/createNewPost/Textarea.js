import React from 'react';
import css from './Textarea.module.css'

function Textarea() {


    return (
        <div className={css.textarea}>
            <textarea>Create new post!</textarea>
            <button onClick={() => {alert('test')}}>Submit</button>
        </div>
    );
}

export default Textarea;
