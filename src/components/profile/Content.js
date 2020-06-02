import React from 'react';
import css from './Content.module.css'
import Avatar from "./profileAvatar/Ava";
import Description from "./profileDescription/Description";

function Content() {
    return(
        <div className={css.content}>
            <img className={css.image} src='https://www.onlygfx.com/wp-content/uploads/2017/12/origami-banner-rectangle-2-1024x295.png'/>
            <Avatar /> <Description />

            <div>text area</div>
            <div>New posts</div>
            <div>Post 1</div>
            <div>Post 2</div>

        </div>
    );
}



export default Content;