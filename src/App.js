
import './App.css';

import React, { Component } from 'react';
import Login from './Login'
import Profile from './Profile'
import SignUp from './SignUp'
import Favorites from './Favorites'
import Browse from './Browse'
import Home from './Home'
import Spot from './Spot'


import {Switch, Route} from 'react-router-dom'

class App extends Component {

  state = {
  name: '',
  likedSpot:[]
}



componentDidMount() {

  if (localStorage.token) {

    fetch('http://localhost:3000/profile', {
      headers: {
        Authorization: localStorage.token
      }
    })
    .then(res => res.json())
    .then(profileData => {
      console.log(profileData)
      this.setState({name: profileData.name})
    })
  }

}

displaySpots = () => {
  return this.state.browseSpot.map(spot => {
    return <Spot key={spot.id} spot={spot} addFav={this.addFav}/>
  })
}

addFav = (spot) => {
  if (!this.state.likedSpot.includes(spot)) {
  this.setState({
    likedSpot:[...this.state.likedSpot,spot]
  });
}
}







  render() {
    return (
      <div>


      <Switch>


        <Route exact path= "/profile"
        render={(routerProps) => <Profile  {...routerProps} name={this.state.name} />} />

        <Route exact path= "/favorites/:id" component={Favorites}/>
        <Route exact path = "/favorites"
        render={(routerProps) => <Favorites likedSpot={this.state.likedSpot} {...routerProps} name={this.state.name}/>}/>

        <Route exact path="/signup" component={SignUp} />
        <Route exact path= "/browse" component={Browse}/>
        <Route exact path= "/login" component={Login}/>
        <Route exact path= "/" component={Home}/>
      </Switch>

  </div>

    );
  }

}

export default App;
