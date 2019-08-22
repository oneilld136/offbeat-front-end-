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
      hovered:""
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

handleHover = (spot) => {
  // console.log(spot.name)

     this.setState({
       hovered:spot.name
     });


 }
    displayLikedSpots = () => {

      return this.props.likedSpot.map(spot => {
        return <Spot onHover={this.handleHover} key={spot.id} spot={spot} addFav={this.props.addFav}/>
      })
    }

    render () {
      console.log(this.props.likedSpot)
      return (


        <div>
        <Navigation />
        <br/>

        <br/>


          <div className="newname">{this.props.name ? (`Hey ${this.props.name}`) : null}</div>
           <h5>Here are your favorite spots:</h5>
          <div className="liked"> {this.displayLikedSpots()} </div>



          <Trip mytrips={this.state.mytrips} createTrip={this.createTrip}/>


        </div>
      );
    }
  }

export default Profile;
