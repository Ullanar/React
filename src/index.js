import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let usersDataTemplates = [
    {userName: 'Miku', dialogId: '1',},
    {userName: 'Vaffe', dialogId: '2',},
    {userName: 'Aurelian', dialogId: '3',},
    {userName: 'Attache', dialogId: '4',},
    {userName: 'Alex', dialogId: '5',}
];

let messagesDataTemplates = [
    {messageText: 'Hi', messageId: '1',},
    {messageText: 'glhf', messageId: '2',},
    {messageText: 'gg wp', messageId: '3',},
    {messageText: 'Mhhhh... nice team', messageId: '4',},
    {messageText: 'BACKDOOOOR!!!', messageId: '5',}
];

ReactDOM.render(
    <React.StrictMode>
        <App messages = {messagesDataTemplates} userDialogs = {usersDataTemplates}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
