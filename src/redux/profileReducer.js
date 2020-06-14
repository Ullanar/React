let defaultState = {
    postsContent: [
        {post: 'Hi, i am Post!', postId: '1',},
        {post: 'I`m sit in Redux.', postId: '2',},
        {post: 'You can add new posts!', postId: '3',},
    ],
    userDescription: {
        name: 'Vasily',
        age: '27',
        city: 'Tokyo',
        education: 'Harvard',
    },
    newPostMessageDisplay: '',
};

function profileReducer(state = defaultState, action) {

    switch (action.type) {

        // Добавление поста на стену
        case 'ADD-POST': {

            let newPost = {
                post: state.newPostMessageDisplay,
                postId: '10',
            };
            if (state.newPostMessageDisplay === ''){
                alert('Вы не ввели текст поста')
            }
            else {
            let stateCopy = {
                ...state,
                postsContent: [...state.postsContent, newPost],
                newPostMessageDisplay: ''
            };

            return stateCopy;
            }
        }

        // Посимвольное отображение текста поста во время набора в AddNewPost
        case 'UPDATE-NEW-POST-TEXT' : {
            let stateCopy = {
                ...state,
                newPostMessageDisplay: action.newTextDisplay
            };

            return stateCopy;
        }

        default:
            return state;
    }

    return state;
}

export default profileReducer;
