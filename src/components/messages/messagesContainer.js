import React from 'react';
import css from './messagesContainer.module.css'
import Message from "./Message/Message";
import ChooseUser from "./ChooseUser/ChooseUser";


function MessagesContainer() {
    let usersData = [
        { userName : 'Miku', dialogId : '1', },
        { userName : 'Vaffe', dialogId : '2', },
        { userName : 'Aurelian', dialogId : '3', },
        { userName : 'Attache', dialogId : '4', },
        { userName : 'Alex', dialogId : '5', }
        ];

    let messagesData = [
        { messageText : 'Hi', messageId : '1', },
        { messageText : 'glhf', messageId : '2', },
        { messageText : 'gg wp', messageId : '3', },
        { messageText : 'Mhhhh... nice team', messageId : '4', },
        { messageText : 'BACKDOOOOR!!!', messageId : '5', }
    ];

    return (
        <div className={css.container}>
            <div className={css.dialogs}>
                <ul>

                    <ChooseUser userName= {usersData[0].userName} dialogId={usersData[0].dialogId}/>
                    <ChooseUser userName= {usersData[1].userName} dialogId={usersData[1].dialogId}/>
                    <ChooseUser userName= {usersData[2].userName} dialogId={usersData[2].dialogId}/>
                    <ChooseUser userName= {usersData[3].userName} dialogId={usersData[3].dialogId}/>
                    <ChooseUser userName= {usersData[4].userName} dialogId={usersData[4].dialogId}/>
                </ul>
            </div>

            <div className={css.messages}>
                <Message messageText = {messagesData[0].messageText}/>
                <Message messageText = {messagesData[1].messageText}/>
                <Message messageText = {messagesData[2].messageText}/>
                <Message messageText = {messagesData[3].messageText}/>
                <Message messageText = {messagesData[4].messageText}/>
            </div>
        </div>
    );
}

export default MessagesContainer;