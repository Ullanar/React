import React from 'react';
import css from './Menu.module.css'
import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <aside className={css.menu}>
            <ul>
                Menu
                <li><NavLink to='/profile'>My profile</NavLink></li>
                <li><NavLink to='/messages'>Messages</NavLink></li>
                <li><NavLink to='/faq'>FAQ</NavLink></li>
                <li><NavLink to='/news'>News</NavLink></li>
            </ul>
        </aside>
    );
}

export default Menu;