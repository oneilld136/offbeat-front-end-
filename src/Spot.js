import React, { Component } from 'react';

class Spot extends Component {

  handleClick=()=>{

    this.props.addFav(this.props.spot)
  }

  render() {
    return (

        <div className="flex-item">
           {this.props.spot.name}<span onClick={this.handleClick}>🍕</span>
           <br/>

           Neck of the Woods:{this.props.spot.address}
           <br/>
          Price Range:{this.props.spot.pricerange}
      </div>
    );
  }

}

export default Spot;
