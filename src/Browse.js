import React, { Component } from 'react';
import Map from './Map'
import Spot from './Spot'


class Browse extends Component {

  state = {
    browse:[],
    favorites:[]
  }

  componentDidMount() {
    fetch('http://localhost:3000/spots')
    .then(response => response.json())
    .then(spotData => this.setState({browse:spotData}))
  }

  addFav=(spot)=>{
    const alreadyTakenSpot = this.state.browse.find(favoritesSpot => favoritesSpot.id === spot.id)
    if (!alreadyTakenSpot) {
      this.setState({
        favorites: [...this.state.favorites, spot]
      });
    }
  }


  displaySpots=() => {
    return this.props.spots.map(spot => {
      return <Spot key={spot.id} spot={spot} addFav={this.props.addFav}/>
    })
  }



  render() {
    return (
      <div>

      <ul className="flex-container">
        <li> <Map/> </li>
        <li class= "flex-item">{this.displaySpots()}</li>
        </ul>

        </div>




    );
  }

}

export default Browse;
