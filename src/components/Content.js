import React from 'react';
import css from './Content.modele.css'


function Content() {
    return(
        <div className={css.content}>
            <img className={css.image} src='https://www.onlygfx.com/wp-content/uploads/2017/12/origami-banner-rectangle-2-1024x295.png' width="100%" height="170px"/>

            <div>ava + description</div>
            <div>text area</div>
            <div>New posts</div>
            <div>Post 1</div>
            <div>Post 2</div>

        </div>
    );
}

export default Content;