import React, { Component } from 'react';
import Map from './Map';
import Spot from './Spot';
import Navigation from './Navigation'
import Favorites from './Favorites'
import Filter from './Filter'
// import Profile from './Profile'
import Trip from './Trip'
import './App.css';

class Browse extends Component {

state = {
  browseSpot:[],
  filterTerm:"All",
  sortTerm:"",
  selectedItem: "",
  hovered:null
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

  handleHover = (spot) => {
    // console.log(spot.name)

       this.setState({
         hovered:spot.name
       });


   }




     showInfo=(selectedItem) => {
       this.setState({ selectedItem:selectedItem});
       console.log(this.state.selectedItem);
     }




filterSpotTerm = () => {

let copiedSpots = [...this.state.browseSpot]
  // Filter the spots
  if (this.state.filterTerm === 'All') {
    copiedSpots = [...this.state.browseSpot]
  } else  {
    copiedSpots = copiedSpots.filter(spot=> spot.address === this.state.filterTerm)
  }


  if (this.state.sortTerm === "Play")
    {
    copiedSpots = copiedSpots.filter(spot=> spot.cat === this.state.sortTerm)
    }
    else if (this.state.sortTerm === "Eat")
    {
      copiedSpots = copiedSpots.filter(spot=> spot.cat === this.state.sortTerm)
    }
    else if  (this.state.sortTerm === "Culture")
    {
      copiedSpots = copiedSpots.filter(spot=> spot.cat === this.state.sortTerm)
    }

    return copiedSpots.map(spot => {
    return <Spot key={spot.id} showInfo={this.showInfo} onHover={this.handleHover} spotInfo={this.spotInfo} spot={spot} addFav={this.props.addFav}/>
  })

  }




  displaySpots = () => {
    return this.state.browseSpot.map(spot => {
      return <Spot key={spot.id} showInfo={this.showInfo} onHover={this.handleHover}  spotInfo={this.spotInfo} spot={spot} addFav={this.props.addFav}/>
    })
  };






  render() {

console.log(this.state.hovered);

    return (


      <div>
        <Navigation />
      <div>
          <Filter setFilterTerm = {this.setFilterTerm}
          term={this.state.filterTerm}
          setSortTerm={this.setSortTerm}
          sortTerm={this.state.sortTerm}/>
          <div>

        <div className="map"> <Map hovered={this.state.hovered} onHover={this.handleHover} spotInfo={this.spotInfo} selectedItem={this.state.selectedItem} spots={this.state.browseSpot}/> </div>

            <h6 className="add">Select the 💥 to add to your profile</h6>
        <div>  <div className= "flex-container">{(this.filterSpotTerm())}</div>


        </div>
        </div>
        </div>

        </div>








    );
  }

}

export default Browse;
