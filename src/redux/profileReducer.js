const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_FROM_RESPONSE = 'SET-USER-FROM-RESPONSE'


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
    userRes: null,
};

function profileReducer(state = defaultState, action) {

    switch (action.type) {

        // Добавление поста на стену
        case ADD_POST: {

            let newPost = {
                post: state.newPostMessageDisplay,
                postId: '10',
            };
            if (state.newPostMessageDisplay === '') {
                alert('Вы не ввели текст поста')
            } else {
                let stateCopy = {
                    ...state,
                    postsContent: [...state.postsContent, newPost],
                    newPostMessageDisplay: ''
                };

                return stateCopy;

            }
        }

        // Посимвольное отображение текста поста во время набора в AddNewPost
        case UPDATE_NEW_POST_TEXT : {
            let stateCopy = {
                ...state,
                newPostMessageDisplay: action.newTextDisplay
            };

            return stateCopy;
        }

        case SET_USER_FROM_RESPONSE:{
            return {...state, userRes: action.userPageFromResponse}
        }

        default:
            return state;
    }

    return state;
}

export default profileReducer;


export function addPostAC (){
    return{
        type: ADD_POST,
    }
}

export function updateNewPostTextAC(newTextDisplay){
    return{
     type: UPDATE_NEW_POST_TEXT,
     newTextDisplay: newTextDisplay
    }
}

export function setUserFromResponseAC(userPage){
    return{
        type: SET_USER_FROM_RESPONSE,
        userPageFromResponse: userPage
    }
}