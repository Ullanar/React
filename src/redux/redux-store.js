import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import {combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";


let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage : messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
let store = createStore(reducers);

export default store;
