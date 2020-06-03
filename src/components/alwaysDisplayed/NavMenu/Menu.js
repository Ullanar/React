import React from 'react';
import css from './Menu.module.css'
import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <aside className={css.menu}>
            <ul>
                <div className={css.contents}> Menu</div>
                <div className={css.item}>
                    <li><NavLink to='/profile' activeClassName={css.active}>My profile</NavLink></li>
                    <li><NavLink to='/messages' activeClassName={css.active}>Messages</NavLink></li>
                    <li><NavLink to='/faq' activeClassName={css.active}>FAQ</NavLink></li>
                    <li><NavLink to='/news' activeClassName={css.active}>News</NavLink></li>
                </div>
            </ul>
        </aside>
    );
}

export default Menu;