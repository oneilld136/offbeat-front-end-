import React, { Component } from 'react';
import './App.css';
import Spot from './Spot'

class Favorites extends Component {

   displayLikedSpots = () => {
     console.log(this.props)
     return this.props.likedSpot.map(spot => {
       return <Spot key={spot.id} spot={spot} addFav={this.props.addFav}/>
     })
   }


  render() {

    return (
      <div className="favorite">
          <h1><span>⭐️</span></h1>
          <ul className="favoriteList">
          <span></span>
          <h5> {this.displayLikedSpots()} </h5>

          </ul>
      </div>
    );
  }

}

export default Favorites
;
