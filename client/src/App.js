import React, {Fragment} from 'react';



import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/layout/Navbar"

const  App =() => {
  <Router>
    return ( <div className="App">
      <Navbar />
      My App</div>
    );
  </Router>
};

export default App;
