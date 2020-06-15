let defaultState = {
    users: [
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
    ],
};

function usersReducer(state = defaultState, action) {

    switch (action.type) {

        // Подписаться на пользователя
        case 'FOLLOW' : {
            return {
                ...state,
                    users: state.users.map(user => {
                        if (user.id === action.userId){
                            return {...user, followed: true};
                        }
                        return user;
                    })
                };
            break;
        }

        // Отписаться от пользователя
        case 'UNFOLLOW' : {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId){
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
            break;
        }

        // Загружает в State список пользователей
        case 'SET_USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;
    }

    return state;
}

export default usersReducer;
