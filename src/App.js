import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import SideBar from "./Components/SideBar";
import Header from "./Components/Header"

function App() {
  function handleClick(){
    console.log("test");
  }
  return (
    <Router>
        <SideBar portalType="Customer" />
      <div >
        <Header heading="Customer Portal" subheading="Domain Acounts" showButton={true} onButtonClick={handleClick}/>
      </div>

    </Router>
  );
}

export default App;
