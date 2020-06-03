import React from 'react';
import './App.css';
import Header from "./components/alwaysDisplayed/Header/Header";
import Content from "./components/alwaysDisplayed/mainContent/Content";
import Menu from "./components/alwaysDisplayed/NavMenu/Menu";
import Footer from "./components/alwaysDisplayed/Footer/Footer";
import Avatar from "./components/profile/profileAvatar/Ava";
import Description from "./components/profile/profileDescription/Description";

function App() {
    return (
        <div className="app-wrapper">
            <Header></Header>
            <Menu></Menu>
            <Content>
                <Avatar/>
                <Description/>
            </Content>
            <Footer></Footer>
        </div>
    );
}

export default App;
