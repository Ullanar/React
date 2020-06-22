const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_PAGE = 'CHANGE_PAGE';

let defaultState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 30,
    currentPage: 1,
};

function usersReducer(state = defaultState, action) {

    switch (action.type) {

        // Подписаться на пользователя
        case FOLLOW : {
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
        case UNFOLLOW : {
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
        case SET_USERS: {
            return {...state, users:action.users}
        }

        // Меняет активную стараницу вывода пользователей
        case CHANGE_PAGE:
            return {...state, currentPage: action.currentPage}

        default:
            return state;
    }

    return state;
}

export function followAC() {

}
export function unfollowAC() {

}
export function setUsersAC() {

}
export function changePageAC(currentPage) {
return {
    type: CHANGE_PAGE,
    currentPage: currentPage,
}
}

export default usersReducer;
