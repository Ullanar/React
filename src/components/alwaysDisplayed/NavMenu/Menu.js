import React from 'react';
import css from './Menu.module.css'
import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <aside className={css.menu}>
            <ul>
                <div className={css.contents}> Menu</div>
                <li><NavLink to='/profile' className={css.item} activeClassName={css.active}>My profile</NavLink></li>
                <li><NavLink to='/messages' className={css.item} activeClassName={css.active}>Messages</NavLink></li>
                <li><NavLink to='/users' className={css.item} activeClassName={css.active}>Users</NavLink></li>
                <li><NavLink to='/faq' className={css.item} activeClassName={css.active}>FAQ</NavLink></li>
                <li><NavLink to='/news' className={css.item} activeClassName={css.active}>News</NavLink></li>
            </ul>
        </aside>
    );
}

export default Menu;
