import React from "react";
import css from './usersPage.module.css'
import * as axios from "axios";
import noUserPhoto from '../../Assets/noUserPhoto.png'
import loading from '../../Assets/loading.gif'
import {NavLink} from "react-router-dom";

class userPage extends React.Component {

    componentDidMount() {
        this.props.toggleLoading(true);
        const url = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;

        axios.get(url)
            .then(response => {
                this.props.toggleLoading(false);
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount);
            });
    }

    onPageChanged(p) {
        this.props.changeCurrentPage(p);
        this.props.toggleLoading(true);
        const url = `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`;
        axios.get(url)
            .then(response => {
                debugger;
                this.props.toggleLoading(false);
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

        return <div className={css.main}>

            {/*Вывод страниц пользователей*/}
            <div>
                {pages.map((p) => <button className={this.props.currentPage === p && css.activePage}
                                          onClick={() => this.onPageChanged(p)}>{p}</button>)}
            </div>


            <img className={css.loader} src={this.props.isLoading == true && loading}></img>

            {
                this.props.users.map(user =>
                    <div key={user.id} className={css.wrapper}>

                        <div>{user.name}</div>

                        {/*Фото пользователя*/}
                        <div>
                            <NavLink to={"/profile/" + user.id}>
                                <img className={css.img}
                                     src={user.photos.small !== null ? user.photos.small : noUserPhoto}/>
                            </NavLink>
                        </div>

                        {/*Кнопка подписаться/отписаться*/}
                        <div>
                            {user.followed ? <button onClick={() => this.props.unfollow(user.id)}>Unsubscribe</button>
                                : <button onClick={() => this.props.follow(user.id)}> Subscribe </button>}
                        </div>

                        {'Status: ' + user.status}

                    </div>
                )}

            {/*Вывод страниц пользователей*/}
            <div>
                {pages.map((p) => <button className={this.props.currentPage === p && css.activePage}
                                          onClick={() => this.props.changeCurrentPage(p)}>{p}</button>)}
            </div>

        </div>

    }
}

export default userPage;
