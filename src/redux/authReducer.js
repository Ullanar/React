const SET_USER_DATA = 'SET-USER-DATA'

let defaultState = {
    id: null,
    email: null,
    login: null
}

function authReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }

}


export const setUserData = (id, email, login) =>
    ({type: SET_USER_DATA, data: {id : id, email : email, login: login}})

export default authReducer;