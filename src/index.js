import React from 'react';
import * as serviceWorker from './serviceWorker';
import store  from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export function renderEntireTree() {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} addPost={store.addPost.bind(store)} updatePostChange = {store.updatePostChange.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store);

store.subscribe(renderEntireTree)
serviceWorker.unregister();
