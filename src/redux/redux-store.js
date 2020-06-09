import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import {combineReducers, createStore} from "redux";


let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage : messagesReducer,
})
let store = createStore(reducers);

export default store;