import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import {combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage : messagesReducer,
    usersPage: usersReducer,
})
let store = createStore(reducers);

export default store;
