import React from "react";
import css from './usersPage.module.css'
import * as axios from "axios";
import noUserPhoto from '../../Assets/noUserPhoto.png'

class userPage extends React.Component{

    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)

            });
    }

    render() {
        return(
        this.props.users.map(user => <div key={user.id} className={css.wrapper}>
      <span>
          <div>{user.name}</div>
          <div>
          <img className={css.img} src={user.photos.small !== null ? user.photos.small : noUserPhoto}/>
          </div>
          <div>
              {user.followed ? <button onClick={() => this.props.unfollow(user.id)}>Unsubscribe</button>
                  : <button onClick={() => this.props.follow(user.id)}> Subscribe </button>}

          </div>
      </span>
            <span>
          <span>

              <div>{'Status: ' + user.status}</div>
          </span>

      </span>

        </div>
        ));
    }
}

export default userPage;
