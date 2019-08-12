
import './App.css';

import React, { Component } from 'react';
import Login from './Login'
import Profile from './Profile'
import SignUp from './SignUp'
import Favorites from './Favorites'
import Browse from './Browse'
import Home from './Home'


import {Switch, Route} from 'react-router-dom'

class App extends Component {

  state = {
  name: '',

}

componentDidMount() {
  if (localStorage.token) {

    fetch('http://localhost:3001/profile', {
      headers: {
        Authorization: localStorage.token
      }
    })
    .then(res => res.json())
    .then(profileData => {
      this.setState({name: profileData.name})
    })
  }

}



// react router docs
//
//   <h1 class="header"> OFFbEAT</h1>

  render() {
    return (


      <Switch>


        <Route exact path= "/profile"
        render={(routerProps) => <Profile  {...routerProps} name={this.state.name} />} />

        <Route exact path= "/favorites/:id" component={Favorites}/>
        <Route exact path = "/favorites"
        render={(routerProps) => <Favorites {...routerProps} name={this.state.name}/>}/>

        <Route exact path="/signup" component={SignUp} />
        <Route exact path= "/browse" component={Browse}/>
        <Route exact path= "/login" component={Login}/>
        <Route exact path= "/" component={Home}/>
      </Switch>



    );
  }

}

export default App;
