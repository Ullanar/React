import React from 'react';
import css from './Header.module.css'

function Header() {
    return(
        <header className={css.header}>
            <img src='./../public/logo192.png'/>
            Header
        </header>
    );
}

export default Header;