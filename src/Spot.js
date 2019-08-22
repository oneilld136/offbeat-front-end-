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


  mapClick=()=>{
    this.props.showInfo(this.props)
  }

  onMouseMove=(event)=>{
    this.props.onHover(this.props.spot)
    

  }


  handleClick=()=>{
    console.log("i clicked")
    console.log(this.props);
    this.props.addFav(this.props.spot)
    alert("🌟 Yahoo! This spot has been saved to your profile 🌟");
  }


  render() {
    const image = this.state.clicked? this.props.spot.img : null

    return (


        <div  className="flex-item" >
           <h6 onMouseMove={this.onMouseMove}>{this.props.spot.name}<span onClick={this.handleClick}>💥</span></h6>
           <h6> {this.props.spot.address}    ({this.props.spot.price})</h6>
        <br/>


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
