import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updatePostChange} from './redux/state'

export function renderEntireTree(props) {
    ReactDOM.render(
        <React.StrictMode>
            <App state={props} addPost={addPost} updatePostChange = {updatePostChange}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
