
let defaultState = ''

function messagesReducer(state, action) {

    switch (action.type) {

        // Добавляет новое сообщение
        case 'ADD-MESSAGE' : {

            let newMessage = {
                messageText: state.newDialogMessageDisplay,
                messageId: 10,
            };
            if (newMessage.messageText === '') {
                alert('Вы не ввели текст нового сообщения.')
            }
            else {
                state.messagesContent.push(newMessage);
                state.newDialogMessageDisplay = '';
            }
            break;
        }

        // Отвечает за отображение текста во время набора в Textarea messages
        case 'UPDATE-NEW-MESSAGE-TEXT' : {
            state.newDialogMessageDisplay = action.newTextDisplay;
            break;
        }

        default:
            console.log('АЛЛО, КАКОЙ ТИП ДЕЙСТВИЯ ТАМ ПЕРЕДАЛИ? ХЗ ЧТО ЭТО')
    }

    return state;
}

export default messagesReducer;