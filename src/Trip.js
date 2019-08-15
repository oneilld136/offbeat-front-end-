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

      <form onSubmit={this.handleSubmit}>

      <div>
      <h1>🍕 PLAN A DAY TRIP🍕</h1>
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

     <h1>Your Trips</h1>
     {this.props.mytrips.map(trip => trip.name)}

</div>
    );
  }

}

export default Trip;
