import React from 'react';
import css from './Content.module.css'
import ProfileContainer from './../../profile/profileConteiner'


function Content() {
    return (
        <div className={css.content}>
            <ProfileContainer />
        </div>
    );
}


export default Content;