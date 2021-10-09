import logo from './logo.svg';
import './App.css';
import StudentDashboard from './Components/StudentDashboard/StudentDashboard'
import CollegeDashboard from './Components/CollegeDashboard/CollegeDashboard'
import SignIn from './Components/SignIn/SignIn'
import { Route , Switch } from "react-router-dom";
import React from "react"
import Logo from '../src/assets/HackHarvardLogo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} height="5%" width="5%" align="left"/>
        nify
      </header>
        <Switch>
          <Route path="/signin" component={SignIn}/>
          <Route path="/dashboard" component={StudentDashboard}/>
          <Route path="/college" component={CollegeDashboard}/>
        </Switch>
    </div>
  );
}

export default App;
