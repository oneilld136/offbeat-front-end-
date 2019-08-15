import React, { Component } from 'react';

class Spot extends Component {

  handleClick=()=>{

    this.props.addFav(this.props.spot)
  }

  render() {
    return (

        <div className="flex-item">
           <h4>{this.props.spot.name} <span onClick={this.handleClick}>🌟</span></h4>
           <h5>Neck of the Woods:{this.props.spot.address}</h5>
          <h5>Price Range:{this.props.spot.pricerange}</h5>
      </div>
    );
  }

}

export default Spot;
