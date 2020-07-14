import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import LoginPage from './Components/LoginPage';
import PrivateRoute from './Components/PrivateRoute'
import FriendsPage from './Components/FriendsPage'
import AddFriend from './Components/AddFriend'
// import FriendsList from './Components/FriendsList'

import './App.css';

function App() {
  return (
      <div className="App">
       <Link to="/login">Login</Link>
       <Switch>
         <PrivateRoute exact path="/protected" component={FriendsPage}/>
         <Route path="/login" component={LoginPage} />
         <PrivateRoute path='/protected/addfriend' component={AddFriend}/>
       </Switch>
      </div>
  );
}

export default App;
