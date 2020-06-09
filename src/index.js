import React from 'react';
import * as serviceWorker from './serviceWorker';
import store  from "./redux/store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export function renderEntireTree() {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store);

store.subscribe(renderEntireTree)
serviceWorker.unregister();
