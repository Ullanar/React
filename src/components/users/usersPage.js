import React from "react";
import css from './usersPage.module.css'
import * as axios from "axios";
import noUserPhoto from '../../Assets/noUserPhoto.png'

class userPage extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount);
            });
    }

    onPageChanged(p){
        this.props.changeCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {

            pages.push(i);

        }

        return <div>

            <div>
                {pages.map((p) => <button className={this.props.currentPage === p && css.activePage}
                onClick={() => this.onPageChanged(p)}>{p}</button>)}
            </div>

            {
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

                )}
            <div>
                {pages.map((p) => <button className={this.props.currentPage === p && css.activePage}
                                          onClick={() => this.props.changeCurrentPage(p)}>{p}</button>)}
            </div>
        </div>

    }
}

export default userPage;
