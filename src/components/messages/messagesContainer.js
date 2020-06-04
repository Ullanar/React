import React from 'react';
import css from './messagesContainer.module.css'
import Message from "./Message/Message";
import ChooseUser from "./ChooseUser/ChooseUser";


function MessagesContainer() {
    let usersDataTemplates = [
        { userName : 'Miku', dialogId : '1', },
        { userName : 'Vaffe', dialogId : '2', },
        { userName : 'Aurelian', dialogId : '3', },
        { userName : 'Attache', dialogId : '4', },
        { userName : 'Alex', dialogId : '5', }
        ];

    let messagesDataTemplates = [
        { messageText : 'Hi', messageId : '1', },
        { messageText : 'glhf', messageId : '2', },
        { messageText : 'gg wp', messageId : '3', },
        { messageText : 'Mhhhh... nice team', messageId : '4', },
        { messageText : 'BACKDOOOOR!!!', messageId : '5', }
    ];


    let userDate = usersDataTemplates
        .map( (dialog) => <ChooseUser userName= {dialog.userName} dialogId={dialog.dialogId}/> );


    let messagesData = messagesDataTemplates
        .map( (message) => <Message messageText = {message.messageText}/>);

    return (
        <div className={css.container}>
            <div className={css.dialogs}>
                <ul>
                    {userDate}
                {/*    Тут мы зафигачили массив userDate в разметку JSX*/}
                </ul>
            </div>

            <div className={css.messages}>
                {messagesData}
                {/*    Тут мы зафигачили массив messagesDate в разметку JSX*/}
            </div>
        </div>
    );
}

export default MessagesContainer;