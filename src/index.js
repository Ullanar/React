import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                    <Provider store={store}>

                <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>

                    </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );


serviceWorker.unregister();
