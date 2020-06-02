import React from 'react';
import css from './Menu.module.css'

function Menu() {
    return (
        <aside className={css.menu}>
            <ul>
                Menu
                <li><a href='#s'>My profile</a></li>
                <li><a href='#s'>Messages</a></li>
                <li><a href='#s'>News</a></li>
                <li><a href='#s'>Donate</a></li>
            </ul>
        </aside>
    );
}

export default Menu;