import React from 'react';
import css from './Header.module.css'

function Header() {
    return (
        <header className={css.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'
                 width={110} height={80}/>
            Header
        </header>
    );
}

export default Header;