import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import LoginPage from './Components/LoginPage';
import PrivateRoute from './Components/PrivateRoute'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
       <Link to="/login">Login</Link>
       <Link to="/protected">Protected Page</Link>
       <Switch>
         <PrivateRoute exact path="/protected" component/>
         <Route path="/login" component={LoginPage} />
         <Route component={LoginPage} />
       </Switch>
      </div>
    </Router>
  );
}

export default App;
