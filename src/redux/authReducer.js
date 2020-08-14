const SET_USER_DATA = 'SET-USER-DATA'

let defaultState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

function authReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }

}


export const setAuthUserDataAC = (id, email, login) =>
    ({type: SET_USER_DATA, data: {id : id, email : email, login: login}})

export default authReducer;