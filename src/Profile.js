import React, { Component } from 'react';
import Browse from './Browse'
import Favorites from './Favorites'
import Trip from './Trip'
import Navigation from './Navigation'
import Spot from './Spot'
import { Link } from 'react-router-dom'
import './App.css';

class Profile extends Component {



    state = {
      mytrips:[],
    }


    componentDidMount() {
      if (!localStorage.token) {
        this.props.history.push('/login')
      }
    }

  createTrip = (createdTrip) => {
    this.setState({
      mytrips: [...this.state.mytrips,createdTrip]
    });
}

    displayLikedSpots = () => {

      return this.props.likedSpot.map(spot => {
        return <Spot key={spot.id} spot={spot} addFav={this.props.addFav}/>
      })
    }

    render () {
      console.log(this.props.likedSpot)
      return (


        <div>
        <Navigation />
        <br/>

        <br/>
        <div className="name">

          <h1>{this.props.name ?(`Hey ${this.props.name}`): null}</h1>

          <ul>
          <li>
          <h3> {this.displayLikedSpots()} </h3>
          </li>

          <Trip mytrips={this.state.mytrips} createTrip={this.createTrip}/>

            <li>
            </li>
          </ul>

        </div>
        </div>
      );
    }
  }

export default Profile;
