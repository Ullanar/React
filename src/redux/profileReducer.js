function profileReducer(state, action) {

    switch (action.type) {

        // Добавление поста на стену
        case 'ADD-POST': {

            let newPost = {
                post: state.newPostMessageDisplay,
                postId: 10,
            };
            if (newPost.post === '') {
                alert('Вы не ввели текст нового поста.')
            } else {
                state.postsContent.push(newPost);
                state.newPostMessageDisplay = '';
            }
            break;
        }

        // Посимвольное отображение текста поста во время набора в Textarea
        case 'UPDATE-NEW-POST-TEXT' : {
            state.newPostMessageDisplay = action.newTextDisplay;
            break;
        }

        default:
            console.log('АЛЛО, КАКОЙ ТИП ДЕЙСТВИЯ ТАМ ПЕРЕДАЛИ? ХЗ ЧТО ЭТО')
    }

    return state;
}

export default profileReducer;