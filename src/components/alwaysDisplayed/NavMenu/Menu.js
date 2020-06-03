import React from 'react';
import css from './Menu.module.css'

function Menu() {
    return (
        <aside className={css.menu}>
            <ul>
                Menu
                <li><a href='/profile'>My profile</a></li>
                <li><a href='/messages'>Messages</a></li>
                <li><a href='/faq'>FAQ</a></li>
                <li><a href='/news'>News</a></li>
            </ul>
        </aside>
    );
}

export default Menu;