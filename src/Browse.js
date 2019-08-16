import React, { Component } from 'react';
import Map from './Map';
import Spot from './Spot';
import Navigation from './Navigation'
import Favorites from './Favorites'
import Filter from './Filter'
import Profile from './Profile'
import Trip from './Trip'
import './App.css';


class Browse extends Component {


state = {
  browseSpot:[],
  likedSpot:[],
  filterTerm:"All",
  sortTerm:""
}




  componentDidMount() {

    fetch('http://localhost:3000/spots')
    .then(response => response.json())
    .then(spotData => this.setState({browseSpot:spotData}))
  }


  setFilterTerm = (term) =>
 this.setState({
   filterTerm:term
 });



  setSortTerm = (term) =>
  this.setState({
    sortTerm:term
     });



filterSpotTerm = () => {


let copiedSpots = [...this.state.browseSpot]
  // Filter the spots
  if (this.state.filterTerm === 'All') {
    copiedSpots = [...this.state.browseSpot]
  } else {
    copiedSpots = this.state.browseSpot.filter(spot=> spot.address === this.state.filterTerm)
  }
return copiedSpots.map(spot => {
return <Spot key={spot.id} spot={spot} addFav={this.addFav}/>
})
  }



  // if (this.state.sortTerm === "Play")
  //   {
  //   copiedSpots = this.state.browseSpot.filter(spot=> spot.cat === this.state.filterTerm)
  //   }
  //   else if (this.state.sortTerm === "Eat")
  //   {
  //     copiedSpots = this.state.browseSpot.filter(spot=> spot.cat === this.state.filterTerm)
  //   }
  //   else if  (this.state.sortTerm === "Culture")
  //   {
  //     copiedSpots = this.state.browseSpot.filter(spot=> spot.cat === this.state.filterTerm)
  //   }
  //
  // }






  addFav = (spot) => {

    if (!this.state.likedSpot.includes(spot)) {
    this.setState({
      likedSpot:[...this.state.likedSpot,spot]
    });
  }
  }


  displaySpots = () => {
    return this.state.browseSpot.map(spot => {
      return <Spot key={spot.id} spot={spot} addFav={this.addFav}/>
    })
  }




  render() {

console.log(this.state.browseSpot)


    return (


      <div>
        <Navigation />
          <Filter setFilterTerm = {this.setFilterTerm}
          term={this.state.filterTerm}
          setSortTerm={this.setSortTerm}
          sortTerm={this.state.sortTerm}/>

      <div className="flex-container">
        <div> <Map spots={this.state.browseSpot}/> </div>


        <div className= "flex">{(this.filterSpotTerm())}</div>




        </div>
          <Favorites likedSpot={this.state.likedSpot} liked={this.addFav}/>
        </div>








    );
  }

}

export default Browse;
