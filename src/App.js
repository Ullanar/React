import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import MiniDrawer from "./components/mainArea/mainArea";

function App(props) {
    return (
        <BrowserRouter>
            <MiniDrawer state = {props.state}
                        store = {props.store}
                        dispatch = {props.dispatch}/>
        </BrowserRouter>
    );
}

export default App;
