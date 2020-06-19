let defaultState = {

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
};

function messagesReducer(state = defaultState, action) {

    switch (action.type) {

        // Отправляет новое сообщение
        case 'ADD-MESSAGE' : {

            let newMessage = {
                messageText: state.newDialogMessageDisplay,
                messageId: '10',
            };
            if (newMessage.messageText === '') {
                alert('Вы не ввели текст нового сообщения.')
            } else {
                let stateCopy = {
                    ...state,
                    dialogs: [...state.dialogs],
                    messagesContent: [...state.messagesContent, newMessage],
                    newDialogMessageDisplay: '',
                };

                return stateCopy;
            }

            break;
        }

        // Отвечает за отображение текста во время набора в AddNewPost messages
        case 'UPDATE-NEW-MESSAGE-TEXT' : {
            debugger;
            let stateCopy = {
                ...state,
                newDialogMessageDisplay: action.newTextDisplay,
            };

            return stateCopy;
        }

        default:
            return state;
    }

    return state;
}

export default messagesReducer;
