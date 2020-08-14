import React from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {
    function fuck() {
        alert('Иди нахуй')
    }

    return (
        <header className={css.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'
                 width={65} height={45}/>
            {props.isAuth ? props.login : <button ><NavLink to = {'/login'}>Sign In</NavLink></button>}

            <button onClick={fuck} >Sign Up</button>
            <div>

            </div>

        </header>
    );
}

export default Header;