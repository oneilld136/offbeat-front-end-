
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
  likedSpot: []
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
    fetch('http://localhost:3000/likes', {
  method: 'POST',
  headers: {
    Authorization: localStorage.token,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    spot_id: spot.id})
})
.then(res => res.json())
.then(data =>{

    this.setState({
      likedSpot:[...this.state.likedSpot,spot]
  })
})
}
}

  render() {

console.log("check", this.state.likedSpot);
    return (
      <div>


      <Switch>


        <Route exact path= "/profile"
        render={(routerProps) => <Profile  {...routerProps} addFav={this.addFav} name={this.state.name} likedSpot={this.state.likedSpot}/>} />

        // <Route exact path= "/likes/id" component={Favorites}/>
        <Route exact path = "/likes"
        render={(routerProps) => <Favorites likedSpot={this.state.likedSpot} {...routerProps} name={this.state.name}/>}/>

        <Route exact path="/signup" component={SignUp} />

        <Route exact path= "/browse"
        render={(routerProps) => <Browse addFav={this.addFav} {...routerProps} />}/>

        <Route exact path= "/login" component={Login}/>
        <Route exact path= "/" component={Home}/>
      </Switch>

  </div>

    );
  }

}

export default App;
