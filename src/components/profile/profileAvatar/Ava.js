import React from 'react';
import css from "./Ava.module.css"


function Avatar(props) {

    if (!props){
        return <h1>ЗАГРУЗКА БЛЯТЬ</h1>
    }

    return (
        <div className={css.avatar}>

            <img src={props.userData.photos.large !== null ? props.userData.photos.large : "https://arrowartwork.in/wp-content/uploads/2019/10/avatar-15.png"}/>
        </div>
    );
}

export default Avatar