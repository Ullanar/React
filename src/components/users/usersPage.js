import React from "react";
import css from './usersPage.module.css'


function UsersPage(props) {

    if (props.users.length === 0) {

        props.setUsers([
            {
                id: '1',
                userName: 'Miku',
                status: 'Whahahah',
                photoUrl: 'https://sun9-71.userapi.com/c857636/v857636740/1f1850/36kyC-EZ40Y.jpg',
                country: 'Rishi',
                city: 'GRA Base',
                followed: false,

            },
            {
                id: '2',
                userName: 'Miku',
                status: 'Whahahah',
                photoUrl: 'https://sun9-71.userapi.com/c857636/v857636740/1f1850/36kyC-EZ40Y.jpg',
                country: 'Rishi',
                city: 'GRA Base',
                followed: false,

            },
            {
                id: '3',
                userName: 'Miku',
                status: 'Whahahah',
                photoUrl: 'https://sun9-71.userapi.com/c857636/v857636740/1f1850/36kyC-EZ40Y.jpg',
                country: 'Rishi',
                city: 'GRA Base',
                followed: false,

            },
        ])
    }
    return (
        props.users.map(user => <div key={user.id} className={css.wrapper}>
      <span>
          <div>{user.userName}</div>
          <div>
          <img className={css.img} src={user.photoUrl}/>
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
              <div>{'Country: ' + user.country}</div>
              <div>{'City: ' + user.city}</div>
          </span>

      </span>

        </div>)
    );
}

export default UsersPage;
