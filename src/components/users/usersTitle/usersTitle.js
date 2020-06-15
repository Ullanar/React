import React from "react";
import css from './usersTitle.module.css';

function UsersTitle(props) {
    return (
        <div className={css.wrapper}>
        <div>

            <div><span>{props.userName}</span></div>
        <img className={css.profilePhoto} src={props.photoUrl} />
            <div><span>{props.status}</span></div>
            <div><span>{props.country}</span></div>
            <div><span>{props.city}</span></div>

        </div>
        <button>Subscribe</button>
        </div>
    );
}

export default UsersTitle;
