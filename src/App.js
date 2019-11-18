import React from 'react';
import MainBase from './components/MainBase.js';
import Home from './components/Home/Home.js';
import Claims from './components/Claims.js';
import Alerts from './components/Alerts.js';
import Cases from './components/Cases.js';
import Search from './components/Search.js';
import OpenClaim from './components/OpenClaim.js';


import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
    
    <Router>
    <div className="App">
      <MainBase/>
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/Claims'component={Claims}/>
      <Route path='/Alerts'component={Alerts}/>
      <Route path='/Cases'component={Cases}/>
      <Route path='/Search'component={Search}/>
      <Route path='/OpenClaim'component={OpenClaim}/>
      </Switch>
    </div>
    </Router>
    
    
  );
}

export default App;
