import React from 'react';
import css from "./ProfileAvatar.module.css"
import Avatar from '@material-ui/core/Avatar';


function ProfileAvatar() {
    return (
        <div>
            <Avatar src="https://arrowartwork.in/wp-content/uploads/2019/10/avatar-15.png" className={css.avatarLarge} />
        </div>
    );
}

export default ProfileAvatar
