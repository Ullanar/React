const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_PAGE = 'CHANGE_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let defaultState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 30,
    currentPage: 1,
    isLoading: false,
};

function usersReducer(state = defaultState, action) {

    switch (action.type) {

        // Включает и выключает отображение колеса загрузки пользователейы
        case TOGGLE_IS_LOADING : {
            return {...state, isLoading: action.loadingValue}
        }

        // Подписаться на пользователя
        case FOLLOW : {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
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
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
            break;
        }

        // Загружает в State список пользователей
        case SET_USERS: {
            return {...state, users: action.users}
        }

        // Меняет активную стараницу вывода пользователей
        case CHANGE_PAGE:
            return {...state, currentPage: action.currentPage}

        // Сетает с сервера количество пользователей
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}

        default:
            return state;
    }

    return state;
}

export function followAC(userId) {
    return {
        type: FOLLOW,
        userId: userId,
    }
}

export function unfollowAC(userId) {
    return {
        type: UNFOLLOW,
        userId: userId,
    }

}

export function setUsersAC(users) {
    return {
        type: SET_USERS,
        users: users,
    }
}

export function changePageAC(currentPage) {
    return {
        type: CHANGE_PAGE,
        currentPage: currentPage,
    }
}

export function setUsersCountAC(totalUsersCount) {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount,
    }
}

export function toggleLoadingAC(necessaryLoadingValue) {
    return {
        type: TOGGLE_IS_LOADING,
        loadingValue: necessaryLoadingValue,
    }
}

export default usersReducer;
