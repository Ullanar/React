import React from 'react';
import css from "./Ava.module.css"


function Avatar() {
    return (
        <div className={css.avatar}>
            <img src="https://arrowartwork.in/wp-content/uploads/2019/10/avatar-15.png" width={80} height={80}/>
        </div>
    );
}

export default Avatar