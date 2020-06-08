import React from 'react';
import './App.css';
import Header from "./components/alwaysDisplayed/Header/Header";
import Content from "./components/alwaysDisplayed/mainContent/Content";
import Menu from "./components/alwaysDisplayed/NavMenu/Menu";
import Footer from "./components/alwaysDisplayed/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Menu/>
                <Content messagesPageData = {props.state.messagesPage}
                         profilePageData = {props.state.profilePage}
                         addPost = {props.addPost}
                         updatePostChange = {props.updatePostChange}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
