import React from 'react';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Avatar from "./components/Ava";
import Description from "./components/Description";

function App() {
  return (
    <div className="app-wrapper">
        <Header></Header>
        <Menu></Menu>
        <Content>
            <Avatar />
            <Description />
        </Content>
        <Footer></Footer>
    </div>
  );
}

export default App;
