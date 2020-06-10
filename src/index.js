import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export function renderEntireTree() {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>

                <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>

            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store);

store.subscribe(() => {
    renderEntireTree();
    let state = store.getState();
})
serviceWorker.unregister();
