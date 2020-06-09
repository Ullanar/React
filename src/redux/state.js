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

        switch (action.type) {

            case 'ADD-POST': { // Добавление поста на стену

                let newPost = {
                    post: this._state.profilePage.newPostMessageDisplay,
                    postId: 10,
                };
                if (newPost.post === '') {
                    alert('Вы не ввели текст нового поста.')
                } else {
                    this._state.profilePage.postsContent.push(newPost);
                    this._state.profilePage.newPostMessageDisplay = '';
                    this._callSubscriber(this._state)
                }
                break;
            }

            case 'UPDATE-NEW-POST-TEXT' : {  // Посимвольное отображение поста в Textarea и ререндер
                this._state.profilePage.newPostMessageDisplay = action.newTextDisplay;
                this._callSubscriber(this._state)
                break;
            }

            case 'ADD-MESSAGE' : { // Добавляет новое сообщение
                let newMessage = {
                    messageText: this._state.messagesPage.newDialogMessageDisplay,
                    messageId: 10,
                };
                if (newMessage.messageText === '') {
                    alert('Вы не ввели текст нового сообщения.')
                } else {
                    this._state.messagesPage.messagesContent.push(newMessage);
                    this._state.messagesPage.newDialogMessageDisplay = '';
                    this._callSubscriber(this._state)
                }
                break;
            }

            case 'UPDATE-NEW-MESSAGE-TEXT' : { // Отвечает за отображение мессаджа в Textarea messages
                this._state.messagesPage.newDialogMessageDisplay = action.newTextDisplay;
                this._callSubscriber(this._state)
                break;
            }

            default:
                console.log('АЛЛО, КАКОЙ ТИП ДЕЙСТВИЯ ТАМ ПЕРЕДАЛИ? ХЗ ЧТО ЭТО')
        }
    }

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

