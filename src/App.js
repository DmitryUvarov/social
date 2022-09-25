import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header/Header'
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Main } from "./components/Main";
import './App.scss';

function App(props) {

  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Main />
      </Router>

    </div>
  );
}

export default App;
