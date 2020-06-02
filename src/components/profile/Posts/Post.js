import React from 'react';
import css from './Posts.module.css';

function Post() {
    return (
        <div className={css.post}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
                height={40} width={40}/> lorem ipsum
        </div>
    );
}

export default Post;