import React, { Component } from 'react';
// import Spot from './Spot'

class Favorites
 extends Component {

 // userFavs =()=>{
 //   return this.props.favorites((spot) => {
 //     return <Spot key={spot.id} spot={spot}/>
 //   })
 // }


  render() {
    return (
      <div>
          hi, {this.props.name} here are your favorites:
          <ul className="favoriteList">
          <span>⭐️</span>

          </ul>
      </div>
    );
  }

}

export default Favorites
;
