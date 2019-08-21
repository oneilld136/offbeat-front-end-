import React, { Component } from 'react';
import Favorites from './Favorites'
import Browse from './Browse'

class Trip extends Component {

  state = {
    name:'',
    date:'',
    address:''
  }


  changeHandler = event => {
    this.setState({
      [event.target.name]:event.target.value
    });
  }

  handleSubmit=(event)=>{

    console.log(this.state)
  event.preventDefault()
  this.props.createTrip(this.state)
  this.setState({
    name:'',
    date:'',
    address:''
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
          type="text"
          placeholder="name this trip"
          value={this.state.name}
          onChange={this.changeHandler}

   />
   <input type="Date"
       name="date"
       type="text"
       placeholder="date"
       value={this.state.date}
       onChange={this.changeHandler}
/>
<input type="Address"
    name="address"
    type="text"
    placeholder="Neighborhood"
    value={this.state.address}
    onChange={this.changeHandler}
/>
<input type="Submit" value="Lets Go!"/>
     <h2>Your Trips: </h2>
     <ul>
      {this.props.mytrips.map(trip => {
return (
  <div>
      <h3>{trip.name}</h3>
     <li>{trip.address}</li>
     <li>{trip.date}</li>
     </div>
  ) } )

 }
     </ul>
     </form>

</div>
</div>
    );
  }

}

export default Trip;
