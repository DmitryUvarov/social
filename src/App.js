import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Main } from "./components/Main";
import './App.scss';
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {

  return (
    <div className="App">
      <Router>
        <HeaderContainer />
        <Sidebar />
        <Main />
      </Router>

    </div>
  );
}

export default App;
