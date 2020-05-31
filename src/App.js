import React from 'react';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-wrapper">
        <Header></Header>
        <Menu></Menu>
        <Content></Content>
        <Footer></Footer>
    </div>
  );
}

export default App;
