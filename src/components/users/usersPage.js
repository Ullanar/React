import React from "react";
import css from './usersPage.module.css'
import * as axios from "axios";
import noUserPhoto from '../../Assets/noUserPhoto.png'

function UsersPage(props) {


    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)

            });
    }

    return (
        props.users.map(user => <div key={user.id} className={css.wrapper}>
      <span>
          <div>{user.name}</div>
          <div>
          <img className={css.img} src={user.photos.small !== null ? user.photos.small : noUserPhoto}/>
          </div>
          <div>
              {user.followed ? <button onClick={() => props.unfollow(user.id)}>Unsubscribe</button>
                  : <button onClick={() => props.follow(user.id)}> Subscribe </button>}

          </div>
      </span>
            <span>
          <span>

              <div>{'Status: ' + user.status}</div>
          </span>
          <span>
              {/*API не дает данных*/}
              {/*<div>{'Country: ' + user.country}</div>*/}
              {/*<div>{'City: ' + user.city}</div>*/}
          </span>

      </span>

        </div>)
    );
}

export default UsersPage;
