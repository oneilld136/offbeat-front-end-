import React, { Component } from 'react';
import Favorites from './Favorites'
import Browse from './Browse'

class Trip extends Component {

  state = {
    name:'',
    date:'',
    address:''
  }

  handleSubmit=(event)=>{
    console.log(this.state)
  event.preventDefault()
  this.props.createTrip(this.state)
}

  changeHandler = event => {
    this.setState({
      [event.target.name]:event.target.value
    });
  }

  render() {
    console.log(this.props)
    return (
<div>
<div className="trip">
      <form onSubmit={this.handleSubmit}>

      <div>
      <h3> PLAN A DAY TRIP</h3>
      </div>

      <input type="Name"
          name="name"
          placeholder="name this trip"
          value={this.state.name}
          onChange={this.changeHandler}
   />
   <input type="Date"
       name="date"
       placeholder="date"
       value={this.state.date}
       onChange={this.changeHandler}
/>
<input type="Address"
    name="address"
    placeholder="Neighborhood"
    value={this.state.address}
    onChange={this.changeHandler}
/>
<input type="Submit" value="Lets Go!"/>
</form>

     <h2>Your Trips: </h2>
     {this.props.mytrips.map(trip => trip.name)}
     {this.props.mytrips.map(trip => trip.address)}
     {this.props.mytrips.map(trip => trip.date)}
</div>
</div>
    );
  }

}

export default Trip;
