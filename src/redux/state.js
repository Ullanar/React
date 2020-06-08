function callSubscriber() {
    console.log('');
}

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
    getState() {
        return this._state;
    },
    subscribe(observer) {
        callSubscriber = observer;
    },


    dispatch(action) {
     if (action.type === 'ADD-POST'){
         let newPost = {
             post: this._state.profilePage.newPostMessageDisplay,
             postId: 10,
         };
         if (newPost.post === '') {
             alert('Вы не ввели текст нового поста.')
         } else {
             this._state.profilePage.postsContent.push(newPost);
             this._state.profilePage.newPostMessageDisplay = '';
             callSubscriber(this._state)
         }
     }
     else if (action.type === 'UPDATE-NEW-POST-TEXT'){
         this._state.profilePage.newPostMessageDisplay = action.newTextDisplay;
         callSubscriber(this._state)
     }
     else {
         console.log('АЛЛО, КАКОЙ ТИП ДЕЙСТВИЯ ТАМ ПЕРЕДАЛИ? ХЗ ЧТО ЭТО')
     }
    },
}


window.state = store;

export default store;

