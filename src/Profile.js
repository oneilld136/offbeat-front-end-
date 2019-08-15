import React, { Component } from 'react';
import Browse from './Browse'
import Favorites from './Favorites'
import Trip from './Trip'
import Spot from './Spot'
import { Link } from 'react-router-dom'
import './App.css';

class Profile extends Component {

    state = {
      mytrips:[]
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

    // displayLikedSpots = () => {
    //   console.log(this.props)
    //   return this.props.likedSpot.map(spot => {
    //     return <Spot key={spot.id} spot={spot} addFav={this.props.addFav}/>
    //   })
    // }

    render () {
      return (
        <div>
        <h1>
          {
            this.props.name ?
            (`Welcome, ${this.props.name}!`):
            null
          }
          </h1>
          <ul>
          <li>

          </li>
          <Trip mytrips={this.state.mytrips} createTrip={this.createTrip}/>
          
            <li>
              <Link className="my-cool-link" to="/browse">Browse Super Hip Locations</Link>
            </li>
          </ul>
        </div>
      );
    }
  }

export default Profile;
