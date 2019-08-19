import React, { Component } from 'react';

const image = {

}
class Spot extends Component {


  state ={
    clicked: false
  }

  handleCameraClick=()=>{
    this.setState({
      clicked:true
    });

  }


  handleClick=()=>{
    console.log("i clicked")
    console.log(this.props);
    this.props.addFav(this.props.spot)
  }


  render() {
    const image = this.state.clicked? this.props.spot.img : null

    return (


        <div className="flex-item" >
           {this.props.spot.name}<span onClick={this.handleClick}>💥</span>
           <br/>
            <br/>
           {this.props.spot.address}
        <br/>
           {this.props.spot.price}

             {/*   <div>
        // {/     <span className="camera" onClick={this.handleCameraClick}>
          //
           <img className="picture" src={image} style={{width: 300, height: 300}}/>
          //       </span>
          //       </div> */}

      </div>
    );
  }

}

export default Spot;
