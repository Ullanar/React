import React from 'react';
import css from './profileContainer.module.css';
import Avatar from "./profileAvatar/Ava";
import Description from "./profileDescription/Description";
import CreateNewPost from './createNewPost/Textarea'
import Post from "./Posts/Post";


function ProfileContainer(props) {

    let posts = props.profilePageData.postsContent
        .map((post) => <Post postText={post.post}/>)


    return (
        <div className={css.content}>
            <img className={css.image}
                 src='https://www.onlygfx.com/wp-content/uploads/2017/12/origami-banner-rectangle-2-1024x295.png'/>
            <Avatar/>
            <Description name='Vasily' age='27' city='Tokyo' education='Harvard'/>
            <br/>
            <CreateNewPost addPost={props.addPost}
                           newPostMessage={props.profilePageData.newPostMessageDisplay}
                           updatePostChange={props.updatePostChange}/>
            <br/>
            {posts}


        </div>
    );
}

export default ProfileContainer;
