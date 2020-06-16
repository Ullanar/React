let defaultState = {
    users: [],
};

function usersReducer(state = defaultState, action) {

    switch (action.type) {

        // Подписаться на пользователя
        case 'FOLLOW' : {
            return {
                ...state,
                    users: state.users.map((user) => {
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
                users: state.users.map((user) => {
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
