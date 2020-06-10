import React from 'react';
import css from './ChooseUser.modeule.css'
import {NavLink} from "react-router-dom";
import MessagesArea from '../messagesArea';

function ChooseUser(props) {
    let path = '/messages/' + props.dialogId;

    return (
        <div className={css.item}>
            <li>
                <NavLink to={path} className={css.item} activeClassName={css.active}> {props.userName}</NavLink>
            </li>

        </div>
    );
}

export default ChooseUser;
