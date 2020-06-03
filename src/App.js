import React from 'react';
import './App.css';
import Header from "./components/alwaysDisplayed/Header/Header";
import Content from "./components/alwaysDisplayed/mainContent/Content";
import Menu from "./components/alwaysDisplayed/NavMenu/Menu";
import Footer from "./components/alwaysDisplayed/Footer/Footer";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Menu />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
