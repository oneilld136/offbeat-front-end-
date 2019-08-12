import React, { Component } from 'react';

class Spot extends Component {

  handleClick=()=>{
    this.props.addFav(this.props.spot)
  }

  render() {
    return (
      <div>

        <div className="flex-item">
          <span onClick={this.handleClick}>🌟</span>
          <h3>{this.props.spot.name}</h3>
          <h5>{this.props.spot.address}</h5>
          <h5>{this.props.spot.pricerange}</h5>
          <h5>{this.props.spot.zip}</h5>



          </div>
      </div>
    );
  }

}

export default Spot;
