function renderEntireTree() {
    console.log('');
}

let state = {
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
            {post: 'I siting in Redux.', postId: '2',},
            {post: 'You can add new posts!', postId: '3',},
        ],
        newPostMessageDisplay: '',
    }
}
window.state = state;

export let addPost = () => {
    let newPost = {
        post: state.profilePage.newPostMessageDisplay,
        postId: 10,
    };
    if (newPost.post === '') {
        alert('Вы не ввели текст нового поста.')
    } else {
        state.profilePage.postsContent.push(newPost);
        state.profilePage.newPostMessageDisplay = '';
        renderEntireTree(state)
    }
}

export function updatePostChange(newTextDisplay) {
    state.profilePage.newPostMessageDisplay = newTextDisplay;
    renderEntireTree(state)
}

export function subscribe(observer) {
    renderEntireTree = observer;
}

export default state;
