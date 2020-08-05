import React from 'react';
import css from './Header.module.css'

function Header() {
    function fuck() {
        alert('Иди нахуй')
    }

    return (
        <header className={css.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'
                 width={65} height={45}/>
            <h7>React Social Network</h7>
            <button className={css.btnSignIn} onClick={fuck}>Sign In</button>
            <button onClick={fuck} className={css.btnSignUp}>Sign Up</button>

        </header>
    );
}

export default Header;