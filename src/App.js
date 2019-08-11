
import './App.css';

import React, { Component } from 'react';
import Login from './Login'
import Profile from './Profile'
import SignUp from './SignUp'
import Favorites from './Favorites'
import Browse from './Browse'
import Home from './Home'
import Navigation from './Navigation'

import {Switch, Route} from 'react-router-dom'

class App extends Component {

  state = {
  name: ''
}

componentDidMount() {
  if (localStorage.token) {

    fetch('http://localhost:3001/', {
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

  render() {
    return (


      <Switch>
      <Navigation />

      <h1 class="header"> OFFbEAT</h1>
        <Route
        path= "/profile"
        render={(routerProps) => <Profile  {...routerProps} name={this.state.name} />} />

        <Route path= "/favorites/:id" component={Favorites}/>
        <Route path = "/favorites"
        render={(routerProps) => <Favorites {...routerProps} name={this.state.name}/>}/>

        <Route path="/signup" component={SignUp} />
        <Route path= "/browse" component={Browse}/>
        <Route path= "/login" component={Login}/>
        <Route exact path= "/" component={Home}/>
      </Switch>



    );
  }

}

export default App;
