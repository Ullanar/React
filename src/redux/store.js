
// Этот файл более не используется в проекте.
// Оставили его только, чтобы посмотреть в случае чего в старый State
// Теперь юзаем нормальный Redux


import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

let store = {
    _state: {
        messagesPage: {
            dialogs: [
                {userName: 'Miku', dialogId: '1',},
                {userName: 'Vaffe', dialogId: '2',},
                {userName: 'Aurelian', dialogId: '3',},
                {userName: 'Attache', dialogId: '4',},
                {userName: 'Alex', dialogId: '5',}
            ],
            messagesContent: [
                {messageText: 'Hi', messageId: '1',},
                {messageText: 'glhf', messageId: '2',},
                {messageText: 'gg wp', messageId: '3',},
                {messageText: 'Mhhhh... nice team', messageId: '4',},
                {messageText: 'BACKDOOOOR!!!', messageId: '5',}
            ],
            newDialogMessageDisplay: '',
        },
        profilePage: {
            postsContent: [
                {post: 'Hi, i am Post!', postId: '1',},
                {post: 'I`m sit in Redux.', postId: '2',},
                {post: 'You can add new posts!', postId: '3',},
            ],
            newPostMessageDisplay: '',
        }
    },
    _callSubscriber() {
        console.log('callSubscriber -----OK');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._callSubscriber(this._state);

    },

}

export function addPostActionCreator () {
    return {
        type : 'ADD-POST',
    }
}

export function displayNewPostActionCreator (newTextDisplay) {
    return {
        type : 'UPDATE-NEW-POST-TEXT',
        newTextDisplay : newTextDisplay

    }
}

export function addMessageActionCreator () {
    return {
        type : 'ADD-MESSAGE'
    }
}

export function displayNewMessageActionCreator (newTextDisplay) {
    return{
        type : 'UPDATE-NEW-MESSAGE-TEXT',
        newTextDisplay : newTextDisplay,
    }
}


window.state = store;

export default store;

